

const mongoose = require("mongoose")
// require("./model/users.js")
// require("./model/students.js")
require("./model/outletUsers.js")//门店管理人员
var dbURI = 'mongodb://localhost/aichongbang';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});