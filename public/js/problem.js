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
    })

$.ajax({
    url: "http://localhost:3000/notice/problemlist",
    type: "get",
    dataType: "json"
})
.then(result=>{
     // console.log(result);
    var html = "";
    for(var i=0;i<result.length;i++){
        html+=`<div>
                    <div class="w">问：${result[i].title}</div>
                    <p class="none"><span class="answer">答：</span><a>${result[i].content}</a></p>
                </div>`;
    }
    var wt = $("#wt");
    wt.html(html);

    //通过页面转跳过来的效果
    var src = location.href;
    var num = src.indexOf("?");
    var ids =src.slice(num+1);
    var id=ids.slice(3,4);
    var spanlist = $(".answer");
    // console.log(s);
    for(var i=0;i<spanlist.length;i++){
        if(id==i){
            var span = $(spanlist[i]);
            span.parent().removeClass("none");
            var jl = (1+i)*60+35+31;
            $("html,body").animate({
                scrollTop:jl
            },500)
            //没有过度效果
            // setTimeout(function () {
            //     $("html,body").scrollTop(jl)
            // },300)

        }
    }
});

//设置单击后效果
$("#wt").on("click","div.w",function(){
    var nav = $(this);
    // console.log(nav)
    // console.log(nav.next());
    nav.addClass("color");
    nav.parent().siblings().find("div").removeClass("color");
    nav.parent().siblings().find("p").addClass("none");
    // console.log(nav.parent().find("p"));
    nav.next().removeClass("none");
});