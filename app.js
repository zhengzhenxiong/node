var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var outletsRouter = require("./routes/outlets.js"); //门店管理
var shopEmployeeRouter = require("./routes/shopEmployee.js"); //店员管理
var outletUsersRouter = require("./routes/outletUsers.js"); //门店管理

var app = express();

// 建立数据库连接
require("./dao/database.js")


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/outlets', outletsRouter); //门店管理
app.use('/outletUsers', outletUsersRouter); //门店管理
app.use('/shopEmployee', shopEmployeeRouter); //店员管理

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8088,() =>{
  console.log(`http://127.0.0.1:8088`);
})

module.exports = app;
