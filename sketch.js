const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var flakes = [];
var backgroundImg
function preload() {
backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  
  if(frameCount%20===0){
    flakes.push(new Snow())
  }
  for (var k=0; k < flakes.length; k++){
    flakes [k].display();
  }
  drawSprites();
}