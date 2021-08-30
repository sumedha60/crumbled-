
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperobj;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(100,600);
paperobj= new Paper(400,300)
//(1500,650)
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });

  Engine.run(engine);
  Render.run(render);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}

