var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 平台管理
var ManUserSchema = new Schema({
    //登录名
    userAcount: {
        type: String
    },
    //密码
    userPwd: {
        type: String
    },
    //手机
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
    //角色
    userType: {
        type: String
    },
    //状态(1 表示申请中 2 表示可用  3 表示不可用)
    userStatus:{
        type:Number
    }
})
mongoose.model("manageUsers",ManUserSchema,"manageUsers")