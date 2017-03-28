var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FermentableSchema = new Schema({
  name: {
    type: String
  },
  lbs: {
    type: String
  },
  ozs: {
    type: String
  }
});

var Fermentable = mongoose.model("Fermentable", FermentableSchema);

module.exports = Fermentable;
