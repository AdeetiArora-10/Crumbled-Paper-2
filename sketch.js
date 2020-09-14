
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball;
var wall1,wall2,wall3;

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options = {   
        restitution:1.0
    }


    paper = new Paper (375,300);
    dustbin = new Dustbin (375,250);


    ground = Bodies.rectangle(200,400,200,20,ground_options);
    ground.shapeColor="orange";
    World.add(world,ground);
 

	wall1 = createSprite (400,310,20,200);
    wall1.shapeColor="red";

    wall2 = createSprite (470,400,130,20);
    wall2.shapeColor="red";

    wall3 = createSprite (530,310,20,200);
    wall3.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  keyPressed() ;

  Paper.display();
  dustbin.display();

  drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW){
    
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100}); }
 }



