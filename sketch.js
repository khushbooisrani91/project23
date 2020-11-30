var helicopterIMG, helicopterSprite, packageSprite,packageIMG,leftside,rightside,middle;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftside = createSprite(240,610,20,100);
	leftside.shapeColor=color("red");

	middle = createSprite(350,650,200,20);
	middle.shapeColor=color("red");

	rightside = createSprite(440,610,20,100);
	rightside.shapeColor=color("red");
	
	packageSprite=createSprite(width/2, 130, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	leftside = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, leftside);

	middle = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, middle);

	rightside = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, rightside);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



