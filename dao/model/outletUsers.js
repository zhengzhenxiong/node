var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 门店管理
var OutletUserSchema = new Schema({
    userAcount: {
        type: String
    },
    userPwd: {
        type: String
    },
    userPhone: {
        type: String
    },
    userMail: {
        type: String
    },
    userName:{
        type:String
    },
    userType: {
        type: String
    },
    userStatus:{
        type:String
    }
})
mongoose.model("outletUsers",OutletUserSchema,"outletUsers")