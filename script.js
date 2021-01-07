var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");

setInterval(gameUpdate,1000);

function drawStuff() {
    ctx.fillStyle = "lime";
    ctx.fillRect(0,0,cvs.clientWidth,cvs.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,125,175,50);
    ctx.fillRect(125,125,50,175);
    ctx.fillRect(150,250,175,50);
    ctx.fillRect(275,125,50,175);
    ctx.fillRect(275,125,175,50);
}

function gameUpdate() {
    drawStuff();
}