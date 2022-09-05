function id(elementId) {
    return document.getElementById(elementId);
}
var curso = id('cursor');
var itemShee = id('itemSheet');
var clickWai = id('clickWait');
var scoreVie = id('scoreView');
var screenWidth = 0;
var itemList = [];
var itemX = [];
var itemY = [];
var itemWidth = 50;
var cursorWidth = 0;
var speed = 10;
var cursorX = 0;
var score = 0;
function localScriptStart(e) {
    var cr = document.body.getBoundingClientRect();
    screenWidth = cr.width;
    cr = curso.getBoundingClientRect();
    cursorWidth = cr.width;
    document.addEventListener('mousemove', mouseMoveHandler, false);
    document.addEventListener('touchmove', touchMoveHandler, false);
    document.addEventListener('click', clickEventHandler, false);
}
function clickEventHandler(e) {
    clickWai.style.display = 'none';
    requestAnimationFrame(moveItem);
    setTimeout(addItem, Math.floor(Math.random() * 800) + 200);
}
function mouseMoveHandler(e) {
    cursorX = e.clientX;
    curso.style.left = (cursorX - (cursorWidth / 2))+'px';
}
function touchMoveHandler(e) {
    cursorX = e.clientX;
    curso.style.left = (cursorX - (cursorWidth / 2))+'px';
}
function addItem() {
    var el = document.createElement('div');
    var random = Math.floor(Math.random() * (screenWidth - itemWidth));
    itemList.push(el);
    itemX.push(random);
    itemY.push(0);
    el.style.left = random+'px';
    itemShee.appendChild(el);
    setTimeout(addItem, Math.floor(Math.random() * 800) + 200);
}
function moveItem() {
    for(var i = 0; i < itemList.length; i++) {
        itemY[i] += speed;
        itemList[i].style.top = itemY[i]+'px';
        if((cursorX + itemWidth) > itemX[i] && (cursorX - itemWidth) < (itemX[i] + itemWidth)) {
            score++;
            scoreVie.innerHTML = 'score: '+score;
            itemShee.removeChild(itemList[i]);
            itemList.splice(i, 1);
            itemX.splice(i, 1);
            itemY.splice(i, 1);
        }
    }
    requestAnimationFrame(moveItem);
}
window.addEventListener('DOMContentLoaded', localScriptStart, false);
