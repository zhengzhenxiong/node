const { addPets,getPets ,updateById,deletePetsById,searchPets} = require("../dao/petsDao.js")

// 列表
module.exports.getPets = async (page) => {
    return await getPets(page);

}
// 新增
module.exports.addPets = async (pets) => {
    return await addPets(pets)
}
// 修改
module.exports.updateById = async (pets) => {
    return await updateById(pets)
  }
//删除
 module.exports.deletePetsById = async (pets) => {
    return await deletePetsById(pets);
}
// 搜索
module.exports.searchPets = async (conditions) => {
    return await searchPets(conditions);
}
