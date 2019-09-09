

//获得番剧和国创week li
var weekLis = document.querySelectorAll('.wl .left .left_top .weekend li');
//获得番剧和国创week content
var weekCons = document.querySelectorAll('.wl .left > .content > div');


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
            case 'toTop':
                let pos = document.documentElement.scrollTop;
                let speed = pos / 25;
                let time = setInterval(function () {
                    document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
                    if (document.documentElement.scrollTop == 0) {
                        clearInterval(time);
                    }
                }, 10);
                break;
            case 'dh dongtai js_dongtai'://"有新动态"
                var con = target.parentNode.parentNode.getElementsByClassName('content');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.nextElementSibling.style.color = '#000';
                //span切换
                conSpan[0].style.display = 'block';
                conSpan[1].style.display = 'none';
                //content切换
                con[2].style.display = 'none';
                con[1].style.display = 'block';
                break;
            case 'dh upgrate js_upgrate'://"最新投稿"
                var con = target.parentNode.parentNode.getElementsByClassName('content');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.previousElementSibling.style.color = '#000';
                //span切换
                conSpan[0].style.display = 'none';
                conSpan[1].style.display = 'block';
                //content切换
                con[2].style.display = 'block';
                con[1].style.display = 'none';
                break;
            case 'ph_qb'://"全部"
                var con = target.parentNode.parentNode.getElementsByClassName('main');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.nextElementSibling.style.color = '#000';
                conSpan[2].style.display = 'none';
                conSpan[1].style.display = 'block';
                con[1].style.display = 'none';
                con[0].style.display = 'block';
                break;
            case 'ph_yc'://"原创"
                var con = target.parentNode.parentNode.getElementsByClassName('main');
                var conSpan = target.parentNode.getElementsByTagName('span');
                target.style.color = '#3B9ED5';
                target.previousElementSibling.style.color = '#000';
                conSpan[1].style.display = 'none';
                conSpan[2].style.display = 'block';
                con[0].style.display = 'none';
                con[1].style.display = 'block';
                break;
            case 'week0'://整个week的事件类似
            case 'week1':
            case 'week2':
            case 'week3':
            case 'week4':
            case 'week5':
            case 'week6':
            case 'week7':
                var i, num, weekArr = [];
                //取得所有week的innerHTML存入weeekArr
                for (var i = 0; i < weekLis.length; i++) {
                    weekArr.push(weekLis[i].getAttribute('data-name') + '<span></span>');
                }

                //获取自定义id
                var fId = target.getAttribute('data-id');
                //判断是番剧week还是国创week
                if (target.parentNode.parentNode.id === 'fjweek') {
                    i = 0;
                    num = weekLis.length / 2;
                } else if (target.parentNode.parentNode.id === 'gcweek') {
                    i = weekLis.length / 2;
                    num = weekLis.length;
                }

                //初始化
                for (; i < num; i++) {
                    weekLis[i].innerHTML = weekArr[i];
                    weekLis[i].firstElementChild.style.display = 'none';
                    weekLis[i].style.color = ' #000';
                    weekCons[i].style.display = 'none';
                }
                if (target.className != 'week0') {
                    target.innerHTML = '周' + target.innerHTML;
                }

                target.style.color = ' #3B9ED5';
                target.firstElementChild.style.display = 'block';
                weekCons[fId].style.display = 'block';
                break;
        }
    }
};

//bigBox注册事件
EventDeal.addHandler(bigBox, 'click', bigHandler);



//----------------播放数弹幕数悬浮下滑------------------
var titles = document.querySelectorAll('.bj .left > .content a > span');
var pN = document.querySelectorAll('.bj .left > .content a .playNum');

//执行函数
var slideEnter = function (event) {
    this.parentNode.getElementsByClassName('playNum')[0].style.bottom = '-18px';
}
var slideLeave = function (event) {
    this.parentNode.getElementsByClassName('playNum')[0].style.bottom = '0px';
}

//pN执行函数
var pNslideDown = function (event) {
    this.style.bottom = '-18px';
}
var pNslideUp = function (event) {
    this.style.bottom = '0px';
}

for (var i = 0; i < titles.length; i++) {
    EventDeal.addHandler(titles[i], 'mouseenter', slideEnter);
    EventDeal.addHandler(titles[i], 'mouseleave', slideLeave);
}
for (var i = 0; i < pN.length; i++) {
    EventDeal.addHandler(pN[i], 'mouseenter', pNslideDown);
    EventDeal.addHandler(pN[i], 'mouseleave', pNslideUp);
}



//---------新动态刷新和更多按钮--------
var btn_refresh = document.getElementsByClassName('btn1'),
    btn_more = document.getElementsByClassName('btn2');

//刷新mouseenter
var refreshEnter = function (event) {
    let circle = this.getElementsByTagName('div')[0];
    circle.style.transform = 'rotate(180deg)';
    circle.style.transition = '0.6s ease';
}
//刷新mouseleave
var refreshLeave = function (event) {
    let circle = this.getElementsByTagName('div')[0];
    circle.style.transform = 'rotate(-180deg)';
    circle.style.transition = '0.6s ease';
}

