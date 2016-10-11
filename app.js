'use strict';

// MODULE DEPENDENCIES GENERATED BY THE EXPRESS GENERATORo
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// REQUIRE DB CONNECTION MODULES
var mongoose = require('mongoose');
var database = require('./config/database');

// REQUIRE  SERVER SIDE ROUTER MODULES
var index = require('./server_routes/index');
var users = require('./server_routes/users');
var widgetRouter = require('./server_routes/widgetRouter');

// CREATE A DATABASE CONNECTION
mongoose.connect(database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){ console.log("Woohoo: connected to the database!")});


// CREATE THE EXPRESS APP
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// DEFINE THE URI NAMES TO CORRESPOND TO WHICH ROUTER
app.use('/', index);
app.use('/users', users);
app.use('/widgets', widgetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
