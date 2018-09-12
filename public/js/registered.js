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

var fun = localStorage.getItem("fun");
fun();