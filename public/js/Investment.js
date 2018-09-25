
//获取数据
function list(result){
    var html="";
    for(var i=0;i<result.msg.length;i++){
        html+=`
            <tr class="two">
						<td class="qqq">
							<div class="zhen">${result.msg[i].type.slice(0,1)}</div>
							<a href="#">${result.msg[i].title}</a><br>
							<span>第${result.msg[i].nper}期</span>
						</td>
						<td class="two-item">
							<span>${result.msg[i].Interest}</span>
							<div class="zhen hui">慧</div>
						</td>
						<td class="two-item1">
							${result.msg[i].duration}
						</td>
						<td class="two-item2">
							￥${result.msg[i].limit}
						</td>
						<td class="two-item3">
							${result.msg[i].schedule}
						</td>
						<td class="two-item4">
							<a href="#" class="btn">立即投资</a><br>
							<span>剩余可投：74000</span>
						</td>
					</tr>
        `;
    }
    $("#Ist table tbody").html(html);
    //剩余投资处理
    var td = document.querySelectorAll(".two-item3");
    for(var i=0;i<td.length;i++){
        var item=$(td[i]);
        if(item.html().trim()=="100%"){
            item.next().find("a").html("还款中").css("background","#ccc").nextAll("span").css("display","none")
        }
    }
}
$.ajax({
   url:"http://localhost:3000/Investment/list",
    type:"GET",
    dataType:"json"
})
.then(result=>{
    var html="";
    for(var i=0;i<5;i++){
        html+=`
            <tr class="two">
						<td class="qqq">
							<div class="zhen">${result.msg[i].type.slice(0,1)}</div>
							<a href="#">${result.msg[i].title}</a><br>
							<span>第${result.msg[i].nper}期</span>
						</td>
						<td class="two-item">
							<span>${result.msg[i].Interest}</span>
							<div class="zhen hui">慧</div>
						</td>
						<td class="two-item1">
							${result.msg[i].duration}
						</td>
						<td class="two-item2">
							￥${result.msg[i].limit}
						</td>
						<td class="two-item3">
							${result.msg[i].schedule}
						</td>
						<td class="two-item4">
							<a href="#" class="btn">立即投资</a><br>
							<span>剩余可投：74000</span>
						</td>
					</tr>
        `;
    }
    $("#Ist table tbody").html(html);
    //剩余投资处理
    var td = document.querySelectorAll(".two-item3");
    for(var i=0;i<td.length;i++){
        var item=$(td[i]);
        if(item.html().trim()=="100%"){
            item.next().find("a").html("还款中").css("background","#ccc").nextAll("span").css("display","none")
        }
    }
});

