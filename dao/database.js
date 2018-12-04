
const mongoose = require("mongoose")

require("./model/outlets.js") //门店管理
require("./model/outletUsers.js") //门店管理
require("./model/outletsImg.js") //门店图片
require("./model/shopEmployee.js") // 店员管理

var dbURI = 'mongodb://localhost/aichongbang';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});