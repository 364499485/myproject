//获取每个单独页面
$(function(){
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
        url:"http://localhost:3000/gongg.html",
        type:"get"
    })
        .then(res=>{
            $("#sec").html(res);
        })

    $.ajax({
        url:"http://localhost:3000/gyl.html",
        type:"get"
    })
        .then(res=>{
            $("#gyl").html(res);
        })
	$.ajax({
		url:"http://localhost:3000/zxl.html",
		type:"get"
	})
		.then(res=>{
			$("#zxl").html(res);
		})
	$.ajax({
		url:"http://localhost:3000/tz.html",
		type:"get"
	})
		.then(res=>{
			$("#Investment").html(res);
		})
    $.ajax({
        url:"http://localhost:3000/gsdt.html",
        type:"get"
    })
        .then(res=>{
            $("#Dynamic").html(res)
        })
    $.ajax({
        url:"http://localhost:3000/hzjg.html",
        type:"get"
    })
        .then(res=>{
            $("#Cooperation").html(res)
        })
    $.ajax({
        url:"http://localhost:3000/footer.html",
        type:"get"
    })
        .then(res=>{
            $("#bot").html(res)
        })
})




//设置微信登录
$(function(){
$("#lbt>div.lbt_k>nav>i").click(function(){
	var $i=$(this);
	//console.log($i);
	if($i.hasClass("bgcolor")){
		$i.removeClass("bgcolor");
        $i.addClass("bgcol");
        $i.next().addClass("none");
        $i.parent().children(":last-child").removeClass("none");
		//console.log($i.parent().last());
	}else{
        $i.removeClass("bgcol")
		$i.addClass("bgcolor")
        $i.next().removeClass("none");
        $i.parent().children(":last-child").addClass("none")
	}
});
//设置返回顶部默认为隐藏
$("#nav>a.top").hide();

//设置导航栏
$("#scroll").on("mouseover","button",function(){
    var $btn = $(this);
    //console.log($btn);
    $btn.addClass("bg_bgcolor");
    $btn.siblings().removeClass("bg_bgcolor")
});
var $scroll = $("#scroll");
$(window).scroll(function(){
    var $fs = $("h2");
    var $f1 = $("#lbt");
    var offsetTop = $f1.offset().top;
    //console.log(offsetTop);
    var scrollTop =$("html,body").scrollTop();
    //console.log(scrollTop)
    if(scrollTop>offsetTop){
        $scroll.css("display","block");
        $("#nav>a.top").show();
    }else{
        $scroll.css("display","none");
        $("#nav>a.top").hide();
    };
    //滑动显示楼层
    $fs.each((i,f)=>{
        offsetTop=$(f).offset().top;
        if(innerHeight/2+scrollTop>offsetTop){
            $scroll.children(`:eq(${i})`).addClass("bg_bgcolor").siblings().removeClass("bg_bgcolor")
        }
    });
});
//点击显示对应楼层
$("#scroll").on("click","button",function(){
    var i=$(this).index();
    $(this).addClass("bg_color").siblings().removeClass("bg_color");
    //console.log(i);
    var x =  $(`h2:eq(${i})`);
    //console.log(x.offset().top)
    var off = x.offset().top-100;
    //console.log(off);
    $("html").animate({
        scrollTop:off
    },500)
});
});

