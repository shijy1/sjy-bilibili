var overShow = document.getElementsByClassName('overshow');
var overAparent = document.getElementsByClassName('parentTop')[0];
var topas = document.querySelectorAll('.parentTop ul li a');

var indexList = document.querySelector('.menu > .lists');

for (var i in overShow) {
    overShow[i].onmouseover = overdiv;
    overShow[i].onmouseout = outdiv;
};

function overdiv(event) {
    this.style.display = 'block';
};
function outdiv(event) {
    this.style.display = 'none';
}
//mouseover-show-a
var overistrue;
overHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    e.preventDefault();
    overistrue = target.getAttribute('over');
    if (overistrue == 'true') {
        target.nextElementSibling.style.display = 'block';
    }
};
//mouseout-show-a
outHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    e.preventDefault();
    var relateE = e.relatedTarget;
    if (overistrue == 'true') {
       target.nextElementSibling.style.display = 'none';
       if (relateE === target.nextElementSibling) {
           target.parent.style.backgroundColor = 'rgba(255,255,255,0.5)';
        } else {

        }
    }
};

if (window.addEventListener) {
    overAparent.addEventListener('mouseover', overHandler, false);
    overAparent.addEventListener('mouseout', outHandler, false);
} else if (window.attachEvent) {
    overAparent.attachEvent('onmouseover', overHandler);
    overAparent.attachEvent('onmouseout', overHandler);
}


var indexOver = document.getElementsByClassName('index-over');

//index mouseover
indexovHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    target.style.left = '5px';
    this.style.display = 'block';
    //target.firstElementChild.style.left = '0px';
    //if (target.className == 'in') {
    //    target.parentNode.style.left = '5px';
    //    target.style.left = '0px';
    //}
};

indexouHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    target.style.left = '0px';
    this.style.display = 'none';
    //target.firstElementChild.style.left = '100px';
    //if (target.className == 'in') {
    //    target.parentNode.style.left = '5px';
    //    target.style.left = '0px';
    //}
};

//indexlist mouseover
indexliiHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    //alert(target);
    if (target.className == 'overa') {
        target.nextElementSibling.style.display = 'block';
    }
};

indexlioHandler = function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    if (target.className == 'overa') {
        target.nextElementSibling.style.display = 'none';
    }
};


if (window.addEventListener) {
    indexList.addEventListener('mouseover', indexliiHandler, false);
    indexList.addEventListener('mouseout', indexlioHandler, false);
} else if (window.attachEvent) {
    indexList.attachEvent('onmouseover', indexliHandler);
}

for (var i in indexOver) {
    indexOver[i].addEventListener('mouseover', indexovHandler, false);
    indexOver[i].addEventListener('mouseout', indexouHandler, false);
}