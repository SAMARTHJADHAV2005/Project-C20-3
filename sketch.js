var car , wall;
var speed , weight ; 

function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite(1500, 200, 60, 100);

 car.velocityX = speed ;

 speed = random(25,31);
 weight = random(400,1500);
}

function draw() {
  background("black");      

if(wall.x - car.x < (car.width + wall.width)/2);
{
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed* speed/22509 ;
  if(deformation>180)
  {
    car.shapeColour = color("yellow");
    wall.shapeColour = color("white");
  } 
  if(deformation<180 && deformation>100)
  {
    car.shapeColour = color("green");
    wall.shapeColour = color("white");
  }
  if(deformation<100)
  {
    car.shapeColour = color("red");
    wall.shapeColour = color("white");
  }
}
  
  drawSprites();
}