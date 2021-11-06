

//LV 4 :
var astroidGroup;
var buletsGroup;
var rocketBody;
var state = "play";
var score = 0;
var buttonRe;

//LV 5 : 


function preload(){
    rocketIMG = loadImage("Images/rocket.png");
    
    astroidIMG = loadImage("Images/astroid.png");
    bulletIMG = loadImage("Images/bullet.png");

}



function setup() {
  createCanvas(600, 600);
  // creating bow to shoot arrow
    rocketBody = createSprite(100,windowHeight/2,50,50);
    rocketBody.addImage("recket", rocketIMG);
    rocketBody.scale = 1;
    rocketBody.visible = false;
  
    astroidGroup = new Group();
    buletsGroup = new Group();
  
    score = 0  
}

function draw() {
    background("black");
  
  rocketBody.y = World.mouseY
  rocketBody.visible = true;
  
  if (keyDown("space")) {
    createBullet();
  }
  
  
  if (World.frameCount % 100 == 0) {
    astroid();
  }
    if(buletsGroup.isTouching(astroidGroup)){
    astroidGroup.destroyEach();
    score = score + 1;
    buletGroup.destroyEach();
   }
     
  
  drawSprites();
    text("Score: "+ score, 500,50);
}


function astroid() {
  var obstacle = createSprite(0,Math.round(random(20, 370)), 10, 10);
  obstacle.addImage(astroidIMG);
  obstacle.velocityX = 3;
  obstacle.lifetime = 150;
  obstacle.scale = 0.1;
  
  
  astroidGroup.add(obstacle);
  return obstacle;

}

 function createBullet() {
  var bulet= createSprite(100, 100, 60, 10);
  bulet.addImage(bulletIMG);
  bulet.x = 360;
  bulet.y=rocketBody.y;
  bulet.velocityX = -4;
  bulet.lifetime = 100;
  bulet.scale = 0.3;
   
  buletGroup.add(bulet);
  return bulet;
   
}
