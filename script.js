var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");

setInterval(gameUpdate,1000);

function drawStuff() {
    ctx.fillStyle = "lime";
    ctx.fillRect(0,0,cvs.clientWidth,cvs.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,125,175,50);
}

function gameUpdate() {
    drawStuff();
}