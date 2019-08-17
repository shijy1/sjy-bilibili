var overShow = document.getElementsByClassName('overshow');
var overAparent = document.getElementsByClassName('parentTop')[0];
var topas = document.querySelectorAll('.parentTop ul li a');

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