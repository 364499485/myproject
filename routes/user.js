const express = require("express");
const pool = require("../pool");
var router = express.Router();
//登录
router.post('/inser',(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var ihone=req.body.ihone;
    var sql = `INSERT INTO user VALUES(NULL,?,?,NULL,0,?)`;
    pool.query(sql,[uname,upwd,ihone],(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send({code:1,msg:"注册成功"})
        }
    })
});

module.exports=router;





