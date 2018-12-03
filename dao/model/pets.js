var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 商品管理
var PetsSchema = new Schema({
    //名称
    petsName: {
        type: String
    },
    //品类
    petsType: {
        type: String
    },
    //原产地
    petsProvenance: {
        type: String
    },
    //主要颜色
    petsMainColors: {
        type: String
    },
    // 性格
    petsCharacter: {
        type: String
    },
    // 价格
    petsPrice: {
        type: String
    },
    // 体型
    petsShape: {
        type: String
    },
    petsShape: {
        type: String
    },
    // 介绍说明
    petsIntro:{
        type: String
    },
    //图片
    petsImg: {
        type: String
    },
})
mongoose.model("pets", PetsSchema, "pets")