// Include React
var React = require("react");

var HopsPanel = require("../components/HopsPanel");
var FermentablesPanel = require("../components/FermentablesPanel");
var CalculationsPanel = require("../components/CalculationsPanel");
//var Hops = require("../components/Hops");
//var Feremntables = require("../components/Feremntables");
var helper = require("./utils/helpers");

var Main = React.createClass({
    getInitialState: function() {
        console.log('Main getInitialState: function () {');
        return {
            recipe: {}
        };
    },

    addNewHop: function(data) {
        console.log('Main addNewHop : function () {');
        var nstr = Date.now().toString()
        var idStr = 'FFFFFFFFFFF' + nstr;
        idStr = idStr.slice(idStr.length - 24, idStr.length);
        this.state.recipe.hops.push({ _id: idStr, name: data, lbs: "", ozs: "", alphaAcid: "", minutes: "" });
        this.forceUpdate();
    },

    addNewFermentable: function(data) {
        console.log('Main addNewFermentable : function () {');
        var nstr = Date.now().toString()
        var idStr = 'FFFFFFFFFFF' + nstr;
        idStr = idStr.slice(idStr.length - 24, idStr.length);
        this.state.recipe.fermentables.push({ _id: idStr, name: data, lbs: "", ozs: "" });
        this.forceUpdate();
    },



    deleteHop: function(hopId) {
        console.log('Main deleteHop : function () {');
        console.log(this.state.recipe);
        // if it is not in the database
        var i = 0;
        for (i = 0; i < this.state.recipe.hops.length; i++) {
            if (this.state.recipe.hops[i]._id === hopId) {
                console.log('hopId:' + hopId);
                console.log('id:' + this.state.recipe.hops[i]._id);

                if (hopId.startsWith('FFFFFFFF')) {
                    console.log('afterdelete.')
                    this.state.recipe.hops = this.state.recipe.hops.splice(i, 1);
                    console.log(this.state.recipe);
                } else {
                    this.state.recipe.hops[i].removed = 'true';
                }
            }
        }
        this.forceUpdate();

    },

    getRecipe: function(recipeId) {
        console.log('Main getRecipe : function () {');
        helper.getRecipe(recipeId).then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    saveRecipe: function() {
        console.log('Main saveRecipe : function () {');
        helper.updateRecipe(this.state.recipe).then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    newRecipe: function() {
        console.log('Main newRecipe : function () {');
        helper.newRecipe().then(function(response) {
            //console.log(response);
            this.setState({
                recipe: response.data
            });
        }.bind(this));
    },

    calculationChange: function(varName, val) {
        console.log('Main calculationChange : function () {');
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
        console.log('Main fermentableChange : function () {');
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
        console.log('Main hopChange : function () {');
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

    // This function is for when the CalculationsPanel needs to be rendered. 
    // This is how you call functions in children
    // renderCalculationsPanel: function () {
    //     console.log('Main renderCalculationsPanel : function () {');
    //     this.refs.refCalcs.render();
    // },

    render: function() {
        console.log('Main render: function () {');

        return ( <
            div className = "container-fluid" >
            <
            div className = "row" >
            <
            div >
            <
            h1 className = "text-center" > Brew App < /h1>  <
            br / >
            <
            div className = "text-center" >
            <
            /div>  <
            /div>  <
            /div>  <
            hr / >
            <
            button onClick = { this.getRecipe }
            className = "btn btn-default"
            type = "submit" > Get Recipe < /button> <
            button onClick = { this.saveRecipe }
            className = "btn btn-default"
            type = "submit" > Save Recipe < /button>  <
            button onClick = { this.newRecipe }
            className = "btn btn-default"
            type = "submit" > New Recipe < /button> <
            CalculationsPanel recipe = { this.state.recipe }
            calculationChange = { this.calculationChange }
            ref = "refCalcs" / >
            <
            HopsPanel hopChange = { this.hopChange }
            addNewHop = { this.addNewHop }
            deleteHop = { this.deleteHop }
            hops = { this.state.recipe.hops }
            />  <
            FermentablesPanel fermentableChange = { this.fermentableChange }
            addNewFermentable = { this.addNewFermentable }
            deleteFermentable = { this.deleteFermentable }
            fermentables = { this.state.recipe.fermentables }
            />  <
            /div>
        );
    },
});

module.exports = Main;