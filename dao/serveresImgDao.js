// 持久层
const mongoose = require("mongoose");
// 图片上传到数据库
module.exports.upload = async (data) => {
    return await mongoose.model("serveresImg").create(data)
  }