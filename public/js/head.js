//请求页头
function jz() {
    $.ajax({
        url: "http://localhost:3000/nav.html",
        type: "get"
    })
        .then(res => {
            $("#hea").html(res);
        })

    $.ajax({
        url: "http://localhost:3000/nav1.html",
        type: "get"
    })
        .then(res => {
            $("#hea_1").html(res);
        })

    $.ajax({
        url: "http://localhost:3000/footer.html",
        type: "get"
    })
        .then(res => {
            $("#bot").html(res)
        });
}
jz();
function pd() {
    var xxx=window.location.href;
    var type=sessionStorage.getItem("type");
    var ty=sessionStorage.getItem("ty");
    if(xxx!="http://localhost:3000/Investment.html"){
        sessionStorage.clear(ty);
        sessionStorage.clear(type);
    }
}
pd();