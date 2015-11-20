var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressLayouts = require('express-ejs-layouts'),
    path = require('path'),
    helpers = require('express-helpers')(app),
    routes = require('./routes/index'),
    routesTrivial = require('./routes/trivial'),
    routesQuestion = require('./routes/question'),
    routesQuiz = require('./routes/quiz'),
    routesAbout = require('./routes/about');

//Statics Files
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'images/favicon.png')));
app.set('layout', 'layout');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', routes);
app.use('/trivial', routesTrivial);
app.use('/questions', routesQuestion);
app.use('/quiz', routesQuiz);
app.use('/about', routesAbout);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Recurso no encontrado en el servidor');
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
