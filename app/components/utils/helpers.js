// will be used by REACT on the FRONT END
var axios = require("axios");
var helper = {

    getRecipe: function(db_id) {
        console.log('helper getRecipe: function (id) {');
        return axios({
            method: "GET",
            url: "/recipe",
            data: {
                id: db_id
            }
        });
    },

    getFermentableList: function() {
        console.log('helper getFermentableList: function (id) {');
        return axios({
            method: "GET",
            url: "/fermentablelist"
        });
    },

    getHopList: function() {
        console.log('helper getHopList: function (id) {');
        return axios({
            method: "GET",
            url: "/hoplist"
        });
    },

    addHop: function(hopName, _id) {
        console.log('helper addHop: function () {');
        console.log('axios.post("/newHop");');
        return axios({
            method: "POST",
            url: "/newHop",
            data: {
                name: hopName,
                id: _id
            }
        });
    },

    deleteHop: function(hop_id, recipe_id, ) {
        console.log('helper deleteHop: function (id) {');
        console.log('axios.delete("/deleteHop", params);');
        return axios({
            method: "DELETE",
            url: "/deleteHop",
            data: {
                recipeId: recipe_id,
                hopId: hop_id
            }
        });
    },

    addFermentable: function(fermentableName, _id) {
        console.log('helper addFermentable: function () {');
        console.log('axios.post("/newFermentable");');
        return axios({
            method: "POST",
            url: "/newFermentable",
            data: {
                name: fermentableName,
                id: _id
            }
        });
    },

    deleteFermentable: function(fermentable_id, recipe_id, ) {
        console.log('helper deleteFermentable: function (id) {');
        console.log('axios.delete("/deleteFermentable", params);');
        return axios({
            method: "DELETE",
            url: "/deleteFermentable",
            data: {
                recipeId: recipe_id,
                fermentableId: fermentable_id
            }
        });
    },

    updateRecipe: function(r) {
        console.log('helper updateRecipe: function () {');
        console.log('axios.post("/updateRecipe");');
        return axios({
            method: "POST",
            url: "/updateRecipe",
            data: {
                recipe: r
            }
        });
    },
    newRecipe: function() {
        console.log('helper newRecipe: function () {');
        console.log('axios.post("/newRecipe");');
        return axios({
            method: "POST",
            url: "/api/addrecipe",
        });
    },
}

module.exports = helper;