var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dataSchema = new Schema({
  city: {
    type: String,
    required: "City name required"
  },
  temperature: {
    type: String
  },
  humidity: {
    type: String
  },
  pm10: {
    type: String
  },
  pm25: {
    type: String
  },
  pm01: {
    type: String
  },
  aqi: {
    type: String
  },
  wqi: {
    type: String
  },
  vocs: {
    type: String
  },
  landType: {
    type: String
  }
});

var app1 = mongoose.model('EnvData', dataSchema)
module.exports = app1;