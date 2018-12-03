
const {getAlloutletUsers,regOutlet} =require("../dao/outletUsersDao.js")

//增加门店管理
module.exports.regOutlet = async function (data) {
    return await regOutlet(data);

}
// 获取门店管理
module.exports.getAlloutletUsers = async (use) => {
    // console.log(use)
    return await getAlloutletUsers(use)
}
