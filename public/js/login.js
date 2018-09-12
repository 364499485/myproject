//请求页头
$.ajax({
    url:"http://localhost:3000/my_item_nav.html",
    type:"get"
})
    .then(res=>{
        $("#hea").html(res);
    })

$.ajax({
    url:"http://localhost:3000/my_item_nav1.html",
    type:"get"
})
    .then(res=>{
        $("#hea_1").html(res);
    })

$.ajax({
    url:"http://localhost:3000/footer.html",
    type:"get"
})
    .then(res=>{
        $("#bot").html(res)
    });

//设置输入框提示
$("#log").on("focus","input",function () {
    input=$(this);
    input.nextAll("span").removeClass("none").addClass("show");
});
$("#log").on("blur","input",function () {
    input=$(this);
    var value = input.val();
    var reg = new RegExp("[\\u4E00-\\u9FA5]+","g");
    var ts = true;
    if(reg.test(value)){ts=false }
    // console.log(input.val());
    if(input.val().length>=6&&input.val().length<=12&&ts){
        input.nextAll("span").text("ok").removeClass("den")
    }else{
        input.nextAll("span").html("格式不正确！！").addClass("den")
    }
});
//设置验证码
function fn() {
    var strs = "";     //创建一个变量，接收canvas中的值
    function color() {
        var r = parseInt(Math.random() * 255);
        var g = parseInt(Math.random() * 255);
        var b = parseInt(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    }

    var cvs = document.querySelector("canvas");
    //设置点击事件，点击时调用fn函数，切换不同的验证码
    cvs.onclick=function () {
       str =  fn();
    };
    var ctx = cvs.getContext("2d");
    ctx.fillStyle = color();
    ctx.fillRect(0, 0, 115, 40);
    var pool = "QWERTYUIOPLKJHGFDSAZXCVBNM0123456789qwertyuioplkjhgfdsazxcvbnm";
    for (var i = 0; i < 4; i++) {
        var num = pool[rn(0, pool.length)];
        //绘制一个字符
        ctx.textBaseline = "top";   //设置基线
        ctx.fillStyle = color();  //随机填充文字颜色
        ctx.font = "23px SimHei";   //字体大小
        ctx.fillText(num, i * 25 + 5, 5);  //绘制字符
        strs+=num;
    }

//返回一个范围内的速记整数
    function rn(min, max) {
        var n = Math.random() * (max - min) + min;
        return Math.floor(n)
    }

//干扰线
    for (var i = 0; i <= 8; i++) {
        ctx.strokeStyle = color();
        ctx.beginPath();
        ctx.moveTo(rn(0, 115), rn(0, 40));
        ctx.lineTo(rn(0, 115), rn(0, 40));
        ctx.stroke();
    }
    return strs;
}
var str=fn();
//设置登录
$("#log h2").on("click","a",function () {
   var  a=$(this);
   // console.log(a.html());
   if(a.html()=="登录"){
       a.removeClass("col").addClass("col2");
       a.nextAll("a").addClass("col");
       a.parent().nextAll(".srk").removeClass("none");
       a.parent().nextAll(".wx").addClass("none");
   }else if(a.html()=="微信扫码登录"){
       a.parent().nextAll(".srk").addClass("none");
       a.parent().nextAll(".wx").removeClass("none");
       a.removeClass("col").addClass("col2");
       a.prevAll("a").addClass("col")
   }
});
//登录
$("#l").on("click",function(e){
    e.preventDefault();
    var id=$("span.id").html();
    var pw=$("span.psword").html();
    var yz=$("input.input_yzm").val().toLocaleUpperCase();
    var st = str.toLocaleUpperCase();
    if(yz!=st){
        $("a.yzCode").removeClass("none");
        fn();
    }else{
        $("a.yzCode").addClass("none");
        if(id=="ok"&&pw=="ok"){
            // console.log(12345)
            var uname=$("input.uname").val();
            var upwd=$("input.upwd").val();
            $.ajax({
                url:`http://localhost:3000/login?uname=${uname}&upwd=${upwd}`,
                type:"GET",
            }).then(result=>{
                // console.log(result.res[0].uname)
                if(result.code==0){
                    alert(result.res)
                }else if(result.code==1){
                    alert("登录成功,转跳到主页")
                    location.href="http://localhost:3000/index.html";
                }
            })
        }
    }
});