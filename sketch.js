
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject ;	
var world;
var gameState=0;

function setup() {
	createCanvas(displayWidth-20,displayHeight-100);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1000,640);
	paperObject=new paper(200,658,40);
	
	camera.position.x = displayWidth/2; 
	camera.position.y = paperObject.y
	groundObject=new ground(width/2,660,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 if(gameState === 0){
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-85});
    gameState=1;
	  }
	}
}
if(gameState === 1){
	
	textSize(8);
	fill("red");
	text("you win",200,200);
}
}





