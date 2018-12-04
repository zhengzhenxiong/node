var express = require('express');
var router = express.Router();

const{ addShopEmployee, getShopEmployeeByPage }= require("../service/shopEmployeeServer.js");
  
//新增店员信息
router.post('/addShopEmployee', async function(req, res, next) {
    console.log(req.body)
    res.send(await addShopEmployee(req.body));
});

// 获取所有店员信息
router.get('/getShopEmployeeByPage',async function (req,res,next){
    res.send(await getShopEmployeeByPage(req.query));
})

module.exports = router;