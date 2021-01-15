const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground1, dustbin1, paper1;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world

	paper1 = new paper();
	ground1 = new ground();
	dustbin1 = new dustbin();


	var render = Render.create({
		element: document.body,
	    engine: engine,
	    optons:{
				width:1800,
				height:700,
				wireframes:false}
							   }) 
							   
	Engine.run(engine);						   
}


function draw() {
  
  background("grey");
  rectMode(CENTER);
  paper1.display();
  ground1.display();
  dustbin1.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyDown("up"))
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:650,y:-650});
	}		
}


