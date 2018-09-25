const express = require("express");
const pool = require("../pool");
var router = express.Router();
//登录
router.post('/cathectic',(req,res)=>{
    var id=req.body.tid;
    var uname=req.body.uname;
    var tname=req.body.tname;
    var num=req.body.num;
    var sql = ` INSERT INTO tztable VALUES(?,?,?,?)`;
    pool.query(sql,[id,uname,tname,num],(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send({code:1,msg:"恭喜！！！投资成功"})
        }
    })
});

module.exports=router;





