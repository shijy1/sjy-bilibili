//first切换
var spans = document.querySelectorAll('.menu > .lists_content .left .first_spot span'),
                first_spot = document.getElementsByClassName('first_spot')[0],
                imgs = document.querySelectorAll('.menu > .lists_content .left .first_box img'),
                first_box = document.getElementsByClassName('first_box')[0];
//直播推荐动态切换
var zbtj_box = document.getElementsByClassName('zbtj_box')[0],
    zbtj_spot = document.getElementsByClassName('zbtj_bars')[0],
    zbtj_imgs = document.querySelectorAll('.zhibo .right > .content .content3 .zbtj_box img'),
    zbtj_spans = document.querySelectorAll('.zhibo .right > .content .content3 .zbtj_bars span');

//番剧动态切换
var fjdt_box = document.getElementsByClassName('fjdt_box')[0],
    fjdt_spot = document.getElementsByClassName('fjdt_spot')[0],
    fjdt_imgs = document.querySelectorAll('.fanju_dt .right .content .fjdt_box img'),
    fjdt_spans = document.querySelectorAll('.fanju_dt .right .content .fjdt_spot span');
//国创动态切换
var gc_box = document.getElementsByClassName('gc_box')[0],
    gc_spot = document.getElementsByClassName('gc_spot')[0],
    gc_imgs = document.querySelectorAll('.guochuang .right .img .gc_box img'),
    gc_spans = document.querySelectorAll('.guochuang .right .img .gc_spot span');

//开启自动切换
var timer = setInterval(autoTimer, 3000);
var fjtimer = setInterval(fjdtTimer, 3000);
var gctimer = setInterval(gcTimer, 3000);
var zbtjtimer = setInterval(zbtjTimer, 3000);

//鼠标移入取消定时器，移出开启
for (var i in spans) {
    spans[i].onmouseover = function () {
        clearInterval(timer);
    };
    spans[i].onmouseleave = function () {
        timer = setInterval(autoTimer, 3000);
    };
}

//直播 鼠标移入取消定时器，移出开启
for (var i in zbtj_spans) {
    zbtj_spans[i].onmouseover = function () {
        clearInterval(zbtjtimer);
    };
    zbtj_spans[i].onmouseleave = function () {
        zbtjtimer = setInterval(zbtjTimer, 3000);
    };
}

//番剧 鼠标移入取消定时器，移出开启
for (var i in fjdt_spans) {
    fjdt_spans[i].onmouseover = function () {
        clearInterval(fjtimer);
    };
    fjdt_spans[i].onmouseleave = function () {
        fjtimer = setInterval(fjdtTimer, 3000);
    };
}

//国创 鼠标移入取消定时器，移出开启
for (var i in gc_spans) {
    gc_spans[i].onmouseover = function () {
        clearInterval(gctimer);
    };
    gc_spans[i].onmouseleave = function () {
        gctimer = setInterval(gcTimer, 3000);
    };
}

//alert(fjdt_imgs[0].offsetWidth);
//设置index
var index = 0;
var fjIndex = 0;
var gcIndex = 0;
var zbIndex = 0;
var w = imgs[0].offsetWidth;
var fjw = fjdt_imgs[0].offsetWidth;
var gcw = gc_imgs[0].offsetWidth;
var zbw = zbtj_imgs[0].offsetWidth;

//自动切换
function autoTimer() {
    if (first_box.offsetLeft == -4 * w) {
        index = 0;
    } else {
        index++;
    }
    var leftChange = index * w;
    leftChange = leftChange > (4 * w) ? 4 * w : leftChange;
    first_box.style.left = -leftChange + 'px';
    for (var j = 0; j < spans.length; j++) {
        spans[j].classList.remove('first');
        spans[j].classList.add('noicon');
        spans[j].style.background = 'url(../images/icons.png) 747px -790px';
    }
    spans[index].classList.toggle("noicon");
    spans[index].classList.add('first');
    spans[index].style.background = 'url(../images/icons.png) 747px -727px';
}

//直播推荐自动切换
function zbtjTimer() {
    if (zbtj_box.offsetLeft == -2 * zbw) {
        zbIndex = 0;
    } else {
        zbIndex++;
    }
    var leftChange = zbIndex * zbw;
    leftChange = leftChange > (2 * zbw) ? 2 * zbw : leftChange;
    zbtj_box.style.left = -leftChange + 'px';
    for (var j = 0; j < zbtj_spans.length; j++) {
        zbtj_spans[j].style.width = '10px';
        zbtj_spans[j].style.backgroundColor = '#FFFFFF';
    }
    zbtj_spans[zbIndex].style.width = '30px';
    zbtj_spans[zbIndex].style.backgroundColor = '#EC568E';
}

//番剧自动切换
function fjdtTimer() {
    if (fjdt_box.offsetLeft == -2 * fjw) {
        fjIndex = 0;
    } else {
        fjIndex++;
    }
    var leftChange = fjIndex * fjw;
    leftChange = leftChange > (2 * fjw) ? 2 * fjw : leftChange;
    fjdt_box.style.left = -leftChange + 'px';
    for (var j = 0; j < fjdt_spans.length; j++) {
        fjdt_spans[j].style.width = '10px';
        fjdt_spans[j].style.backgroundColor = '#FFFFFF';
    }
    fjdt_spans[fjIndex].style.width = '30px';
    fjdt_spans[fjIndex].style.backgroundColor = '#EC568E';
}
//国创自动切换
function gcTimer() {
    if (gc_box.offsetLeft == -gcw) {
        gcIndex = 0;
    } else {
        gcIndex++;
    }
    var leftChange = gcIndex * gcw;
    leftChange = leftChange > gcw ? gcw : leftChange;
    gc_box.style.left = -leftChange + 'px';
    for (var j = 0; j < gc_spans.length; j++) {
        gc_spans[j].style.width = '10px';
        gc_spans[j].style.backgroundColor = '#FFFFFF';
    }
    gc_spans[gcIndex].style.width = '20px';
    gc_spans[gcIndex].style.backgroundColor = '#EC568E';
}

