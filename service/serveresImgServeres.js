// 图片上传
// 服务层
const { upload } = require("../dao/serveresImgDao.js")
module.exports.upload = async (data) => {
    return await upload(data);
};