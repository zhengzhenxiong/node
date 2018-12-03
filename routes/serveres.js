// 服务
var express = require('express');

const { addServeres, getServeresByPage, updateById, delById,seachServeresByPage} = require("../service/serveresService.js");

var router = express.Router();
// 新增服务
router.post('/addServeres', async function (req, res, next) {
    res.send(await addServeres(req.body))
});

// 渲染
router.get('/getServeresByPage', async function (req, res, next) {
    res.send(await getServeresByPage(req.query))
});
// 修改
router.post('/updateById', async function (req, res, next) {
    res.send(await updateById(req.body))
});
// 删除
router.post('/delById', async function (req, res, next) {
    res.send(await delById(req.body))
});
// 搜索
router.get('/seachServeresByPage', async function (req, res, next) {
    // console.log(req.query)
    res.send(await seachServeresByPage(req.query))
});

module.exports = router;