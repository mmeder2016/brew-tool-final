var request = require('request');
var AUTHKEY = "9f195bca21d9eb8f1e20cfe7615e3744";
var BREWAPIURL = "http://api.brewerydb.com/v2/";
var queryUrl = BREWAPIURL;

var brew = {};
brew.styles = {};
brew.yeasts = {};
brew.hops = {};
brew.fermentables = {};

/*
    When set to 'true' we will read previously retrieved and
    saved data. This insures that the allowed limit of API 
    calls to the data provider isn't exceeded.

    NOTE: This variable can also be found in the following
    files - 

    /app/components/pages/panels/Fermentables.js
    /app/components/pages/panels/Hops.js
*/
var useLocalData = true;

function createURL(apiRequest) {
    var url = BREWAPIURL + apiRequest + "?key=" + AUTHKEY + "&format=json";
    return url;
}

/*
    Use data files or the data provider?
*/
if(useLocalData === true) {
    brew.styles = require('./styles.json');
    brew.yeasts = require('./yeasts.json');
    brew.hops = require('./hops.json');
    brew.fermentables = require('./fermentables.json');
} else {
    request(createURL('styles'), function(error, response, body) {
        if (!error && response.statusCode == 200) {
            brew.styles = JSON.parse(JSON.stringify(body));
        }
    });
    request(createURL('yeasts'), function(error, response, body) {
        if (!error && response.statusCode == 200) {
            brew.yeasts = JSON.parse(JSON.stringify(body));
        }
    });
    request(createURL('hops'), function(error, response, body) {
        if (!error && response.statusCode == 200) {
            brew.hops = JSON.parse(JSON.stringify(body));
        }
    });
    request(createURL('fermentables'), function(error, response, body) {
        if (!error && response.statusCode == 200) {
            brew.fermentables = JSON.parse(JSON.stringify(body));
        }
    });
}

module.exports = brew;

