module.exports = function(app) {

  var app1 = require('./../controllers/controllers.js');

  app.get('/', app1.new);
  
  app.get('/index.html', app1.new);
  app.get('/map.html', app1.new1);
  app.get('/data.html', app1.new2);


}