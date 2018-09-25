
//验证码
var cv = document.querySelector("canvas");
var str = fn(cv);
//手机验证码
$("input.p1").on("blur",function(){
   var p1 = $(this);
   if(p1.val().length!=11){
       p1.next().html("请输入正确的手机号").css("color","red");
   }else{
       p1.next().html("ok").css("color","green");
       sessionStorage.setItem("ihone",p1.val());
   }
});

//注册一页
$("#up").on("click",function(){
    var disl=$("p.bottom>input").is(':checked');
    var ihone=$("span.ip").html();
    var yz = $("input.p2").val().toLocaleUpperCase();
    var st = str.toLocaleUpperCase();
    var yzcode = $("span.yzcode");
    if(yz!=st){
        yzcode.removeClass("none").css("color","red");
        fn();
    }else{
        yzcode.addClass("none");
        if (disl && ihone == "ok") {
            $("footer").addClass("none");
            $("#user").removeClass("none");
            $("#zcok").addClass("none");
            $("div.q2").css({"border":"6px solid #33AAFF","color":"#33AAFF"});
            sessionStorage.setItem("code","1")
        }else{
            $("span.Clause").removeClass("none");
        }
    }
});

var code = sessionStorage.getItem("code");
function fun(){
    if(code==2){
        $("footer").addClass("none");
        $("#user").addClass("none");
        $("#zcok").removeClass("none");
        $("div.q3").css({"border":"6px solid #33AAFF","color":"#33AAFF"})
        $("div.q2").css({"border":"6px solid #33AAFF","color":"#33AAFF"})
    }else if(code==1){
        $("footer").addClass("none");
        $("#user").removeClass("none");
        $("#zcok").addClass("none");
        $("div.q2").css({"border":"6px solid #33AAFF","color":"#33AAFF"})
    }
}
fun();
//注册2页
$(".uname").on("blur",function(){
    var input = $(this);
    if(input.val().length>=6&&input.val().length<=20){
        input.next().html("ok").css("color","green");
    }else{
        input.next().html("账号长度为6-20位").css("color","red");
    }
});
$(".upwd").on("blur",function(){
    var input = $(this);
    if(input.val().length>=6&&input.val().length<=16){
        input.next().html("ok").css("color","green");
    }else{
        input.next().html("密码长度6-16位").css("color","red");
    }
});
$(".upwd2").on("blur",function(){
    var input = $(this);
    var input2 = $(".upwd");
    if(input.val()==input2.val()){
        input.next().html("ok").css("color","green");
    }else{
        input.next().html("两次输入不一致，请重新输入").css("color","red");
    }
});
$("#up1").on("click",function () {
    var p1 = $(".uname").next().html();
    var p2 = $(".upwd").next().html();
    var p3 = $(".upwd2").next().html();
    if(p1=="ok"&&p2=="ok"&&p3=="ok"){
        var uname=$("input.uname").val();
        var upwd=$("input.upwd2").val();
        var ihone=sessionStorage.getItem("ihone");
        $.ajax({
            url:"http://localhost:3000/user/inser",
            type:"post",
            data:{uname,upwd,ihone}
        })
            .then(result=>{
                // console.log(result);
                if(result.code==1){
                    $("footer").addClass("none");
                    $("#user").addClass("none");
                    $("#zcok").removeClass("none");
                    sessionStorage.setItem("code","2");
                    sessionStorage.clear("ihone");
                }
            })
    }
});