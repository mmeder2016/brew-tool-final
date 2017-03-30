/* ************************************************************************ */
/*
    
*/
var React = require('react');

var Calculations  = require( './panels/Calculations.js');
var Fermentables  = require( './panels/Fermentables.js');
var Hops  = require( './panels/Hops.js');
var helper  = require( '../utils/helpers');

var RecipeCreate = React.createClass({

    getInitialState: function() {
        console.log('Main getInitialState: function () {');
        return {
            recipe: {}
        };
    },

    addNewHop: function(data) {
        console.log('RecipeCreate addNewHop  () {');
        var nstr = Date.now().toString()
        var idStr = 'FFFFFFFFFFF' + nstr;
        idStr = idStr.slice(idStr.length - 24, idStr.length);
        this.state.recipe.hops.push({ _id: idStr, name: data, lbs: "", ozs: "", alphaAcid: "", minutes: "" });
        this.forceUpdate();
    },

    addNewFermentable: function(data) {
        console.log('RecipeCreate addNewFermentable  () {');
        var nstr = Date.now().toString()
        var idStr = 'FFFFFFFFFFF' + nstr;
        idStr = idStr.slice(idStr.length - 24, idStr.length);
        this.state.recipe.fermentables.push({ _id: idStr, name: data, lbs: "", ozs: "" });
        this.forceUpdate();
    },

    deleteHop: function(hopId) {
        console.log('RecipeCreate deleteHop  () {');
        // if it is not in the database
        var i = 0;
        // untilwe find the hop we want to delete
        for (i = 0; i < this.state.recipe.hops.length; i++) {
            if (this.state.recipe.hops[i]._id === hopId) {
                // hops already in database have _id ObjectIds
                // hops only added locally have _id begin with F's
                if (hopId.startsWith('FFFFFFFF')) {
                    this.state.recipe.hops.splice(i, 1);
                } else {
                    this.state.recipe.hops[i].removed = 'true';
                }
                // hop has either been deleted or property removed added and set to true
                break;
            }
        }
        this.forceUpdate();
    },

    deleteFermentable: function(fermentableId) {
        console.log('RecipeCreate deleteFermentable  () {');
        // if it is not in the database
        var i = 0;
        // until we find the fermentable we want to delete
        for (i = 0; i < this.state.recipe.fermentables.length; i++) {
            if (this.state.recipe.fermentables[i]._id === fermentableId) {
                // fermentables already in database have _id ObjectIds
                // fermentables only added locally have _id begin with F's
                if (fermentableId.startsWith('FFFFFFFF')) {
                    this.state.recipe.fermentables.splice(i, 1);
                } else {
                    this.state.recipe.fermentables[i].removed = 'true';
                }
                // fermentable has either been deleted or property removed added and set to true
                break;
            }
        }
        this.forceUpdate();
    },

    getRecipe: function(recipeId) {
        console.log('RecipeCreate getRecipe  () {');
        helper.getRecipe(recipeId).then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    saveRecipe: function() {
        console.log('RecipeCreate saveRecipe  () {');
        helper.updateRecipe(this.state.recipe).then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    newRecipe: function() {
        console.log('RecipeCreate newRecipe  () {');
        helper.newRecipe().then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    deleteRecipe: function() {
        console.log('RecipeCreate deleteRecipe  () {');
        helper.deleteRecipe(this.state.recipe).then(function(response) {
            console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    saveToJSON: function() {
        console.log('RecipeCreate saveToJSON  () {');
        helper.saveToJSON(this.state.recipe).then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    calculationChange: function(varName, val) {
        console.log('RecipeCreate calculationChange  () {');
        console.log('varName:' + varName + ' val:' + val);

        if (varName === 'recipeName') {
            this.state.recipe.recipeName = val;
        } else if (varName === 'brewDate') {
            this.state.recipe.brewDate = val;
        } else if (varName === 'batchSize') {
            this.state.recipe.batchSize = val;
            // only the batchsize can change the calculations
        } else if (varName === 'style') {
            this.state.recipe.style = val;
        }
        // We can later add code to nnly update the CalculationsPanel
        // We do not need to udate the Hops and Fermentables PAnel
        this.forceUpdate();
    },

    fermentableChange: function(fermObjId, varName, val) {
        console.log('RecipeCreate fermentableChange  () {');
        for (var i = 0; i < this.state.recipe.fermentables.length; i++) {
            console.log('inloop:' + this.state.recipe.fermentables[i]._id)
            if (this.state.recipe.fermentables[i]._id === fermObjId) {
                if (varName === 'ozs') {
                    this.state.recipe.fermentables[i].ozs = val;
                } else if (varName === 'lbs') {
                    this.state.recipe.fermentables[i].lbs = val;
                } else if (varName === 'name') {
                    this.state.recipe.fermentables[i].name = val;
                }
                break;
            }
        }
        this.forceUpdate();
    },

    hopChange: function(hopObjId, varName, val) {
        console.log('RecipeCreate hopChange  () {');
        for (var i = 0; i < this.state.recipe.hops.length; i++) {
            console.log('inloop:' + this.state.recipe.hops[i]._id)
            if (this.state.recipe.hops[i]._id === hopObjId) {
                if (varName === 'ozs') {
                    this.state.recipe.hops[i].ozs = val;
                } else if (varName === 'lbs') {
                    this.state.recipe.hops[i].lbs = val;
                } else if (varName === 'minutes') {
                    this.state.recipe.hops[i].minutes = val;
                } else if (varName === 'alphaAcid') {
                    this.state.recipe.hops[i].alphaAcid = val;
                } else if (varName === 'name') {
                    this.state.recipe.hops[i].name = val;
                }
                break;
            }
        }
        //this.renderCalculationsPanel();
        this.forceUpdate();
    },

    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    </div>
                </div>
                <div className="row" id="ingredients-row">
                    <div className="col-lg-6 col-lg-offset-0 col-md-6">
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Hops hopChange = { this.hopChange } addNewHop = { this.addNewHop } deleteHop = { this.deleteHop } hops = { this.state.recipe.hops }/>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = RecipeCreate;

