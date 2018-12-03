var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 门店管理
var ServerSchema = new Schema({
    //名称
    serviceName: {
        type: String
    },
    //类型
    serviceType: {
        type: String
    },
    //排期
    serviceSchedule: {
        type: String
    },
    //适用规格
    serviceCanFor: {
        type: String
    },
    //服务规格
    serviceDetial: {
        type: String
    },
    //耗时
    serviceTime: {
        type: String
    },
    //服务员等级
    serviceLevel: {
        type: String
    },
    //价格
    servicePrice: {
        type: String
    },
    // 服务图片
    serviceImg: {
        type: String
    }
})
mongoose.model("serveres", ServerSchema, "serveres")