//更多mouseenter
var moreEnter = function (event) {
    let l = this.getElementsByTagName('div')[0],
        r = this.getElementsByTagName('span')[0];
    l.style.transform = 'translateX(3px)';
    r.style.transform = 'translateX(-2px)';
    l.style.transition = '0.3s ease';
    r.style.transition = '0.3s ease';
}
//更多mouseleave
var moreLeave = function (event) {
    let l = this.getElementsByTagName('div')[0],
        r = this.getElementsByTagName('span')[0];
    l.style.transform = 'translateX(0px)';
    r.style.transform = 'translateX(0px)';
}


//刷新
for (let i = 0; i < btn_refresh.length; i++) {
    EventDeal.addHandler(btn_refresh[i], 'mouseenter', refreshEnter);
    EventDeal.addHandler(btn_refresh[i], 'mouseleave', refreshLeave);
}
//for (var i in btn_refresh) {
//    btn_refresh[i].onmouseenter = refreshEnter;
//    btn_refresh[i].onmouseleave = refreshLeave;
//}

//更多
for (let i = 0; i < btn_more.length; i++) {
    EventDeal.addHandler(btn_more[i], 'mouseenter', moreEnter);
    EventDeal.addHandler(btn_more[i], 'mouseleave', moreLeave);
}




//***************竖导航事件实现******************

//竖导航元素获取
var vas = document.querySelectorAll('.vMenu .fix .box #bigd a'),
    vbox = document.querySelector('.vMenu .fix .box #bigd'),
    fix = document.querySelector('.Content > .vMenu .fix'),
    vclick = document.getElementsByClassName('vclick');
//toTop = document.getElementsByClassName('toTop')[0];

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


//页面滚动监听事件执行函数
var windowScrolled = function (event) {
    var scrolltop = document.documentElement.scrollTop;
    if (scrolltop > 243) {
        fix.style.top = posH + 'px';//滚动超过243，使导航条居中显示
        //鼠标滚轮滑动页面，导航条跟随变化
        for (var j = 0; j < vclick.length; j++) {
            //当该模块的顶部超过视口中线往上100px时，导航条跳转到对应部分
            if ((vclick[j].offsetTop - scrolltop) < (clientH / 2 - 100)) {
                if (!can) {
                    dhChange(j);
                }
            }
        }
    } else {
        fix.style.top = '234px';
        dhChange(-1);//不传参
    }
}

//竖导航点击执行函数
var vasHandler = function (event) {
    log('click');
    var e = event || window.event,
        target = e.target || e.srcElement;
    var vindex = target.getAttribute('data-vindex');
    var currentPos = document.documentElement.scrollTop;
    var pos = vclick[vindex].offsetTop;
    log(pos);
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
};

//竖导航样式切换
var dhChange = function (vindex) {
    for (var i = 0; i < vas.length; i++) {
        vas[i].style.backgroundColor = '#fff';
        vas[i].style.color = '#000';
    }
    if (vindex > -1) {
        vas[vindex].style.backgroundColor = "#00A1D6";
        vas[vindex].style.color = '#fff';
    }
};

//页面滚动事件
EventDeal.addHandler(window, 'scroll', windowScrolled);
//竖导航点击事件
EventDeal.addHandler(vbox, 'click', vasHandler);

/*9.8*/
var se = document.getElementById('gray');
var bd = document.getElementById('bigd');
var divs = document.getElementById('bigd').getElementsByTagName('a');
var pxIndexs = document.getElementsByClassName('px');
//log(pxIndexs.length);
var vclicksParent = document.querySelector('.Content .box');
var graybody = document.getElementById('graybody');
var vOpen = document.querySelector('.fix .open');
var lastClick = document.querySelector('.fix .last');
var moveDis, target = {}, mousedownX, mousedownY, index, ad, flag = false;
var can = false, colorDisplay = true, targetIndex;
lastClick.onclick = function () {
    log('last');
    can = !can;
    if (!can) {
        graybody.style.display = 'none';
        vOpen.style.display = 'none';
        bd.removeEventListener('mousedown', mouseDown, false);
        bd.removeEventListener('mousemove', mouseMove, false);
        bd.removeEventListener('mouseup', mouseUp, false);

        graybody.removeEventListener('mousemove', semouseMove, false);
        graybody.removeEventListener('mouseup', semouseUp, false);


        vas = document.querySelectorAll('.vMenu .fix .box #bigd a');
        vbox = document.querySelector('.vMenu .fix .box #bigd');
        fix = document.querySelector('.Content > .vMenu .fix');
        vclick = document.getElementsByClassName('vclick');

        //页面滚动事件
        EventDeal.addHandler(window, 'scroll', windowScrolled);
        //竖导航点击事件
        EventDeal.addHandler(vbox, 'click', vasHandler);

    } else {
        graybody.style.display = 'block';
        vOpen.style.display = 'block';
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = '#fff';
            divs[i].style.color = '#000';
        }
        bd.addEventListener('mousedown', mouseDown, false);
        bd.addEventListener('mousemove', mouseMove, false);
        bd.addEventListener('mouseup', mouseUp, false);


        graybody.addEventListener('mousemove', semouseMove, false);
        graybody.addEventListener('mouseup', semouseUp, false);
    }
};