//下一页
function x() {
    var $pne = $("#Ist div.pne>button:last-child");
    $pne.on("click", function () {
        var pne = $(this);
        var tiv = $("#Ist div.pne a.active");
        var j = tiv.html();
        if (j < 3) {
            tiv.next().addClass("active").siblings().removeClass("active");
            j++;
        } else {
            //获取数字
            var num = document.querySelectorAll("div.pne a.num");
            for (var i = 0; i < num.length; i++) {
                var str = $(num[i]).html();
                var xx = $(num[i]);
                str++;
                xx.html(str);
            }
        }
        var z = $("#Ist div.pne a.active").html();
        $.ajax({
            url: `http://localhost:3000/Investment/pne`,
            type: "GET",
            data: {j: z}
        })
            .then(result => {
                if (result.code == 0 || result.msg.length < 5) {
                    list(result);
                    var num = $("#Ist div.pne a.active");
                    num.addClass("active").siblings().removeClass("active");
                    pne.prop("disabled", true);
                    pne.addClass("num-wbk");
                } else {
                    list(result);
                    var first = $("#Ist div.pne>button:first-child");
                    first.removeClass("num-wbk").prop("disabled", false);
                    ;
                }
                var sw = $("#Ist div.pne a.active").html();
                sessionStorage.setItem("type", sw)
                var ty = $("#Ist div.pne").html();
                sessionStorage.setItem("ty", ty)
            })
    });
}
x();
//监听第一页
function fun(){
    var show=$("#Ist div.pne a.active").html();
    var $pne=$("#Ist div.pne>button:first-child");
    if(show==1){
        $pne.prop("disabled",true);
        $pne.addClass("num-wbk");
    }else{
        $pne.prop("disabled",false);
        $pne.removeClass("num-wbk");
    }
}
fun();
// 上一页
function s() {
    var $pne = $("#Ist div.pne>button:first-child");
    $pne.on("click", function () {
        var tiv = $("#Ist div.pne a.active");
        var pon = $(this);
        var j = tiv.html();
        var last = $("#Ist div.pne>button:last-child");
        last.removeClass("num-wbk").prop("disabled", false);
        ;
        if (j > 3) {
            //获取数字
            var num = document.querySelectorAll("div.pne a");
            var nu = $(num[0]);
            if (nu.html() != 1) {
                for (var i = 0; i < num.length; i++) {
                    var str = $(num[i]).html();
                    var xx = $(num[i]);
                    str--;
                    xx.html(str);
                }
            }
        } else if (j > 1) {
            //获取数字
            var num = document.querySelectorAll("div.pne a");
            var nu = $(num[0]);
            if (nu.html() != 1) {
                for (var i = 0; i < num.length; i++) {
                    var str = $(num[i]).html();
                    var xx = $(num[i]);
                    str--;
                    xx.html(str);
                }
            } else {
                var num = document.querySelectorAll("div.pne a");
                var nu = $(num[1]);
                if (nu.html() == 2) {
                    var ti = $("#Ist div.pne a.active");
                    ti.prev().addClass("active").siblings().removeClass("active");
                    pon.addClass("num-wbk");
                }
            }
        }
        var zm = $("#Ist div.pne a.active").html();
        $.ajax({
            url: `http://localhost:3000/Investment/pne`,
            type: "get",
            data: {j: zm}
        })
            .then(result => {
                list(result);
                fun();
                var sw = $("#Ist div.pne a.active").html();
                sessionStorage.setItem("type", sw)
                var ty = $("#Ist div.pne").html();
                sessionStorage.setItem("ty", ty)
            })
    });
}
s();
//页数转跳
function zt() {
    var num = $("#Ist div.pne a");
    num.on("click", function () {
        var btn = $(this);
        var str = btn.html();
        btn.addClass("active").siblings().removeClass("active");
        fun();
        // console.log(str);
        $.ajax({
            url: "http://localhost:3000/Investment/numpage",
            type: "GET",
            data: {str}
        })
            .then(result => {
                var last = $("#Ist div.pne>button:last-child");
                list(result);
                if (result.code == 0) {
                    last.addClass("num-wbk").prop("disabled", true);
                } else {
                    last.removeClass("num-wbk").prop("disabled", false);
                }
                var sw = $("#Ist div.pne a.active").html();
                sessionStorage.setItem("type", sw)
                var ty = $("#Ist div.pne").html();
                sessionStorage.setItem("ty", ty)
            })
    });
}
zt();
//保存页面状态
function f() {
    var n=sessionStorage.getItem("type");
    if(n!=0&&n!=null){
        $.ajax({
            url: "http://localhost:3000/Investment/numpage",
            type: "GET",
            data: {str:n}
        })
            .then(result => {
                list(result);
                var t=sessionStorage.getItem("ty");
                $("#Ist div.pne").html(t);
                zt();
                s();
                x();
            })
    }
}
f();

//投资
setTimeout(function () {
    var td = $(".btn");
    td.on("click",function(){
        var btn = $(this);
        var tid=btn.id;
        if(btn.html()=="立即投资"){
            window.location.href='http://localhost:3000/Tender.html?id='+2;
        }
    })
},2000)