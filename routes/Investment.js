const express = require("express");
const pool = require("../pool");
var router = express.Router();
//查询项目列表
router.get('/list',(req,res)=>{
    var sql = `SELECT * FROM tc_item`;
    pool.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send({code:1,msg:result});
        }
    })
});
//下一页查询
router.get('/pne',(req,res)=>{
    var x=(req.query.j-1)*5;
    var sql = `select * from tc_item limit ${x},5`;
    pool.query(sql,[x],(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result.length>0){
                res.send({code:1,msg:result});
            }else{
                res.send({code:0,msg:result});
            }
        }
    })
});
// 数字页
router.get('/numpage',(req,res)=>{
    var page=(req.query.str-1)*5;
    var sql = `select * from tc_item limit ${page},5`;
    pool.query(sql,[page],(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result.length<5){
                    res.send({code:0,msg:result});
                }else{
                    res.send({code:1,msg:result});
                }
        }
    })
});

module.exports=router;





