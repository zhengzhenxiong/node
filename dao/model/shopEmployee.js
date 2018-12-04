var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 店员管理
var ShopEmployeeSchema = new Schema({
    //店员属性
    shopEmployee:{
        type:Array
    }
})
mongoose.model("shopEmployee",ShopEmployeeSchema,"shopEmployee")