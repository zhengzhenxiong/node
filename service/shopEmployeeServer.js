const { addShopEmployee, getShopEmployeeByPage }=require("../dao/shopEmployeeDao.js");

//新增店员信息
module.exports.addShopEmployee = async (shopEmployee) => {
    return await addShopEmployee(shopEmployee)
}

//获取所有门店信息
module.exports.getShopEmployeeByPage = async (page) => {
    return await getShopEmployeeByPage(page);
}