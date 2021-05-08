
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3
var groundBody,paper

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

paper=new Paper(50,250,15)
groundBody=new Ground(width/2,490,width,20)

rect1=new Dustbin(600,470,200,15)
	 rect2=new Dustbin(500,420,15,100)
     rect3=new Dustbin(700,420,15,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundBody.display()
  paper.display()
  rect1.display()
  rect2.display()
  rect3.display()
  drawSprites();
 
  
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-45})
}

}