//点击运行函数
handler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    var left = w;
    var index = 0;
    for (var j = 0; j < spans.length; j++) {
        spans[j].classList.remove('first');
        spans[j].classList.add('noicon');
        spans[j].style.background = 'url(../images/icons.png) 747px -790px';
    }
    switch (target.id) {
        case "s1":
            index = 0;
            first_box.style.left = -index * left + 'px';
            spans[index].classList.remove('noicon');
            spans[index].classList.add('first');
            spans[index].style.background = 'url(../images/icons.png) 747px -727px';
            break;
        case "s2":
            index += 1;
            first_box.style.left = -index * left + 'px';
            spans[index].classList.remove('noicon');
            spans[index].classList.add('first');
            spans[index].style.background = 'url(../images/icons.png) 747px -727px';
            break;
        case "s3":
            index += 2;
            first_box.style.left = -index * left + 'px';
            spans[index].classList.remove('noicon');
            spans[index].classList.add('first');
            spans[index].style.background = 'url(../images/icons.png) 747px -727px';
            break;
        case "s4":
            index += 3;
            first_box.style.left = -index * left + 'px';
            spans[index].classList.remove('noicon');
            spans[index].classList.add('first');
            spans[index].style.background = 'url(../images/icons.png) 747px -727px';
            break;
        case "s5":
            index += 4;
            first_box.style.left = -index * left + 'px';
            spans[index].classList.remove('noicon');
            spans[index].classList.add('first');
            spans[index].style.background = 'url(../images/icons.png) 747px -727px';
            break;
    }

}

//zb运行函数
zbHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    var zbleft = -zbw, zbIndex = 0;
    for (var j = 0; j < zbtj_spans.length; j++) {
        zbtj_spans[j].style.width = '10px';
        zbtj_spans[j].style.backgroundColor = '#FFFFFF';
    }
    switch (target.id) {
        case "s1":
            zbIndex = 0;
            zbtj_box.style.left = zbIndex * zbleft + 'px';
            zbtj_spans[zbIndex].style.width = '30px';
            zbtj_spans[zbIndex].style.backgroundColor = '#EC568E';
            break;
        case "s2":
            zbIndex += 1;
            zbtj_box.style.left = zbIndex * zbleft + 'px';
            zbtj_spans[zbIndex].style.width = '30px';
            zbtj_spans[zbIndex].style.backgroundColor = '#EC568E';
            break;
        case "s3":
            zbIndex += 2;
            zbtj_box.style.left = zbIndex * zbleft + 'px';
            zbtj_spans[zbIndex].style.width = '30px';
            zbtj_spans[zbIndex].style.backgroundColor = '#EC568E';
            break;
    }
}


//fj运行函数
fjHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    var fjleft = -fjw, fjIndex = 0;
    for (var j = 0; j < fjdt_spans.length; j++) {
        fjdt_spans[j].style.width = '10px';
        fjdt_spans[j].style.backgroundColor = '#FFFFFF';
    }
    switch (target.id) {
        case "s1":
            fjIndex = 0;
            fjdt_box.style.left = fjIndex * fjleft + 'px';
            fjdt_spans[fjIndex].style.width = '30px';
            fjdt_spans[fjIndex].style.backgroundColor = '#EC568E';
            break;
        case "s2":
            fjIndex += 1;
            fjdt_box.style.left = fjIndex * fjleft + 'px';
            fjdt_spans[fjIndex].style.width = '30px';
            fjdt_spans[fjIndex].style.backgroundColor = '#EC568E';
            break;
        case "s3":
            fjIndex += 2;
            fjdt_box.style.left = fjIndex * fjleft + 'px';
            fjdt_spans[fjIndex].style.width = '30px';
            fjdt_spans[fjIndex].style.backgroundColor = '#EC568E';
            break;
    }
}

//gc执行函数
gcHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    var gcleft = -gcw, gcIndex = 0;
    for (var j = 0; j < gc_spans.length; j++) {
        gc_spans[j].style.width = '10px';
        gc_spans[j].style.backgroundColor = '#FFFFFF';
    }
    switch (target.id) {
        case "s1":
            gcIndex = 0;
            gc_box.style.left = gcIndex * gcleft + 'px';
            gc_spans[gcIndex].style.width = '20px';
            gc_spans[gcIndex].style.backgroundColor = '#EC568E';
            break;
        case "s2":
            gcIndex += 1;
            gc_box.style.left = gcIndex * gcleft + 'px';
            gc_spans[gcIndex].style.width = '20px';
            gc_spans[gcIndex].style.backgroundColor = '#EC568E';
            break;
    }
}

//委托
if (window.addEventListener) {
    first_spot.addEventListener('click', handler, false);
    zbtj_spot.addEventListener('mouseover', zbHandler, false);
    fjdt_spot.addEventListener('mouseover', fjHandler, false);
    gc_spot.addEventListener('mouseover', gcHandler, false);
} else if (window.attachEvent) {
    first_spot.attachEvent('onclick', handler);
    zbtj_spot.attachEvent('onmouseover', zbHandler);
    fjdt_spot.attachEvent('onmouseover', fjHandler);
    gc_spot.attachEvent('onmouseover', gcHandler);
}

