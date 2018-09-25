//使用express构建web服务器 --11:25
const express = require('express');
var app = express();
var server = app.listen(3000,(req,res)=>{
    console.log("启动中....");
});
//引入中间件
const session = require("express-session");
const bodyParser = require('body-parser');

/*引入路由模块*/
var notice=require("./routes/notice");
var tzmoney= require("./routes/tzmoney");
var login=require("./routes/login");
var user =require("./routes/user");
var Investment=require("./routes/Investment");
var table=require("./routes/table");

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
//将服务器的session ，放在req.session中
app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*30},//过期时间ms
    resave:false,
    saveUninitialized:true
}));
/*使用路由器来管理路由*/
app.use("/notice",notice);
app.use("/tzmoney",tzmoney);
app.use("/login",login);
app.use("/user",user);
app.use("/Investment",Investment);
app.use("/table",table);



