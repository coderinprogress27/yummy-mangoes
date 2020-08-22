
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone;
var boy;
function preload()
{
var stone = new Bonk(25,700,20,20)
var stone = loadImage("stone.png") 
var boy = createSprite(30,750,50,50)
var boy = loadImage("boy.png")
}
function setup (){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}