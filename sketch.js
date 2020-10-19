var bullet, wall;
var thickness;
var bulletWeight, bulletSpeed;

function setup() {
  createCanvas(1600,400);
  bulletSpeed = random(223, 321);
  bulletWeight = random(30, 52);
  thickness = random(22, 83);
  bullet =createSprite(50, 60, 10, 50);
  wall = createSprite(1200, 60, thickness, height/2);
  bullet.velocityX = 0;
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = (80, 80, 80);
  bullet.shapeColor = "purple";
  bullet.velocityX = bulletSpeed;
   if(isTouching(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<=10){
      wall.shapeColor = "green";
    }
  };
  drawSprites();
}

function isTouching(lbullet, lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}
