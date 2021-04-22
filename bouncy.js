//Set global variable that would contain the position, velocity and the html element "balls"
var balls = [{
  element: document.getElementById('ball'),
  velX: 10,
  velY: 8,
  posX: 100,
  Xrev: false,
  posY: 200,
  Yrev: false,
  radi: 100
}];
// balls[0].element = document.getElementById('ball');
// balls[0].velX = 10;
// balls[0].velY = 8;
// balls[0].posX = 100;
// balls[0].Xrev = false;
// balls[0].posY = 200;
// balls[0].Yrev = false;
// balls[0].radi = 100;

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
    balls[wch1].Xrev = true;
  }
  if(nowBall.posX <= Xmin){
    balls[wch1].Xrev = false;
  }
  if(nowBall.Yrev === false){
    nowBall.posY = nowBall.posY + nowBall.velY;
  }
  else{
    nowBall.posY = nowBall.posY - nowBall.velY;
  }
  if(nowBall.posY > Ymax - nowBall.radi){
    balls[wch1].Yrev = true;
  }
  if(nowBall.posY <= Ymin){
    balls[wch1].Yrev = false;
  }
  balls[wch1].posX = nowBall.posX;
  balls[wch1].posY = nowBall.posY;
  balls[wch1].element.style.left = nowBall.posX + 'px';
  balls[wch1].element.style.top = nowBall.posY + 'px';
}
function moveBalls(){
    for(counter = 0; counter < balls.length; counter++){
        moveBall(counter, balls[counter]);
    }      
}
function newball(){
    let new1 = balls.length;
    let randrad = randRange(50, 200);
    balls.push({});
    const newBall = balls[new1];
    newBall.element =  document.createElement('div');
    // newBall.element.classList.add('bouncyBall');
    newBall.element.style.zIndex = '5';
    newBall.element.style.position = 'absolute';
    newBall.element.style.left = '0 px';
    newBall.element.style.top = '200px';
    newBall.element.style.width = randrad + 'px';
    newBall.element.style.height = randrad + 'px';
    newBall.element.style.borderRadius = '50%';
    let rancolor = randRange(1, 16777215).toString(16);
    newBall.element.style.background = '#' + rancolor;
    // random color from https://css-tricks.com/snippets/javascript/random-hex-color/
    newBall.velX = randRange(1,20);
    newBall.velY = randRange(1,20);
    newBall.posX = 100;
    newBall.Xrev = false;
    newBall.posY = 200;
    newBall.Yrev = false;
    newBall.radi = randrad;
    document.body.appendChild(newBall.element);
}
function randRange(rmin, rmax){
    let ranum = Math.floor(Math.random()*(rmax-rmin)+rmin);
    return ranum;
}
var motionInterval
function commence(){
    if (!motionInterval){
      motionInterval = setInterval(moveBalls, 50);
    } else{
      motionInterval = 0;
    }
}









//much of the code for this was provided by the Professional Certificate in Coding: Full Stack Development with MERN course
