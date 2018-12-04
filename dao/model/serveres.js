var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 服务管理
var ServerSchema = new Schema({
    //名称
    serverName: {
        type: String
    },
    //类型
    serverType: {
        type: String
    },
    //排期
    serverSchedule: {
        type: String
    },
    //适用规格
    serverCanFor: {
        type: String
    },
    //服务规格
    serverDetial: {
        type: String
    },
    //耗时
    serverTime:{
        type:String
    },
    //服务员等级
    serverLevel:{
        type:Number
    },
    //价格
    serverPrice:{
        type:Number
    }
})
mongoose.model("serveres",ServerSchema,"serveres")