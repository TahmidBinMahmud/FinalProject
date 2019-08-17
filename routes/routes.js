module.exports = function(app) {

  var app1 = require('./../controllers/controllers.js');

  app.get('/', app1.new);
  
  app.get('/index', app1.new);
  app.get('/map', app1.new1);
  app.get('/data', app1.new2);
  app.get('/input', app1.new3);
  app.post('/data/new',app1.create);
  app.get('/data/list', app1.list);
  app.get('/data/Halifax', app1.single);

}