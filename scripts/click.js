var upgrate = document.getElementsByClassName('js_upgrate'),
    dongtai = document.getElementsByClassName('js_dongtai');
var btn_read = document.getElementsByClassName('btn1');
//alert(btn_read[0].length);
var btn_more = document.getElementsByClassName('btn2');
var miaoshu = document.querySelectorAll('.bj .left > .content a > span');
var pN = document.querySelectorAll('.bj .left > .content a .playNum');

var qb = document.getElementsByClassName('ph_qb');
var yc = document.getElementsByClassName('ph_yc');

//竖导航
var vas = document.querySelectorAll('.vMenu .fix .box a');
var fix = document.querySelector('.Content > .vMenu .fix');
var vclick = document.getElementsByClassName('vclick');
var toTop = document.getElementsByClassName('toTop')[0];




function fj() {

    //var span = this.getElementsByTagName('span');
    var index = this.getElementsByTagName('span')[0].className;
    for (var j = 1; j < fj_week.length; j++) {
        fj_week[0].style.color = '#000000';
        //fj_week[0].getElementsByTagName('span')[0].style.display = 'none';
        fj_week[j].innerText = fj_week[j].innerText.charAt(fj_week[j].innerText.length - 1);
        //fj_week[j].getElementsByTagName('span')[0].style.display = 'none';
        fj_week[j].style.color = '#000000';
    }

    if (this.innerText != '最新') {
        this.innerText = '周' + this.innerText;
    }
    this.style.color = '#3B9ED5';
    //alert(index);
    for (var k = 0; k < fj_content.length; k++) {
        fj_content[k].style.display = 'none';
        //fj_content[k].classList.remove('contentShow');
    }
    for (var k in fj_content) {

        //
    }
    var content = this.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(index);
    content[0].style.display = 'block';
    //span[0].style.display = 'block';
};


//排行切换
for (var i in qb) {
    qb[i].onclick = phChange;
}
for (var i in yc) {
    yc[i].onclick = phChange_a;
}

function phChange() {
    var s = this.parentNode.parentNode.getElementsByClassName('main');
    var d = this.parentNode.getElementsByTagName('span');
    d[2].style.display = 'none';
    d[1].style.display = 'block';
    s[1].style.display = 'none';
    s[0].style.display = 'block';
}
function phChange_a() {
    var s = this.parentNode.parentNode.getElementsByClassName('main');
    var d = this.parentNode.getElementsByTagName('span');
    d[1].style.display = 'none';
    d[2].style.display = 'block';
    s[0].style.display = 'none';
    s[1].style.display = 'block';
}

//播放数弹幕数悬浮下滑
for (var i in miaoshu) {
    // = pN[i].onmouseover 
    miaoshu[i].onmouseover = xiaHua;
    miaoshu[i].onmouseleave = xiaHua_a;
}
for (var i in pN) {
    // = pN[i].onmouseover 
    pN[i].onmouseover = function () { this.style.bottom = '-18px'; };
    pN[i].onmouseleave = function () { this.style.bottom = '0px'; };
}
//播放数弹幕数悬浮下滑
function xiaHua() {
    this.parentNode.getElementsByClassName('playNum')[0].style.bottom = '-18px';
}

function xiaHua_a() {
    this.parentNode.getElementsByClassName('playNum')[0].style.bottom = '0px';
}


//alert(bj_dongtai.length+','+bj_upgrate.length);
for (var i in upgrate) {
    //赋给事件的是函数名,  并没有参数的括号和参数,那样会出错--why？
    //传参：onclick事件事件后定义一个方法, 我们可以在方法体中调用我们真正的方法并传入我们想要的参数,
    upgrate[i].onclick = gengHuan;
};
for (var i in dongtai) {
    dongtai[i].onclick = gengHuan_a;
};

//icon_read旋转
for (var i in btn_read) {
    btn_read[i].onmouseover = iRead;
    btn_read[i].onmouseleave = iRead_a;
}

//icon_more分合
for (var i in btn_more) {
    btn_more[i].onmouseover = iMore;
    btn_more[i].onmouseleave = iMore_a;
}

//icon_more分合
function iMore() {
    this.getElementsByTagName('div')[0].style.transform = 'translateX(3px)';
    this.getElementsByTagName('span')[0].style.transform = 'translateX(-2px)';
    this.getElementsByTagName('div')[0].style.transition = '0.3s ease';
    this.getElementsByTagName('span')[0].style.transition = '0.3s ease';
}
function iMore_a() {
    this.getElementsByTagName('div')[0].style.transform = 'translateX(0px)';
    this.getElementsByTagName('span')[0].style.transform = 'translateX(0px)';
}

