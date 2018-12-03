
var express = require('express');
const { addPets, getPets,updateById,deletePetsById,searchPets} = require("../service/petsService.js")
var router = express.Router();

// 商品列表
router.get('/getPets', async function (req, res, next) {
    res.send(await getPets(req.query))
});
// 新增宠物
router.post('/addPets', async function (req, res, next) {
    res.send(await addPets(req.body))
});

// 修改宠物信息
router.post('/updateById', async function (req, res, next) {
    res.send(await updateById(req.body))
});
// 删除
router.post('/deletePetsById', async function (req, res, next) {
    res.send(await deletePetsById(req.body))
});
// 搜索
router.get('/searchPets', async function (req, res, next) {
    res.send(await searchPets(req.query))
});

module.exports = router;
