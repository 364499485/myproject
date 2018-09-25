
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
var cv = document.querySelector("canvas");
var str = fn(cv);
//设置登录切换
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
    $("#l").on("click", function (e) {
        e.preventDefault();
        var id = $("span.id").html();
        var pw = $("span.psword").html();
        var yz = $("input.input_yzm").val().toLocaleUpperCase();
        var st = str.toLocaleUpperCase();
        if (yz != st) {
            $("a.yzCode").removeClass("none");
            fn();
        } else {
            $("a.yzCode").addClass("none");
            if (id == "ok" && pw == "ok") {
                // console.log(12345)
                var uname = $("input.uname").val();
                var upwd = $("input.upwd").val();
                $.ajax({
                    url: `http://localhost:3000/login?uname=${uname}&upwd=${upwd}`,
                    type: "GET",
                }).then(result => {
                    // console.log(result.res[0].uname);
                    if (result.code == 0) {
                        alert(result.res)
                    } else if (result.code == 1) {
                        //记住密码
                        var pinput = $("p.footer input");
                        if (pinput.is(':checked')) {
                            localStorage.setItem("id", result.res[0].uname);
                            localStorage.setItem("upwd", result.res[0].upwd);
                        } else {
                            localStorage.clear("id");
                            localStorage.clear("upwd");
                        }
                        alert("登录成功,转跳到主页");
                        location.href = "http://localhost:3000/index.html";
                    }
                })
            }
        }
    });
//记住密码后自动加载密码框
function Rpassword() {
    var zh = $("input.uname");
    var pw = $("input.upwd");
    var id = localStorage.getItem("id");
    var upwd = localStorage.getItem("upwd");
    zh.val(id);
    pw.val(upwd);
    if(pw.val().length>5){
        $("span.id").text("ok").removeClass("den").removeClass("none");
        $("span.psword").text("ok").removeClass("den").removeClass("none");
        $("input.jzpsword").prop("checked",true); //标准写法，推荐！
    }
}
sessionStorage.clear("code");
Rpassword();

