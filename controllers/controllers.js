
var Data = require('./../models/data.js');
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

module.exports.new4 = function(request, response) {
  response.render('graphs.ejs');
}

module.exports.create = function(request, response) {
  var new_data = new Data(request.body);
  new_data.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Please add a City"
        });
    console.log(data);
    return response.status(200)
      .json({
        message: "Data succesfully added"
      });

  })
  console.log(request.body);
}

module.exports.list = function(request, response) {
  Data.find(function(err, data){
    if(err){
      response.status(400)
        .json({
          error: "Database query error"
        });
    }
  
    response.status(200).json({
      datas: data
    });
  });
  
  }

  module.exports.single = function(request, response) {

    Data.findOne({city:request.params.dataCity},
      function(err, data){
        if(err){
          response.status(400)
            .json({
              error: "Database query error"
            });
        }else{
        response.json( {
          datas: data
        })
      }
    });
  
  }