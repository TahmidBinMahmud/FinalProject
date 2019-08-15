var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var path = require('path');

var db_url = "mongodb+srv://Muttakin:12345six@cluster0-2wehj.mongodb.net/test?retryWrites=true&w=majority";

var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/index',function(req,response){
//   response.render(__dirname+'index.ejs');
// })
// app.get('/map',function(req,res){
//     res.sendFile(__dirname+'/map.html')
// })
// app.get('/data',function(req,res){
//   res.sendFile(__dirname+'/data.html')
// })
// app.get('/article',function(req,res){
//   res.render('article.ejs',{article:dummyArticle})
// })

require('./routes/routes.js')(app);
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});


