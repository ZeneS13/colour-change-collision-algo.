
var movingRect,fixRect;


function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 20, 100);
  movingRect=createSprite(600,200,100,20);
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
movingRect.shapeColor="green";
fixRect.shapeColor="blue";

if(movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2
  && fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2
  && fixRect.y-movingRect.y<=movingRect.height/2+fixRect.height/2 
  && movingRect.y-fixRect.y<=movingRect.height/2+fixRect.height/2){
movingRect.shapeColor="blue";
fixRect.shapeColor="green";

}
else{
  movingRect.shapeColor="green";
  fixRect.shapeColor="blue"; 
}

  drawSprites();
}