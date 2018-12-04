const mongoose = require("mongoose")

//新增店员信息
module.exports.addShopEmployee = async (shopEmployee) => {
    await mongoose.model("shopEmployee").create(shopEmployee);
}

// 获取门店信息
module.exports.getShopEmployeeByPage = async ({ curPage, eachPage }) => {
    const result = { curPage:Number(curPage), eachPage:Number(eachPage), };
    const shopEmployeeModel = mongoose.model("shopEmployee");
    result.total = await shopEmployeeModel.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await shopEmployeeModel
        .find()
        .populate("outlets")
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({_id:1})
    return result;
}