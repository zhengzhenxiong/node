
const mongoose = require("mongoose")
require("./model/serveres.js");   //服务
require("./model/serveresImg.js"); //服务图片

var dbURI = 'mongodb://localhost/aichongbang';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});