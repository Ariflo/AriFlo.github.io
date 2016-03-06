var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

// load dotenv
require('dotenv').load();

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', '/images/AriFloFavicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/public/views', 'index.html'));
});

//set a port to listen to
var port = process.env.PORT || 3000;

//tune in to that port
app.listen(port, function(){
  console.log('listening on port: ' + port);
});

module.exports = app;
