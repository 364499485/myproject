const express = require("express");
const pool = require("../pool");
var router = express.Router();
//投资牛人榜
router.get("/list",(req,res)=>{
    var sql = `SELECT * FROM user ORDER BY tzmoney DESC`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    })
});

module.exports=router;