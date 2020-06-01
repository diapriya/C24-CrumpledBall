var dustbin1,dustbin2,dustbin3 , boxB,topWall ;
var paper,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,650,width,10);
	paper = new Paper(110,325,20);

	dustbin1 = new Dustbin(550,595,15,100);
	dustbin2 = new Dustbin(632,638,150,15);
  dustbin3 = new Dustbin(710,595,15,100);
 
	Engine.run(engine);  

}

function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display()
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  drawSprites();

  
  
}

function keyPressed() {
if (keyCode === UP_ARROW){
 
  Matter.Body.applyForce(paper.body,{x: 0.04, y: 0.06}, {x: 0.04, y: -0.06});

  
 }

}

 

