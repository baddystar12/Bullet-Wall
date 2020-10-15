var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet =createSprite(50, 200, 10, 50);
  wall = createSprite(1200, thickness, 60, height/2);
  car.velocityX = 0;
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = (80, 80, 80);
  car.shapeColor = "white";
  car.velocityX = speed;
  var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/wall.thickness*wall.thickness* wall.thickness
  isTouching(bullet, wall);
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2&& 
    object2.x - object1.x< object1.width/2+object2.width/2&& 
    object1.y - object2.y< object1.height/2+ object2.height/2&&
    object2.y - object1.y < object1.height/2+ object2.height/2) {
    return true;
    /*if(damage>10){
      car.shapeColor = "red";
    }
    if(damage<=10){
      car.shapeColor = "green";
    }
    car.shapeColor = "royalblue";
    wall.shapeColor = "royalblue";*/
  }
  else{
    return false;
  }
}