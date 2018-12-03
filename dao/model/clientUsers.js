var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 顾客管理
var ClientUserSchema = new Schema({
    //名称
    memberAcount: {
        type: String
    },
    //真实姓名
    memberName: {
        type: String
    },
    //电话
    memberPhone: {
        type: Number
    },
    //会员卡
    memberCard: {
        type: String
    },
    //头像
    menmberImg: {
        type: String
    },
    //送货地址
    memberAdd:{
        type:Number
    },
    //区域
    memberArea:{
        type:String
    },
    //积分
    memberPoint:{
        type:Number
    },
    //拥有的宠物
    memberPet:{
        type:Array
    }
})
mongoose.model("clientUsers",ClientUserSchema,"clientUsers")