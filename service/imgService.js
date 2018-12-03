const { push, getImgsById } = require("../dao/imgDao.js");

module.exports.push = async (data) => {
    return await push(data);
}

