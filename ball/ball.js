//Set global variable that would contain the position, velocity and the html element "ball"
// var position=100;

// var positionX=0;
// var positionY=0;

// var positionX1=300;
// var positionY1=300;

// var positionX=0;
// var positionY=0;

var positionX=0;
var positionY=0;
var positionX1=0;
var positionY1=0;
var positionX2=0;
var positionY2=0;
var positionX3=0;
var positionY3=0;

var velocity=5;
var velocityY=8;
var velocity1=9;
var velocityY1=3;
var velocity2=3;
var velocityY2=8;
var velocity3=10;
var velocityY3=18;

var ball=document.getElementById('ball');
var ball1=document.getElementById('ball1');
var ball2=document.getElementById('ball2');
var ball3=document.getElementById('ball3');

var reverse=false;
var reverseY=false;
var reverse1=false;
var reverseY1=false;
var reverse2=false;
var reverseY2=false;
var reverse3=false;
var reverseY3=false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  if (reverse===false){
    positionX = positionX+velocity; 
  } else{
    positionX = positionX-velocity;
  }

  if (positionX>Xmax || positionX===Xmin){
    reverse=!reverse;
  }
if (reverseY===false){
    positionY = positionY+velocityY;
   
  } else{
    positionY = positionY-velocityY;
   
  }
  if (positionY>Ymax || positionY===Ymin){
    reverseY=!reverseY;
  }

  // cambios en variables 1
  if (reverse1===false){
    positionX1 = positionX1+velocity1; 
    ball1.style.background='yellow';
  } else{
    positionX1 = positionX1-velocity1;
    ball1.style.background='purple';
  }

  if (positionX1>Xmax || positionX1===Xmin){
    reverse1=!reverse1;

  }
if (reverseY1===false){
    positionY1 = positionY1+velocityY1;
  } else{
    positionY1 = positionY1-velocityY1;
  }
  if (positionY1>Ymax || positionY1===Ymin){
    reverseY1=!reverseY1;
  }
  // fin 1

  // cambios en variables 2
  if (reverse2===false){
    positionX2 = positionX2+velocity2; 
  } else{
    positionX2 = positionX2-velocity2;
  }

  if (positionX2>Xmax || positionX2===Xmin){
    reverse2=!reverse2;
  }
if (reverseY2===false){
    positionY2 = positionY2+velocityY2;
  } else{
    positionY2 = positionY2-velocityY2;
  }
  if (positionY2>Ymax || positionY2===Ymin){
    reverseY2=!reverseY2;
  }
  // fin 2

  // cambios en variables 3
  if (reverse3===false){
    positionX3 = positionX3+velocity3; 
  } else{
    positionX3 = positionX3-velocity3;
  }

  if (positionX3>Xmax || positionX3===Xmin){
    reverse3=!reverse3;
  }
if (reverseY3===false){
    positionY3 = positionY3+velocityY3;
    ball3.style.background='green';
  } else{
    positionY3 = positionY3-velocityY3;
    ball3.style.background='orange';
  }
  if (positionY3>Ymax || positionY3===Ymin){
    reverseY3=!reverseY3;
  }
  // fin 3

  // movimiento
  ball.style.left=positionX+'px';
  ball.style.top=positionY+'px';

  ball1.style.left=positionX1+'px';
  ball1.style.top=positionY1+'px';

  ball2.style.left=positionX2+'px';
  ball2.style.top=positionY2+'px';

  ball3.style.left=positionX3+'px';
  ball3.style.top=positionY3+'px';

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
//console.log("Hola Mundo");
