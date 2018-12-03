// 服务层
const { addServeres, getServeresByPage,updateById,delById,seachServeresByPage } = require("../dao/serveresDao.js")
// 新增
module.exports.addServeres = async (server) => {
    // console.log(111,server)
    return await addServeres(server)
};

// 渲染
module.exports.getServeresByPage = async (server) => {
    return await getServeresByPage(server);
};
// 修改
module.exports.updateById = async (server) => {
    //  console.log("服务",server)
    return await updateById(server);
};
// 删除
module.exports.delById = async (server) => {
    return await delById(server);
};
//搜索
module.exports.seachServeresByPage = async (seachContent) => {
    return await seachServeresByPage(seachContent);
};
