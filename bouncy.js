//Set global variable that would contain the position, velocity and the html element "ball"
var ball = [document.getElementById('ball')];
ball[0].velX = 10;
ball[0].velY = 8;
ball[0].posX = 100;
ball[0].Xrev = false;
ball[0].posY = 200;
ball[0].Yrev = false;
ball[0].radi = 100;
function moveBall(wch1, nowBall) {
  var Xmin = 100;
  var Xmax = 1100;
  var Ymin = 200;
  var Ymax = 700;
  if(nowBall.Xrev === false){
    nowBall.posX = nowBall.posX + nowBall.velX;
  }
  else{
    nowBall.posX = nowBall.posX - nowBall.velX;
  }
  if(nowBall.posX > Xmax - nowBall.radi){
    ball[wch1].Xrev = true;
  }
  if(nowBall.posX <= Xmin){
    ball[wch1].Xrev = false;
  }
  if(nowBall.Yrev === false){
    nowBall.posY = nowBall.posY + nowBall.velY;
  }
  else{
    nowBall.posY = nowBall.posY - nowBall.velY;
  }
  if(nowBall.posY > Ymax - nowBall.radi){
    ball[wch1].Yrev = true;
  }
  if(nowBall.posY <= Ymin){
    ball[wch1].Yrev = false;
  }
  ball[wch1].posX = nowBall.posX;
  ball[wch1].posY = nowBall.posY;
  ball[wch1].style.left = nowBall.posX + 'px';
  ball[wch1].style.top = nowBall.posY + 'px';
}
function moveBalls(){
    for(counter = 0; counter < ball.length; counter++){
        moveBall(counter, ball[counter]);
    }      
}
function newball(){
    let new1 = ball.length;
    let randrad = randrange(50, 200);
    ball[new1] = document.createElement('div')
    ball[new1].style.zIndex = '5';
    ball[new1].style.position = 'absolute';
    ball[new1].style.left = '0 px';
    ball[new1].style.top = '200px';
    ball[new1].style.width = randrad + 'px';
    ball[new1].style.height = randrad + 'px';
    ball[new1].style.borderRadius = '50%';
    let rancolor = Math.floor(Math.random()*16777215).toString(16);
    ball[new1].style.background = '#' + rancolor;
    //random color from https://css-tricks.com/snippets/javascript/random-hex-color/
    ball[new1].velX = Math.floor(Math.random() *20);
    ball[new1].velY = Math.floor(Math.random() *20);
    ball[new1].posX = 100;
    ball[new1].Xrev = false;
    ball[new1].posY = 200;
    ball[new1].Yrev = false;
    ball[new1].radi = randrad;
    document.body.appendChild(ball[new1]);

}
function randrange(rmin, rmax){
    let ranum = Math.random()*(rmax-rmin)+rmin;
    return ranum;
}
var motioninterval
function commence(){
    motioninterval = setInterval(moveBalls, 50);
}









//much of the code for this was provided by the Professional Certificate in Coding: Full Stack Development with MERN course
