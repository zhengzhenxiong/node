var express = require('express');
var router = express.Router();
const {getAlloutletUsers,regOutlet} =require("../service/outletsUsersService.js")
//增加门店管理
router.post('/regOutlet', async function (req, res, next) {
  
    res.send(await regOutlet(req.body));
  });
  // 获取门店管理
  router.post('/getAlloutletUsers', async function(req, res, next) {
    res.send(await getAlloutletUsers(req.body))
  });
  module.exports = router;