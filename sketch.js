const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeimg;
var boy,boyimg

function preload()
{
	treeimg = loadImage("tree.png");	
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    ground = new Ground(600,600,1200,10);
    
	tree = createSprite(950,350,20,200);
    tree.addImage(treeimg);
    tree.scale = 0.4;

    boy = createSprite(140,545,30,120);
	boy.addImage(boyimg);
    boy.scale = 0.09;
    
    stone = new Stone(95,500,10);
    
	mango1 = new Mango(1120,290,10);
	mango2 = new Mango(890,270,10);
	mango3 = new Mango(840,230,10);
	mango4 = new Mango(1050,240,10);
	mango5 = new Mango(780,250,10);
	mango6 = new Mango(900,180,10);
	mango7 = new Mango(980,250,10);
	mango8 = new Mango(970,170,10);
	mango9 = new Mango(1020,170,10);
	mango10 = new Mango(810,310,10);
	mango11 = new Mango(890,330,10);
    mango12 = new Mango(1040,330,10);
    
    launcher = new Launcher(stone.body,{x:95,y:500});
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(204,204,204);

  textSize(25);
  fill(0,0,0);
  text("Press Space to get a second Chance to Play",20,40);

  ground.display();
  tree.display();
  boy.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased() {
    launcher.fly();
  } 

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
 Matter.Body.setStatic(lmango.body,false);
}
}
