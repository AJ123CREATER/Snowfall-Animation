const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var engine,world;

var bg_img;
var cat1,cat2;
var cat;
var snow=[];

function preload()
{
  bg_img=loadImage("snow1.jpg");
  cat1=loadImage("tomOne.png");
  cat2=loadAnimation("tomTwo.png","tomThree.png");
}


function setup() {
  createCanvas(800,600);

  engine= Engine.create()
  world= engine.world;
 imageMode(CENTER)
 cat=createSprite(650,500);
 cat.addImage("sitting",cat1);
 cat.scale=0.1;
 
}

function draw() {

  background(51);
  Engine.update(engine);
  image(bg_img,400,300,800,600);

snow.push(new Snow(random(100,600),0))

  for(var i=0;i<snow.length;i++){
   
    snow[i].display();
    
}

  if(keyDown("w")){

    cat.velocityX=-2;
    
    cat.addAnimation("walking",cat2);
    
    cat.changeAnimation("walking");

  }
  drawSprites();
}


