var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HopSchema = new Schema({
  name: {
    type: String
  },
  lbs: {
    type: String
  },
  ozs: {
    type: String
  },
  alphaAcid: {
    type: String
  },
  minutes: {
    type: String
  }
});

var Hop = mongoose.model("Hop", HopSchema);

module.exports = Hop;
