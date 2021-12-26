var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var register = require("./routes/user/register")
var forgetpwd = require("./routes/user/forgetpwd");
var pictureupload = require("./routes/user/pictureupload")
var alljobs = require("./routes/user/alljobs")
var login= require('./routes/user/login');
var myrelease = require('./routes/user/myrelease')
var claimtask = require('./routes/user/claimtask')
var myreceive = require('./routes/user/myreceive')
var uploaddata = require('./routes/user/uploaddata')
var getdata = require('./routes/user/getdata')
var pass = require('./routes/user/pass')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/register", register)
app.use("/forgetpwd",forgetpwd)
app.use("/pictureupload",pictureupload)
app.use("/myrelease",myrelease)
app.use("/alljobs",alljobs)
app.use("/login",login)
app.use("/claimtask",claimtask)
app.use("/myreceive",myreceive)
app.use("/uploaddata",uploaddata)
app.use("/getdata",getdata)
app.use("/pass",pass)
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
