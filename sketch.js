const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1280,710);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(550,420,20,30);
  box2 = new YellowBox(570,420,20,30);
  box3 = new GreenBox(590,420,20,30);
  box4 = new RedBox(610,420,20,30);
  box5 = new GreenBox(630,420,20,30);
  box6 = new YellowBox(650,420,20,30);

  box7 = new RedBox(560,390,20,30);
  box8 = new YellowBox(580,390,20,30);
  box9 = new BlueBox(600,390,20,30);
  box10 = new GreenBox(620,390,20,30);
  box11 = new RedBox(640,390,20,30);

  box12 = new YellowBox(570,370,20,30);
  box13 = new BlueBox(590,370,20,30);
  box14 = new RedBox(610,370,20,30);
  box15 = new GreenBox(630,370,20,30);

  box16 = new YellowBox(580,340,20,30);
  box17 = new RedBox(600,340,20,30);
  box18 = new GreenBox(620,340,20,30);

  box19 = new BlueBox(590,310,20,30);
  box20 = new RedBox(610,310,20,30);

  box21 = new GreenBox(600,280,20,30);

  box22 = new GreenBox(900,325,20,30);
  box23 = new BlueBox(920,325,20,30);
  box24 = new YellowBox(940,325,20,30);
  box25 = new RedBox(960,325,20,30);
  box26 = new GreenBox(980,325,20,30);
  box27 = new YellowBox(1000,325,20,30);

  box28 = new BlueBox(910,295,20,30);
  box29 = new RedBox(930,295,20,30);
  box30 = new YellowBox(950,295,20,30);
  box31 = new GreenBox(970,295,20,30);
  box32 = new RedBox(990,295,20,30);

  box33 = new YellowBox(920,265,20,30);
  box34 = new BlueBox(940,265,20,30);
  box35 = new RedBox(960,265,20,30);
  box36 = new GreenBox(980,265,20,30);
  
  box37 = new YellowBox(930,235,20,30);
  box38 = new BlueBox(950,235,20,30);
  box39 = new GreenBox(970,235,20,30);

  box40 = new RedBox(930,205,20,30);
  box41 = new BlueBox(970,205,20,30);

  box42 = new GreenBox(950,175,20,30);
 
  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:500});

  ground = new Platform(640,700,1280,10);

  groundflying = new Platform(950,350,300,10);
  groundflying2 = new Platform(600,500,350,10);
  
}

function draw() {
  background(178,189,287);
  textSize(20);
  text("PRESS 'SPACE' TO GET THE BALL AGAIN",800,600)
  Engine.update(engine);  

  debug:true;

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
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();

  box40.display();
  box41.display();

  box42.display();

  ball.display();
  spring.display();
  ground.display();
  groundflying.display();
  groundflying2.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }
}