var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeSchema = {
    version: {
        type: String,
        default: "1.0"
    },
    dateCreated: {
        type: String,
    },
    dateLastEdit: {
        type: String
    },
    recipeName: {
        type: String,
        default: ""
    },
    style: {
        type: String,
        default: ""
    },
    brewDate: {
        type: String,
        default: ""
    },
    batchSize: {
        type: String,
        default: ""
    },
    fermentables: [{
        type: Schema.Types.ObjectId,
        ref: "Fermentable"
    }],
    mashingComments: {
        type: String
    },
    hops: [{
        type: Schema.Types.ObjectId,
        ref: "Hop"
    }],
    hopComments: {
        type: String,
        default: ""
    },
    yeast: {
        type: String,
        default: ""
    },
    fermentationTemperatureF: {
        type: String,
        default: ""
    },
    originalGravity: {
        type: String,
        default: ""
    },
    finalGravity: {
        type: String,
        default: ""
    },
    fermentingComment: {
        type: String,
        default: ""
    }
};

module.exports = mongoose.model("Recipe", new Schema(recipeSchema));