//Set global variable that would contain the position, velocity and the html element "ball"
var position=100;
var positionX=0;
var positionY=0;
var velocity=5;
var velocityY=8;
var ball=document.getElementById('ball');
var reverse=false;
var reverseY=false;
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

  ball.style.left=positionX+'px';
  ball.style.top=positionY+'px';
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
