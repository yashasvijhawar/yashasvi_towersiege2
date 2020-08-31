const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, ground;
var box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12;
var box13;

var slingshot;

var stand;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  fill("brown");
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  stand = Bodies.rectangle(330,250,300,15,options);
  World.add(world,stand);


  box1 = new Box(170,200);
  box2 = new Box(210,200);
  box3 = new Box(250,200);
  box4 = new Box(290,200);
  box5 = new Box(330,200);
  box6 = new Box(370,200);


  box7 = new Box(210,150);
  box8 = new Box(250,150);
  box9 = new Box(290,150);
  box10 = new Box(330,150);

  fill("yellow");
  box11 = new Box(250,100);
  box12= new Box(290,100);

  box13 = new Box(270,50);

  ball = Bodies.circle(80,100,200);
  World.add(world,ball);
  slingshot = new SlingShot(this.ball,{x:80, y:100});
  Engine.run(engine);
}

function draw() {
  background(0);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  slingshot.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  rect(stand.position.x,stand.position.y,300,15);

  ellipse(ball.position.x,ball.position.y,20,20);
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }  
}