var newdiv = document.createElement('a');
newdiv.style.display = 'block';
newdiv.style.width = '50px';
newdiv.style.height = '30px';
newdiv.style.backgroundColor = '#fff';
mouseDown = function (event) {
    var e = event || window.event;
    target = e.target || e.srcElement;

    //鼠标按下时的鼠标所在的X，Y坐标
    mousedownX = e.clientX;
    mousedownY = e.clientY;

    //初始位置的X，Y 坐标
    initX = target.offsetLeft;
    initY = target.offsetTop;

    target.style.position = 'absolute';
    target.style.zIndex = 2;

    targetIndex = target.getAttribute('data-vindex');

    moveDis = 0;
    target.style.left = initX;
    target.style.top = moveDis + initY + 'px';

    target.parentNode.insertBefore(newdiv, target);

    flag = true;
};

mouseMove = function (event) {
    var e = event || window.event;
    if (flag && can) {
        var mouseMoveY = e.clientY;

        moveDis = mouseMoveY - mousedownY;

        target.style.left = initX;
        target.style.top = moveDis + initY + 'px';

        //move过程判断鼠标位置列表变换
        var goalT = target.offsetTop;
        var whole = target.offsetHeight;
        var half = whole / 2;


        for (var i = 0; i < divs.length; i++) {
            var index = divs[i].getAttribute('data-vindex');
            index = parseInt(index);//data-vindex的内容超过了9,需要parsetInt()
            if (moveDis > 0) {
                if ((goalT + whole) > ((divs.length - 1) * whole - half)) {
                    bd.appendChild(newdiv);
                } else if ((goalT + whole) > (divs[i].offsetTop + half)) {
                    divs[i + 1].parentNode.insertBefore(newdiv, divs[i + 1]);
                }
            } else {
                if (goalT < half) {
                    bd.insertBefore(newdiv, bd.firstElementChild);
                } else if (index < parseInt(target.getAttribute('data-vindex')) && goalT < (divs[i].offsetTop + half)) {
                    divs[i].parentNode.insertBefore(newdiv, divs[i]);
                    break;
                }
            }
        }
    }
};

mouseUp = function (event) {
    var e = event || window.event;

    target.style.position = 'relative';
    target.style.zIndex = 1;
    target.style.backgroundColor = '#fff';
    target.style.top = '0px';
    bd.replaceChild(target, newdiv);
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute('data-vindex', i);
    }
    var erindex = target.getAttribute('data-vindex');
    log(targetIndex);
    log(parseInt(erindex) + 1);
    let toIndex = parseInt(erindex);
    let fromIndex = parseInt(targetIndex);
    if (moveDis > 0) {
        toIndex += 1;
    }
    vclicksParent.insertBefore(pxIndexs[fromIndex], pxIndexs[toIndex]);
    flag = false;
};

semouseMove = function (event) {
    var e = event || window.event;
    if (flag && can) {
        var seY = e.clientY;
        moveDis = seY - mousedownY;

        target.style.color = '#fff';
        target.style.backgroundColor = '#00A1D6';
        target.style.left = initX;
        target.style.top = moveDis + initY + 'px';

        //move过程判断鼠标位置列表变换
        var goalT = target.offsetTop;
        var whole = target.offsetHeight;
        var half = whole / 2;


        for (var i = 0; i < divs.length; i++) {
            var index = divs[i].getAttribute('data-vindex');
            index = parseInt(index);
            if (moveDis > 0) {
                if ((goalT + whole) > ((divs.length - 1) * whole - half)) {
                    bd.appendChild(newdiv);
                } else if ((goalT + whole) > (divs[i].offsetTop + half)) {
                    divs[i + 1].parentNode.insertBefore(newdiv, divs[i + 1]);
                }
            } else {
                if (goalT < half) {
                    bd.insertBefore(newdiv, bd.firstElementChild);
                } else if (index < parseInt(target.getAttribute('data-vindex')) && goalT < (divs[i].offsetTop + half)) {
                    divs[i].parentNode.insertBefore(newdiv, divs[i]);
                    break;
                }
            }
        }
    }
};

semouseUp = function (event) {
    var e = event || window.event;
    target.style.position = 'relative';
    target.style.zIndex = 1;
    target.style.backgroundColor = '#fff';
    target.style.color = '#000';
    target.style.top = '0px';
    bd.replaceChild(target, newdiv);
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute('data-vindex', i);
    }
    var erindex = target.getAttribute('data-vindex');
    log(targetIndex);
    log(parseInt(erindex) + 1);
    let toIndex = parseInt(erindex);
    let fromIndex = parseInt(targetIndex);
    if (moveDis > 0) {
        toIndex += 1;
    }
    vclicksParent.insertBefore(pxIndexs[fromIndex], pxIndexs[toIndex]);
    flag = false;
};

function log() {
    console.log.apply(this, arguments);
}

