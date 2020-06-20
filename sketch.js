const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,object;
var ground,ball,log6,chain;
var box1,box2,box3,box4,box5
var pig1,log1,pig2,log2,log3,log4,bird1,backgroundImg,constrainedLog
function preload(){
  backgroundImg=loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  log6=new Log(230,180,80,PI/2);
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground=new Ground(600,height,1200,20);
  pig1=new Pig(810,350)
  pig2=new Pig(810,220);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  box5=new Box(810,160,70,70);
  log2=new Log(810,180,300,PI/2);
  log1=new Log(810,260,300,PI/2);
  log3=new Log(760,120,150,PI/7);
  log4=new Log(870,120,150,-PI/7);
  bird1=new Bird(100,100)
  chain=new Chain(bird1.body,log6.body);
}
function draw() {
  background(backgroundImg);
  Engine.update(engine);
  log6.display()
  chain.display()
 
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  box5.display();
  pig2.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.display();
  console.log(log1.body.angle);
  //console.log(box2.body.position.x);
  //console.log(box2.body.position.y);
  //console.log(box2.body.angle);
  ground.display();
}