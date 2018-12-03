// 服务图片
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ImgSchema = new Schema({
    url: {
        type: String
    },
    type:{
        type:String
    }
})
mongoose.model("serveresImg", ImgSchema, "serveresImg")