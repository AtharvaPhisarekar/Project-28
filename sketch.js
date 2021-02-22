
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var tree;

function preload()
{
	boyImage=loadImage("boy.png");
	treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree = Bodies.rectangle(500,400.500,100);
mango1 = new Mango(650,200,40);
mango2= new Mango(660,340,40);
mango3= new Mango(590,240,40);
mango4= new Mango(630,270,40);
mango5= new Mango(700,380,40);
mango6= new Mango(690,300,40);
mango7= new Mango(550,320,40);
stone = new Stone(180,520,40)
chain = new SlingShot(stone.body,{x:180,y:520})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(treeImage,500,200,300,500);
  image(boyImage,170,500,200,200)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  stone.display();
  chain.display();
  drawSprites();
 
}
function mouseDragged(){
   
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  chain.fly();

}

function detectollision(lstone,lmango){
  console.log("detectollision")
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}