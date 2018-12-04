const { getOutletsByPage, getOutletsById, addOutlets, updateOutletsById, push, getOutletsImgsById }=require("../dao/outletsDao.js");


//获取所有门店信息
module.exports.getOutletsByPage = async (page) => {
    return await getOutletsByPage(page);
}

//获取所有门店 ID
module.exports.getOutletsById = async _id => {
    return await getOutletsById(_id);
}

//新增门店信息
module.exports.addOutlets = async (outlets) => {
    return await addOutlets(outlets)
}

//修改门店信息
module.exports.updateOutletsById = async (outlets) => {
    return await updateOutletsById(outlets);
}

// 把门店图片添加到数据库
module.exports.push = async (data) => {
    return await push(data);
}

// 获取门店图片
module.exports.getOutletsImgsById = async (data) => {
    return await getOutletsImgsById(data);
}

