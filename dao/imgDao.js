const mongoose = require("mongoose");

//把图片添加进数据库
module.exports.push = async (msg) => {
    let data = await mongoose.model("imgs").create(msg);
    return data
}
