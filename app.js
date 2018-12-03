var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/goods');
var imgRouter = require('./routes/img');
var petsRouter = require('./routes/pets');
var serveresRouter=require('./routes/serveres'); //服务
var serveresImgRouter=require('./routes/serveresImg');  //服务图片

var outletUsersRouter = require('./routes/outletUsers');//门店管理人员
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
app.use('/goods', goodsRouter);
app.use('/img', imgRouter);
app.use('/pets', petsRouter);
app.use('/serveres', serveresRouter);//服务  暴露接口
app.use('/serveresImg', serveresImgRouter);//服务图片  暴露接口
app.use('/outletUsers',outletUsersRouter);//门店管理人员

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

module.exports = app;
