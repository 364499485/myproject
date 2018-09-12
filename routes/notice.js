const express = require("express");
const pool = require("../pool.js");
var router = express.Router();
//公告数据
router.get("/list",(req,res)=>{
    var sql = `SELECT * FROM notice`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result);
        }
    })

});

//答疑数据
router.get("/problemlist",(req,res)=>{
    var sql = `SELECT * FROM problem`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result);
        }
    })

});

//资金状态
router.get("/realtmlist",(req,res)=>{
    var sql = `SELECT * FROM realtm`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result);
        }
    })
});
module.exports=router;
