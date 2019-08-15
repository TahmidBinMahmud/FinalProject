var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: "Title required"
  },
  content: {
    type: String
  }
});

var app1 = mongoose.model('app', articleSchema)
module.exports = app1;