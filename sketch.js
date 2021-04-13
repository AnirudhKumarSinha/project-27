
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 
	//Create the Bodies Here.
  wall = new Wall(width/2-100,100,400,30)

  //creating the balls
  bob1=new Ball(530,400);
  bob2=new Ball(640,450);
  bob3=new Ball(680,400);
  bob4=new Ball(500,400);
  bob5=new Ball(720,400)

  
	//constraining objects.
  slingshot1=new Slingshot(bob1.body,{x:575,y:110})
  slingshot2 = new Slingshot(bob2.body,{x:655,y:110});
  slingshot3= new Slingshot(bob3.body,{x:730,y:110});
  slingshot4=new Slingshot(bob4.body,{x:495,y:110});
  slingshot5=new Slingshot(bob5.body,{x:805,y:110});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  
  

 
  

  //displaying the objects of cradle.
  wall.display();  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  slingshot1.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();




}

function keyPressed()
 { 
   if (keyCode === UP_ARROW) 
  { 
    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-250,y:110});
    
  } 
  
 }

