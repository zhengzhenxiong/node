var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 门店用户管理
var OutletUserSchema = new Schema({
    //登录名
    userAcount: {
        type: String
    },
    //密码
    userPwd: {
        type: String
    },
    //手机号
    userPhone: {
        type: Number
    },
    //邮箱
    userMail: {
        type: String
    },
    //姓名
    userName:{
        type:String
    },
    // 角色
    userType: {
        type: String
    },
    //状态
    userStatus:{
        type:Number
    }
})
mongoose.model("outletUsers",OutletUserSchema,"outletUsers")