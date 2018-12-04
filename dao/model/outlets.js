var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 门店管理
var OutletsSchema = new Schema({
    //姓名
    shopName: {
        type: String
    },
    //营业执照号码
    shopLicenceNum: {
        type: String
    },
    //营业执照地址
    shopAdd: {
        type: String
    },
    //营业执照图片
    shopLicenceImg: {
        type: String
    },
    //门店定位
    shopLocation: {
        type: String
    },
    //法人
    shopCorporate:{
        type:String
    },
    //电话
    shopTel:{
        type:Number
    },
    //头像
    shopImg:{
        type:String
    },
    //特色
    shopFeature:{
        type:String
    },
    //佣金比例
    shopMoney:{
        type:String
    },
    //店员属性
    shopEmployee:{
        type:Array
    }
})
mongoose.model("outlets",OutletsSchema,"outlets")