//icon_read旋转
function iRead() {
    this.getElementsByTagName('div')[0].style.transform = 'rotate(180deg)';
    this.getElementsByTagName('div')[0].style.transition = '0.6s ease';
}

function iRead_a() {
    this.getElementsByTagName('div')[0].style.transform = 'rotate(-180deg)';
    this.getElementsByTagName('div')[0].style.transition = '0.6s ease';
}

//切换
function gengHuan() {
    var s = this.parentNode.parentNode.getElementsByClassName('content');
    var d = this.parentNode.getElementsByTagName('span');
    d[0].style.display = 'none';
    d[1].style.display = 'block';
    s[1].style.display = 'none';
    s[2].style.display = 'block';
};
function gengHuan_a() {
    var s = this.parentNode.parentNode.getElementsByClassName('content');
    var d = this.parentNode.getElementsByTagName('span');
    d[0].style.display = 'block';
    d[1].style.display = 'none';
    s[2].style.display = 'none';
    s[1].style.display = 'block';
};







//***************竖导航事件实现******************
//竖导航元素获取
var vas = document.querySelectorAll('.vMenu .fix .box a'),
    vbox = document.querySelector('.vMenu .fix .box'),
    fix = document.querySelector('.Content > .vMenu .fix'),
    vclick = document.getElementsByClassName('vclick'),
    toTop = document.getElementsByClassName('toTop')[0];

//获取模块数量，设置index
var vlength = vas.length,
    index = 0;

//获取垂直导航的高度和浏览器视口的高度
var slideH = fix.offsetHeight,
    clientH = document.documentElement.clientHeight;
//页面的高度减去导航地高度/2 = top
var minus = Math.max((clientH - slideH), 0);//页面高度可能小于导航条高度
var posH = minus / 2;
//alert(posH);

//监听页面滚动事件
window.onscroll = function () {
    var scrolltop = document.documentElement.scrollTop;
    if (scrolltop > 243) {
        fix.style.top = posH + 'px';//滚动超过243，使导航条居中显示
        //鼠标滚轮滑动页面，导航条跟随变化
        for (var j = 0; j < vclick.length; j++) {
            //当该模块的顶部超过视口中线往上100px时，导航条跳转到对应部分
            if ((vclick[j].offsetTop - scrolltop) < (clientH / 2 - 100)) {
                dhChange(j);
            }
        }
    } else {
        fix.style.top = '234px';
        dhChange(-1);//不传参
    }
}

//导航底部 toTop按钮
toTop.onclick = function () {
    //document.documentElement.scrollTop = 0;
    var pos = document.documentElement.scrollTop;
    var speed = pos / 25;
    var time = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(time);
        }
    }, 10);
};

//事件委托函数
var vasHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    var vindex = target.getAttribute('data-vindex');
    var currentPos = document.documentElement.scrollTop;
    var pos = vclick[vindex].offsetTop;
    switch (vindex) {
        case '0':
        case '2':
        case '4':
            pos = pos - 20;
            break;
    }
    var speed = (pos - currentPos) / 15;
    //导航条变化
    dhChange(vindex);
    //页面滚动
    var timex = setInterval(function () {
        //不懂body元素transition为什么不行
        document.documentElement.scrollTop = document.documentElement.scrollTop + speed;
        if ((speed > 0) && (document.documentElement.scrollTop >= pos)) {
            document.documentElement.scrollTop = pos;
            clearInterval(timex);
        } else if ((speed < 0) && (document.documentElement.scrollTop <= pos)) {
            document.documentElement.scrollTop = pos;
            clearInterval(timex);
        }
    }, 10);
//document.documentElement.scrollTop = pos;
};

//事件委托-点击使页面跳转到指定模块
if (window.addEventListener) {
    vbox.addEventListener('click', vasHandler, false);
} else if (window.attachEvent) {
    vbox.attachEvent('onclick', vasHandler);
}

//背景切换
var dhChange = function (vindex) {
    for (var i = 0; i < vas.length - 1; i++) {
        vas[i].style.backgroundColor = '#fff';
        vas[i].style.color = '#000';
    }
    if (vindex > -1) {
        vas[vindex].style.backgroundColor = "#00A1D6";
        vas[vindex].style.color = '#fff';
    }
};


