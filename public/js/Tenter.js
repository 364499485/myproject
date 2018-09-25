//显示投资人
$("#hd>button:last-child").on("click",function () {
    var btn=$(this);
    var str = btn.html();
   if(str=="展开投标记录"){
       btn.parent().next().removeClass("none");
       btn.html("收起投标记录");
   }else{
       btn.parent().next().addClass("none");
       btn.html("展开投标记录");
   }
});

//投资
var btn = $("div.Percentage>button");
var limit = $("#limit");
btn.on("click",function(){
    limit.removeClass("none");
});
var No = $("#limit>button:last-child");
No.on("click",function(){
    limit.addClass("none");
});
var Ok = $("#limit>button.ok");
Ok.on("click",function(){
    var num = ($("#limit>input:first-child")).val();
    var Surplus = $(".Surplus");
    var Snum =parseInt(Surplus.html().slice(6));
    if(num>500&&num<Snum){
        //获取ID
        function GetId(name)
        {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
        var tid = GetId("id");
        var uname = ($("div.ok>a.name")).html();
        var tname = ($("#hd>h2")).html();
        if(uname==""){
            alert("请先登录")
        }else {
            //发送请求
            $.ajax({
                url: "http://localhost:3000/table/cathectic",
                data: {tid, uname, tname, num},
                type: "post"
            })
                .then(result => {
                    alert(result.msg)
                })
        }
    }else{
        alert("输入金额不对")
    }
});
