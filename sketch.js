var car,wall;
var speed,weight;
var deformation;







function setup() {
  createCanvas(1300,600);

car=createSprite(50,50,20,20);

wall=createSprite(900,50,10,60);

speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background("black");  
  
  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)){
    speed=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(225,0,0);
    }
    if(deformation<180 && deformation>100){

      car.shapeColor=color(230,230,0);
    }
    if(deformation>100){
      car.shapeColor=color(0,225,0);

    }

  }
  
  
  
  

  drawSprites();
}