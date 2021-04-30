
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,paper1;
var dustbin_img;

function preload()
{
  dustbin_img=loadImage("dustbingreen.png")

}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new paper(150,320,70);
  dustbin1=new dustbin(800,325,15,220);
  dustbin2=new dustbin(890,390,180,15);
  dustbin3=new dustbin(980,325,15,220);
  ground1=new ground(600,392.5,1200,15);

  
}


function draw() {
  
  background("lightgrey");

  Engine.update(engine);
  paper1.display();
 image(dustbin_img,800,200,180,190);

  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  
  ground1.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:920,y:-920});
  }
}


