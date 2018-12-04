// 持久层
const mongoose = require("mongoose");

// 商品列表
module.exports.getGoods = async ({ curPage, eachPage }) => {
    console.log(3)
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    };
    const goodsModel = mongoose.model("goods");
    result.total = await goodsModel.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await goodsModel
        .find()
        // populate("goodss")
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({
            _id: 1
        })
    return result;
}

// 删除
module.exports.deleteGoodsById = async (goods) => {
    console.log(goods)
    await mongoose.model("goods").remove(goods, function (err) {
        console.log(err)
    })
}
// 新增
module.exports.addGoods = async (goods) => {
    await mongoose.model("goods").create(goods)
}
// 搜索
module.exports.searchGoods = async (conditions) => {
    const {searchText,curPage, eachPage}=conditions
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    };
    const searchArr = []
    let reg=new RegExp(searchText,"g");
   const data=await mongoose.model("goods").find()
   data.map(item => {
    if(reg.test(item)){
        searchArr.push(item)
    } 
})
    result.rows=searchArr
    result.total = searchArr.length;
    result.maxPage = Math.ceil(result.total / result.eachPage);
    return result

};
// 修改
module.exports.updateById = async ({ _id, goodsName, goodsType, goodsMaterial,
    goodsCanFor,
    goodsOnlyFor,
    goodsSize,
    goodsTaste,
    goodsSpecial,
    goodsRegion,
    goodsData,
    goodsTime,
    goodsSupplier,
    goodsIntro,
    goodsImg }) => {
    const data = await mongoose
        .model("goods")
        .update({
            _id
        }, {
            $set: {
                goodsName,
                goodsType,
                goodsMaterial,
                goodsCanFor,
                goodsOnlyFor,
                goodsSize,
                goodsTaste,
                goodsSpecial,
                goodsRegion,
                goodsData,
                goodsTime,
                goodsSupplier,
                goodsIntro,
                goodsImg
            }
        })
    if (data.nModified === 1) {
        return true
    } else {
        return false
    }
}
