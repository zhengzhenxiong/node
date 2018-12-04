const { getOutletUsersByPage, getOutletUsersById }=require("../dao/outletUsersDao.js");

module.exports.getOutletUsersByPage = async (page) => {
    return await getOutletUsersByPage(page);
}

module.exports.getOutletUsersById = async _id => {
    return await getOutletUsersById(_id);
}