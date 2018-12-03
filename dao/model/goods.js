var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 商品管理
var GoodsSchema = new Schema({
    //名称
    goodsName: {
        type: String
    },
    //品类
    goodsType: {
        type: String
    },
    //材质或制作方法
    goodsMaterial: {
        type: String
    },
    //适用规格
    goodsCanFor: {
        type: String
    },
    //专属规格
    goodsOnlyFor: {
        type: String
    },
    //包装规格
    goodsSize: {
        type: String
    },
    //口味
    goodsTaste: {
        type: String
    },
    //特殊功能
    goodsSpecial: {
        type: String
    },
    //产地
    goodsRegion: {
        type: String
    },
    //出产日期
    goodsData: {
        type: String
    },
    //保质期
    goodsTime: {
        type: String
    },
    //供应商
    goodsSupplier: {
        type: String
    },
    //特色说明
    goodsIntro: {
        type: String
    },
    //价格
    goodsPrice: {
        type: Number
    },
    //图片
    goodsImg: {
        type: String
    },
})
mongoose.model("goods", GoodsSchema, "goods")