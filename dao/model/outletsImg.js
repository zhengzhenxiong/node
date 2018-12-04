var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImgSchema = new Schema({
	outletsId: {
		type: Schema.Types.ObjectId,
		ref: 'outlets'
	},
	url: {
		type: String
	},
	type: {
		type: String
	}
});

mongoose.model("imgs", ImgSchema, "imgs");