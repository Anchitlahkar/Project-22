var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	jailWall = loadImage("Untitled.png")
	zombie1Img = loadImage("zombie1.png")
	zombie2Img = loadImage("zombie2.png")
	zombie3Img = loadImage("zombie3.png")
	zombie4Img = loadImage("zombie4.png")
	human1img = loadImage("human 1.png")
	human2img = loadImage("human2.png")
	huouseimg = loadImage("safe.png")
	wallimg = loadImage("wall1.png")
	cityimg = loadImage("city.png")
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-20, width,50);
	groundSprite.shapeColor=color("#A9A9A9")


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	wall=createSprite(width/2-200, height-185, 10,10);
	wall.addImage(jailWall)
	wall.scale=01
	


	human=createSprite(width/2+50, height-20, 10,10);
	human.addImage(human1img)
	human.scale=1.25;
	
	human1=createSprite(width/2+100, height-10, 10,10);
	human1.addImage(human2img)
	human1.scale=1.25;



	
	zombie=createSprite(width/2-450, height-70, 10,10);
	zombie.addImage(zombie4Img)
	zombie.scale=0.25;
	
	zombie1=createSprite(width/2-750, height-70, 10,10);
	zombie1.addImage(zombie3Img)
	zombie1.scale=0.25;
	
	zombie2=createSprite(width/2-550, height-70, 10,10);
	zombie2.addImage(zombie1Img)
	zombie2.scale=0.25;
	
	zombie3=createSprite(width/2-650, height-70, 10,10);
	zombie3.addImage(zombie2Img)
	zombie3.scale=0.25;
	
	zombie3=createSprite(width/2-300, height-90, 10,10);
	zombie3.addImage(zombie4Img)
	zombie3.scale=0.4;



	
	zombie=createSprite(width/2-400, height-80, 10,10);
	zombie.addImage(zombie1Img)
	zombie.scale=0.5;
	
	zombie1=createSprite(width/2-700, height-80, 10,10);
	zombie1.addImage(zombie2Img)
	zombie1.scale=0.5;
	
	zombie2=createSprite(width/2-500, height-80, 10,10);
	zombie2.addImage(zombie3Img)
	zombie2.scale=0.5;
	
	zombie3=createSprite(width/2-600, height-80, 10,10);
	zombie3.addImage(zombie4Img)
	zombie3.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


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
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody, false)
 }
}