var express = require('express');
var router = express.Router();

var { uploadFile } = require("../public/util/upload.js");//引入uploadFile这个方法

router.post('/upload', async function (req, res, next) {
    var { success, data } = await uploadFile(req, res, {
        fileType: 'goodImgs',//子目录
        path: './public/images',//根目录
    })
    const { push } = require("../service/imgService.js");
    res.send(await push(data));

});


module.exports = router;

