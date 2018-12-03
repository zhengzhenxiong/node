const { addGoods,getGoods ,updateById,deleteGoodsById,searchGoods} = require("../dao/goodsDao.js")

// 列表
module.exports.getGoods = async (page) => {
    return await getGoods(page);

}
// 新增
module.exports.addGoods = async (goods) => {
    return await addGoods(goods)
}
// 修改
module.exports.updateById = async (goods) => {
    return await updateById(goods)
  }
//   删除
 module.exports.deleteGoodsById = async (goods) => {
    return await deleteGoodsById(goods);
}
// 搜索
module.exports.searchGoods = async (conditions) => {
    return await searchGoods(conditions);
}
