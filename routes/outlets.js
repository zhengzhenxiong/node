var express = require('express');
var router = express.Router();
var { uploadFile } = require("../public/util/upload.js"); //引入uploadFile这个方法
const{ getOutletsByPage, getOutletsById, addOutlets, updateOutletsById, push, getOutletsImgsById, addShopEmployee }= require("../service/outletsService.js");

// 获取所有门店信息
router.get('/getOutletsByPage',async function (req,res,next){
  res.send(await getOutletsByPage(req.query));
})

// 获取所有门店 ID
router.get('/getOutletsById',async function(req,res,next){
  res.send(await getOutletsById(req.query._id))
});

//新增门店信息
router.post('/addOutlets', async function(req, res, next) {
  res.send(await addOutlets(req.body));
});

//修改门店信息
router.post('/updateOutletsById',async function(req,res,next){
  res.send(await updateOutletsById(req.body))
})

//把门店图片添加到数据库
router.post('/OutletsFileUpload', async function (req, res, next) {
  var { success, data } = await uploadFile(req, res, {
      fileType: 'outlets',//子目录
      path: './public/images',//根目录
  })
  res.send(await push(data));

});

//获取门店图片
router.get('/getOutletsImgsById', async function (req, res, next) {
  res.send(await getOutletsImgsById(req.query));
});

module.exports = router;