

const mongoose = require("mongoose")
require("./model/goods.js")
require("./model/img.js")
require("./model/pets.js")
var dbURI = 'mongodb://localhost/aichongbang';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});