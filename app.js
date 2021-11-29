//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./route/route.js'); //our routes file

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist'); //Automatically creates collection, though you should probably pre-create.

//on connection
mongoose.connection.on('connected', function(){
  console.log("Connected to database mongoDB @ 27017");
});
mongoose.connection.on('error', function(err){
  if(err){
    console.log("Error in database: " + err);
  }
});

//port num
const port = 3000;

//adding middleware: for requests
app.use(cors());

//body-bodyparser: for forms
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//home page
app.get("/", function(req, res){
//res.send();
  res.send('foobar');
//console.log(req);
});

//listen on what port?
app.listen(port, function(){
  console.log("Server started at port: " + port);
});
