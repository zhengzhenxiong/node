// 服务
var express = require('express');
const { uploadFile } = require("../public/util/upload.js")
const { upload } = require("../service/serveresImgServeres.js")
var router = express.Router();
// 图片上传
router.post("/upload", async function (req, res, next) {
    const { success, data } = await uploadFile(req, res, {
        fileType: "pet",            //子目录 宠物
        path: "./public/images/",   //根目录
    })
    // console.log(await upload(data))
    res.send(await upload(data))
})

module.exports = router;