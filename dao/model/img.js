var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImgSchema = new Schema({

	size:{
		type: String
	},
	url: {
		type: String
	},
	type: {
		type: String
	}
});

mongoose.model("imgs", ImgSchema, "imgs");