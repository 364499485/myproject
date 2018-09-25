//设置验证码
function fn(cvs) {
    var strs = "";     //创建一个变量，接收canvas中的值
    function color() {
        var r = parseInt(Math.random() * 255);
        var g = parseInt(Math.random() * 255);
        var b = parseInt(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    }

    cvs = document.querySelector("canvas");
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
