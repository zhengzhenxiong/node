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
        type: Number
    },
    userMail: {
        type: String
    },
    userType: {
        type: String
    },
    userStatus:{
        type:Number
    }
})
mongoose.model("outletUsers",OutletUserSchema,"outletUsers")