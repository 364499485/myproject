const express = require("express");
const pool = require("../pool");
var router = express.Router();
//登录
router.get('/',(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql = `SELECT * FROM user WHERE uname=? AND upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err){
            throw err;
        }else if(result.length>0){
            req.session.uid=result[0].uid;     //请求session的uid，并赋值为查询到的人的ID
            res.send({code:1,res:result});
        }else{
            res.send({code:0,res:"账号或密码错误！"})
        }
    })
});
//判断登录
router.get("/islogin",(req,res)=>{
    if(req.session.uid==null)
        res.send({ok:0});
    else{
        var sql="select * from user where uid=?";
        pool.query(sql,[req.session.uid],(err,result)=>{
            res.send(result);
        })
    }
})
//注销
router.get("/signout",(req,res)=>{
    delete req.session.uid;
    res.send({code:0});
})

module.exports=router;





