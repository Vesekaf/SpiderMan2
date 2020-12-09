const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var spiderman;
var bgImg;
var web;
var ground;
var buildingWall;

var robber;

var hp;


function preload(){

  bgImg = loadImage("city.jpg");



}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  spiderman = new Spiderman(displayWidth/2-500, displayHeight/2, 100, 100); 

  ground = new Ground(displayWidth/2, displayHeight, displayWidth, 20);

  buildingWall = new building(displayWidth/2, displayHeight/2, 600, 800);

  robber = new thug(100, 100, 150, 100);
 

  
}

function draw() {
  background(bgImg);

  Engine.update(engine);
  spiderman.display();
  ground.display();
  
  if(keyCode === 32){
          
    web = new constraint(spiderman.body, {x: spiderman.body.position.x + 25, y: 75});
    web.display();
    
    
  }

  if(isTouching(spiderman.body, robber.body) && keyCode === 71 ){

    console.log("asdf");
    World.remove(world, robber);
  }
  
  //   
  buildingWall.display();
  robber.display();

  if(frameCount % 80 === 0){

    
    
  }

  
  
  
  drawSprites();

  
}

function keyPressed(){
  if(keyCode === 37){
            
      Matter.Body.setVelocity(spiderman.body, {x: -1, y:0});
      
  }

  if(keyCode === 39){
            
    Matter.Body.setVelocity(spiderman.body, {x: 1, y:0});
    
}
if(keyWentUp("r")){

  
  web.letgo();

}

}

function mouseDragged(){

  Matter.Body.setPosition(spiderman.body, {x: mouseX, y: mouseY});


}
function spawnBuildings(){

      



}


function isTouching(object1, object2){



  if(object1.position.x - object2.position.x <= object1.width/2 + object2.width/2 &&
    object2.position.x - object1.position.x <= object2.width/2 + object1.width/2 &&
    object1.position.y - object2.position.y <= object1.height/2 + object2.height/2 && 
    object2.position.y - object1.position.y <= object2.height/2 +  object1.height/2){
    
    return true;

  }

  else{

    return false;

  }
}