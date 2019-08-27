//竖导航
var vas = document.querySelectorAll('.vMenu .fix .box a');
var fix = document.querySelector('.Content > .vMenu .fix');
var vclick = document.getElementsByClassName('vclick');
var toTop = document.getElementsByClassName('toTop')[0];

//******************跨浏览器事件对象******************
var EventDeal = {
    addHandler: function (element, name, handler) {
        if (window.addEventListener) {
            element.addEventListener(name, handler, false);
        } else if (window.atachEvent) {
            element.attachEvent('on' + name, handler);
        } else {
            let name = 'on' + name;
            element.name = handler;
        }
    },
    removeHandler: function (element, name, handler) {
        if (window.removeEventListener) {
            element.removeHandler(name, handler, false);
        } else if (window.detachEvent) {
            element.detachEvent('on' + name, handler);
        } else {
            let name = 'on' + name;
            element.name = handler;
        }
    },
    getEvent: function (event) {
        return event || window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault()) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation()) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};

var bigBox = document.querySelector('.Content > .box');

//bigBox的click事件
var bigHandler = function (event) {
    var event = EventDeal.getEvent(event),
        target = EventDeal.getTarget(event);
    if (event.type === 'click') {
        switch (target.className) {
            case 'dh dongtai js_dongtai':
                var con = target.parentNode.parentNode.getElementsByClassName('content');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.nextElementSibling.style.color = '#000';
                conSpan[0].style.display = 'block';
                conSpan[1].style.display = 'none';
                con[2].style.display = 'none';
                con[1].style.display = 'block';
                break;
            case 'dh upgrate js_upgrate':
                var con = target.parentNode.parentNode.getElementsByClassName('content');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.previousElementSibling.style.color = '#000';
                conSpan[0].style.display = 'none';
                conSpan[1].style.display = 'block';
                con[2].style.display = 'block';
                con[1].style.display = 'none';
                break;
            case 'ph_qb':
                var con = target.parentNode.parentNode.getElementsByClassName('main');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.nextElementSibling.style.color = '#000';
                conSpan[2].style.display = 'none';
                conSpan[1].style.display = 'block';
                con[1].style.display = 'none';
                con[0].style.display = 'block';
                break;
            case 'ph_yc':
                var con = target.parentNode.parentNode.getElementsByClassName('main');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.previousElementSibling.style.color = '#000';
                conSpan[1].style.display = 'none';
                conSpan[2].style.display = 'block';
                con[0].style.display = 'none';
                con[1].style.display = 'block';
                break;
        }
    }
};

EventDeal.addHandler(bigBox, 'click', bigHandler);


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



//----------------播放数弹幕数悬浮下滑------------------
var titles = document.querySelectorAll('.bj .left > .content a > span');
var pN = document.querySelectorAll('.bj .left > .content a .playNum');

for (var i in titles) {
    titles[i].onmouseenter = slideEnter;
    titles[i].onmouseleave = slideLeave;
}
for (var i in pN) {
    pN[i].onmouseenter = function () { this.style.bottom = '-18px'; };
    pN[i].onmouseleave = function () { this.style.bottom = '0px'; };
}
//执行函数
function slideEnter() {
    this.parentNode.getElementsByClassName('playNum')[0].style.bottom = '-18px';
}
function slideLeave() {
    this.parentNode.getElementsByClassName('playNum')[0].style.bottom = '0px';
}



//---------新动态刷新和更多按钮--------
var btn_refresh = document.getElementsByClassName('btn1'),
    btn_more = document.getElementsByClassName('btn2');

//刷新
for (var i in btn_refresh) {
    btn_refresh[i].onmouseenter = refreshEnter;
    btn_refresh[i].onmouseleave = refreshLeave;
}

//更多
for (var i in btn_more) {
    btn_more[i].onmouseenter = moreEnter;
    btn_more[i].onmouseleave = moreLeave;
}

//刷新mouseenter
function moreEnter() {
    var l = this.getElementsByTagName('div')[0],
        r = this.getElementsByTagName('span')[0];
    l.style.transform = 'translateX(3px)';
    r.style.transform = 'translateX(-2px)';
    l.style.transition = '0.3s ease';
    r.style.transition = '0.3s ease';
}
//刷新mouseleave
function moreLeave() {
    var l = this.getElementsByTagName('div')[0],
        r = this.getElementsByTagName('span')[0];
    l.style.transform = 'translateX(0px)';
    r.style.transform = 'translateX(0px)';
}

//更多mouseenter
function refreshEnter() {
    var circle = this.getElementsByTagName('div')[0];
    circle.style.transform = 'rotate(180deg)';
    circle.style.transition = '0.6s ease';
}
//更多mouseleave
function refreshLeave() {
    var circle = this.getElementsByTagName('div')[0];
    circle.style.transform = 'rotate(-180deg)';
    circle.style.transition = '0.6s ease';
}



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


