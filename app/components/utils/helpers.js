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

    updateRecipe: function(r) {
        console.log('helper updateRecipe: function () {');
        console.log('axios.post("/updateRecipe");');
        console.log('recip:'+ r)
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