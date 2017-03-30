'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var app = exports.app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/build');
app.set('view engine', 'ejs');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());

var cookieParser = require('cookie-parser')

app.use(cookieParser());

//app.use(express.cookieParser('my-super-secret-123'));
//app.use(express.compress());
app.use(express.static(path.join(__dirname, '/build')));
// Render *.html files using ejs
app.engine('html', require('ejs').__express);
// hello
//app.use(errorHandler());

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  var exec = require('child_process').exec;
  exec('node_modules/brunch/bin/brunch watch', function callback(error, stdout, stderr) {
    if (error) {
      console.log('An error occurred while attempting to start brunch.\n' +
                  'Make sure that it is not running in another window.\n');
      throw error;
    }
  });
};

app.get('/',function (req, res) {
    res.render('index.html');
});


//
// this use is called after all assets requests
app.use(function (req, res) {
  res.render('index.html');
  //res.redirect('/#' + req.url);
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});

