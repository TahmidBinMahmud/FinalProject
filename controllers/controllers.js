

module.exports.new = function(request, response) {
  response.render('index.ejs');
}

module.exports.new1 = function(request, response) {
  response.render('map.ejs');
}
module.exports.new2 = function(request, response) {
  response.render('data.ejs');
}

module.exports.new3 = function(request, response) {
  response.render('input.ejs');
}