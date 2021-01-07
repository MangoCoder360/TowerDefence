var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");

setInterval(gameUpdate,50);

function drawStuff() {
    ctx.fillRect(0,0,cvs.clientWidth,cvs.height)
}

function gameUpdate() {
    drawStuff();
}