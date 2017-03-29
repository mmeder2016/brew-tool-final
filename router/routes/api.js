/* ************************************************************************ */
/*
    Server API Routing -


    NOTE: The module arguments are required. And your code will use them to 
    access the Express application object, database object, and the root path 
    of the application.

    
*/
module.exports = function(app) {

    var db = app.get('db');
    var brew = app.get('brew');

    var path = require('path');
    var fs = require('fs');

    // where the JSON data files are kept
    var dataLoc = path.join(app.get('approot'), '/data');

    /* ******************************************************************** */
    /*
        POST /api/seedall - Read all JSON files in /data and
        seed the appropriate collection(s).

        Usage:
            POST http://server:port/api/seedall

        NOTE: Any file name starting with '-' will be ignored.
    */
    app.post('/api/seedall', function(req, res) {
        console.log(getReqInfo(req));

        // no response sent, or even necessary during development
        if (res !== undefined) res.end();

        /*
            Read all files in the current folder, look for files
            with a '.json' extension but where the name does not
            start with '-'.
        */
        fs.readdirSync(dataLoc).filter(function(file) {
                return (file.indexOf('.') !== 0) && (file.indexOf('-') !== 0) && (file.slice(-5) === '.json');
            })
            .forEach(function(file) {
                seedCollection(file);
            });
    });

    /*
        POST /api/seed?filename - Read a named JSON files that should
        be found in /data use it to seed the appropriate collection.

        Usage:
            POST http://server:port/api/seed?modname=ModelName

    */
    app.post('/api/seed', function(req, res) {
        console.log(getReqInfo(req));
        // no response sent, or even necessary during development
        if (res !== undefined) res.end();
        seedCollection(req.query.modname + '.json');
    });

    /*
        POST /api/seed?filename - Read a named JSON files that should
        be found in /data use it to seed the appropriate collection.

        Usage:
            POST http://server:port/api/export?modname=ModelName

        Where: "ModelName" is the exact name of the model to be 
        exported.

    */
    app.post('/api/export', function(req, res) {
        console.log(getReqInfo(req));
        // no response sent, or even necessary during development
        if (res !== undefined) res.end();
        // use a file name that will be ignored by 'seed all' and
        // indicates that it contains exported data
        exportCollection(req.query.modname);
    });

    /*
        Seed a collection with data contained within a JSON file.
    */
    function seedCollection(file) {

        var collDef = require(path.join(dataLoc, file));

        console.log('seedCollection() - file = ' + file);
        console.log('seedCollection() - model = ' + collDef.model);
        console.log('seedCollection() - length = ' + collDef.data.length);

        var model = db.conn.models[collDef.model];

        var docsLen = collDef.data.length;
        var docCount = 0;

        collDef.data.map(function(doc) {
            var doctmp = model(doc);
            doctmp.save(function(err, _doc) {
                if (err) throw err;
                docCount += 1;
                if (docCount === docsLen) {
                    console.log('seedCollection() - seed complete - ' + collDef.model);
                }
            });
        });
    };

    /*
        Export data from a collection to a JSON file using a 
        model name.
    */
    function exportCollection(modelName) {

        var exportData = {};

        // Name the file so that it will be ignored by a seed 
        // all command.
        var file = '-' + modelName + '_export.json';
        var model = db.conn.models[modelName];

        model.find()
            .exec(function(err, docs) {
                if (err) throw err;

                exportData.model = modelName;
                exportData.data = JSON.parse(JSON.stringify(docs));

                fs.writeFile(path.join(dataLoc, file), JSON.stringify(exportData), function(err) {
                    if (err) throw err;
                    console.log('exportCollection() - data export complete ' + file + ' has ' + exportData.data.length + ' documents');
                });
            });
    };

    /*
     */
    function getReqInfo(req) {
        return '' + req.method + ' - ' + req.originalUrl;
    };

    /* ******************************************************************** */
    /*
        POST /api/addrecipe - 
    */
    app.post('/api/addrecipe', function(req, res) {
        //console.log(getReqInfo(req));
        console.log('app.post("/api/addrecipe", function(req, res) {');
        recipe = new db.Recipe();
        recipe.save(function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
                db.Recipe.findById(doc._id)
                    .populate("hops")
                    .populate("fermentables")
                    .exec(function(error, doc) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Recipe added:' + doc);
                            res.json(doc);
                        }
                    });
            }
        });
    });

    /* ******************************************************************** */
    /*
        addrecipe() - 
    */
    function addrecipe() {

    };

    /////////////////////////////////////////////////////////////
    ///////////////////////ROUTES////////////////////////////////
    app.get("/recipe", function(req, res) {
        console.log('app.get("/recipe", function(req, res) {');
        var id = req.body.id;
        // HACK
        // id = "58dadb15220f5a09fc7b831b";

        db.Recipe.findById(id)
            .populate("hops")
            .populate("fermentables")
            .exec(function(error, doc) {
                if (error) {
                    console.log(error);
                } else {
                    res.json(doc);
                }
            });
    });

    app.post("/newHop", function(req, res) {
        console.log('app.post("/newHop", function(req, res) {');
        var hop = new db.Hop({ "name": req.body.name, "lbs": "0", "ozs": "0", "alphaAcid": "0", "minutes": "0" });
        // Update recipe before and only add hop if it succeeds
        hop.save(function(error, savedHop) {
            if (error) {
                console.log(error);
            } else {
                console.log(savedHop);
                hopId = savedHop._id;
                db.Recipe.findByIdAndUpdate({ "_id": req.body.id }, { $push: { "hops": savedHop._id } }, { new: true }, function(err, doc) {
                    if (err) {
                        console.log(err);
                    } else {
                        db.Recipe.findById(req.body.id)
                            .populate("hops")
                            .populate("fermentables")
                            .exec(function(error, doc) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    res.json(doc);
                                }
                            });
                    }
                });
            }
        });
    });

    app.delete("/deleteHop", function(req, res) {
        console.log('app.delete("/deleteHop", function(req, res) {');
        // Update the Recipe removing the hop
        db.Recipe.findByIdAndUpdate(req.body.recipeId, { $pull: { 'hops': req.body.hopId } }, { new: true }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                // Delete the hop from the hops database
                db.Hop.findByIdAndRemove(req.body.hopId, function(error, hopdoc) {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    } else {
                        console.log("Deleted Hop:id:" + req.body.hopId);
                        db.Recipe.findById(req.body.recipeId)
                            .populate("hops")
                            .populate("fermentables")
                            .exec(function(error, doc) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    console.log(doc);
                                    res.json(doc);
                                }
                            });
                    }
                });
            }
        });
    });

    app.post("/newFermentable", function(req, res) {
        console.log('app.post("/newFermentable", function(req, res) {');
        var fermentable = new db.Fermentable({ "name": req.body.name, "lbs": "0", "ozs": "0" });
        // Update recipe before and only add fermentable if it succeeds
        fermentable.save(function(error, savedFermentable) {
            if (error) {
                console.log(error);
            } else {
                console.log(savedFermentable);
                fermentableId = savedFermentable._id;
                db.Recipe.findByIdAndUpdate({ "_id": req.body.id }, { $push: { "fermentables": savedFermentable._id } }, { new: true }, function(err, doc) {
                    if (err) {
                        console.log(err);
                    } else {
                        db.Recipe.findById(req.body.id)
                            .populate("hops")
                            .populate("fermentables")
                            .exec(function(error, doc) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    res.json(doc);
                                }
                            });
                    }
                });
            }
        });
    });

    app.delete("/deleteFermentable", function(req, res) {
        console.log('app.delete("/deleteFermentable", function(req, res) {');
        // Update the Recipe removing the fermentable
        db.Recipe.findByIdAndUpdate(req.body.recipeId, { $pull: { 'fermentables': req.body.fermentableId } }, { new: true }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {

                // Delete the fermentable from the fermentables database
                db.Fermentable.findByIdAndRemove(req.body.fermentableId, function(error, fermentabledoc) {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    } else {
                        console.log("Deleted Fermentable:id:" + req.body.fermentableId);
                        db.Recipe.findById(req.body.recipeId)
                            .populate("hops")
                            .populate("fermentables")
                            .exec(function(error, doc) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    res.json(doc);
                                }
                            });
                    }
                });
            }
        });
    });

    app.post("/updateRecipe", function(req, res) {
        console.log('app.post("/updateRecipe", function(req, res) {');
        var hopsPromises = req.body.recipe.hops.map(function(hmod) {
            return db.Hop.findByIdAndUpdate(hmod._id, { name: hmod.name, lbs: hmod.lbs, ozs: hmod.ozs, alphaAcid: hmod.alphaAcid, minutes: hmod.minutes }).exec();
        });
        var fermentablesPromises = req.body.recipe.fermentables.map(function(fmod) {
            return db.Fermentable.findByIdAndUpdate(fmod._id, { name: fmod.name, lbs: fmod.lbs, ozs: fmod.ozs }).exec();
        });
        var recipePromise = db.Recipe.findByIdAndUpdate(req.body.recipe._id, {
            version: req.body.recipe.version,
            dateCreated: req.body.recipe.dateCreated,
            dateLastEdit: req.body.recipe.dateLastEdit,
            recipeName: req.body.recipe.recipeName,
            style: req.body.recipe.style,
            brewDate: req.body.recipe.brewDate,
            batchSize: req.body.recipe.batchSize,
            mashingComments: req.body.recipe.mashingComments,
            hopComments: req.body.recipe.hopComments,
            yeast: req.body.recipe.yeast,
            originalGravity: req.body.recipe.originalGravity,
            finalGravity: req.body.recipe.finalGravity,
            fermentingComment: req.body.recipe.fermentingComment
        }).exec();
        // Avter promises complete, get a copy of the new recipe object and return it
        Promise.all([recipePromise].concat(hopsPromises, fermentablesPromises)).then(function() {
            console.log('All promises complete.');
            db.Recipe.findById(req.body.recipe._id)
                .populate("hops")
                .populate("fermentables")
                .exec(function(error, doc) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.json(doc);
                    }
                });
        });
    });

    app.get("/hoplist", function(req, res) {
        console.log('app.get("/hoplist", function(req, res) {');
        res.json(brew.hops);
    });

    app.get("/fermentablelist", function(req, res) {
        console.log('app.get("/fermentablelist", function(req, res) {');
        res.json(brew.fermentables);
    });

    // See the data that was acquired from the brewerydb api
    app.post("/collections", function(req, res) {
        console.log();
        // console.log(brewCategory);
        // console.log(brewStyles);
        // console.log(brewYeasts);
        console.log(brew.hops);
        // console.log(brewFermentables);
        res.send('Check server logging');
    });
};