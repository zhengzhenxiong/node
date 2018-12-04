
var express = require('express');
const { addGoods,getGoods,updateById,deleteGoodsById,searchGoods} = require("../service/goodsService.js")
var router = express.Router();

// 商品列表
router.get('/getGoods', async function (req, res, next) {
    res.send(await getGoods(req.query))
});
// 新增商品
router.post('/addGoods', async function (req, res, next) {
    res.send(await addGoods(req.body))
});

// 修改商品信息
router.post('/updateById', async function (req, res, next) {
    res.send(await updateById(req.body))
});
// 删除
router.post('/deleteGoodsById', async function (req, res, next) {
    res.send(await deleteGoodsById(req.body))
});
// 搜索
router.get('/searchGoods', async function (req, res, next) {
    res.send(await searchGoods(req.query))
});

module.exports = router;
