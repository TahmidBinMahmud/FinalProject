module.exports = function(app) {

  var app1 = require('./../controllers/controllers.js');

  app.get('/index', app1.new);
  app.get('/map', app1.new1);
  app.get('/data', app1.new2);


}