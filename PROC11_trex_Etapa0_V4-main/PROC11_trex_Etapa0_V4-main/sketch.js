var floor1 ,floor;
var cactus1 , cactus2 , cactus3 , cactus4 ,cactus5 , cactus6;
var trex ,trex_running;
var floorInvisible;
var gcactus,gnubes;
var play=1
var end=0
var gameState=play;
var nubesitagroup;
var gameoverimage,gameover;
var restart,restartimage;
function preload(){
nube1=loadImage("cloud.png")

 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png"); 
floor1=loadImage("ground2.png")
cactus1=loadImage("obstacle1.png");
cactus2=loadImage("obstacle2.png");
cactus3=loadImage("obstacle3.png");
cactus4=loadImage("obstacle4.png");
cactus5=loadImage("obstacle5.png");
cactus6=loadImage("obstacle6.png");
gameoverimage=loadImage("gameOver.png")
restartimage=loadimage("")
}


function setup(){
  createCanvas(600,200)
  floorInvisible=createSprite(200,190,400,10)
  floorInvisible.visible=false;
  floor=createSprite(200,180,400,20);
  floor.addImage(floor1);
  trex=createSprite(50,160,20,50);
 trex.addAnimation("corriendo",trex_running)
 trex.scale=0.5;
 gcactus=new Group();
 gnubes=new Group();
 nubesitagroup=new Group();
}

function draw(){

  background("white")
  if(gameState===play){
  nubesrandom();
  obstaculos();
  trex.collide(floorInvisible);
  floor.velocityX=-2;
  if (keyDown("space")&&trex.y>=100){trex.velocityY=-10;}
  trex.velocityY=trex.velocityY+0.8
  if (floor.x<0){floor.x=floor.width/2;}
  if(gcactus.isTouching(trex)){ gameState = END; }
 }
  else if(gameState===end){
    floor.x=0 
    gcactus,setVelocityXEach(0);
    gnubes,setVelocityXEach(0);
  }
 drawSprites ();

}

function nubesrandom(){
if(frameCount%60===0){
nubes=createSprite(600,100,40,40);
gnubes.add(nubes);
nubes.velocityX=-3;
nubes.y=Math.round(random(10,60));
nubes.addImage(nube1);
nubes.scale=0.5;
  nubes.lifetime=300;
    
}}
function obstaculos(){
  if(frameCount%60===0){
   var cactus=createSprite(600,165,10,40);
   gcactus.add(cactus);
    cactus.velocityX=-3;
    cactus.scale=0.5;
    cactus.lifetime=300;
    
  var ran=Math.round(random(1,6));
  switch(ran){
    case 1: cactus.addImage(cactus1);
    break;
    case 2: cactus.addImage(cactus2);
    break;
    case 3: cactus.addImage(cactus3);
    break;
    case 4: cactus.addImage(cactus4);
    break;
    case 5: cactus.addImage(cactus5);
    break;
    case 6 : cactus.addImage(cactus6);
    break;
    default: break ;
    
  }
  
  }
  }