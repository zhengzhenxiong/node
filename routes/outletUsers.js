var express = require('express');
var router = express.Router();
const{ getOutletUsersByPage, getOutletUsersById }= require("../service/outletsUsersService.js");

router.get('/getOutletUsersByPage',async function (req,res,next){
    res.send(await getOutletUsersByPage(req.query));
  })
    
  router.get('/getOutletUsersById',async function(req,res,next){
    res.send(await getOutletUsersById(req.query._id))
  });

module.exports = router;