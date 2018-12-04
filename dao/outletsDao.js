const mongoose = require("mongoose")

// 获取门店信息
module.exports.getOutletsByPage = async ({curPage, eachPage }) => {
    const result = {
        curPage:Number(curPage),
        eachPage:Number(eachPage),
    };

    const outletsModel = mongoose.model("outlets");
    result.total = await outletsModel.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await outletsModel
        .find()
        .populate("imgs","shopEmployee")
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({_id:1})
    return result;
}

// 获取门店 ID
module.exports.getOutletsById = async _id => {
    return await mongoose.model("outlets").find({_id}).populate("imgs","shopEmployee")
}

//新增门店信息
module.exports.addOutlets = async (outlets) => {
    await mongoose.model("outlets").create(outlets);
}

//修改门店信息
module.exports.updateOutletsById = async ({ _id, shopName, shopLicenceNum, shopAdd, shopLicenceImg, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopMoney, shopEmployee }) => {
    return await mongoose.model("outlets").update(
        {
            _id
        },{
            $set:{ shopName, shopLicenceNum, shopAdd, shopLicenceImg, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopMoney, shopEmployee }
        }
    );
}

//把门店图片添加进数据库
module.exports.push = async (msg) => {
    let data = await mongoose.model("imgs").create(msg);
    await mongoose.model("outlets").updateOne({
        _id: data.outletsId
    },{
        $push:{
            imgs: data._id
        }
    });
    if (data) {
        return { isOk: true }
    }
}

// 获取门店图片 ID
module.exports.getOutletsImgsById = async ({ outletsId}) => {
    return await mongoose.model("imgs").find({
        outletsId
    })
}

//新增店员信息
module.exports.addShopEmployee = async (outlets) => {
    await mongoose.model("outlets").create(outlets);
}