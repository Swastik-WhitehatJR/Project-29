//Creator: Swastik Bhattacharjee
//Project Name: GOOGLY
//Email: swastikbhattacharjee.07@gmail.com



/*Matter.JS Engine constants*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
/*--------------------------------------------*/


/*Variables Declaration*/
var description = "This is a game named GOOGLY made by Swastik Bhattacharjee. This is a clone of Angry Birds Game."

var world;
var engine;
var canvas;

var bgMorning;
var bgNight;
var gameState = "HOME";
var logo,logoimg;
var home_bg;
var play, playimg;
var info, infoimg;
var mickey, mickeyimg;
var dabber, dabberimg;
var zero,zeroimg;
var one,oneimg;
var two,twoimg;
var three,threeimg;
var four,fourimg;
var five,fiveimg;
var bg_lv;
var back_btn, back_btn_img;
var rp,rpimg;
var score1 = 0,best1 = 0;
var score2 = 0,best2 = 0;
var score3 = 0,best3 = 0;
var score4 = 0,best4 = 0;
var score5 = 0,best5 = 0;
/*--------------------------*/



/*Load assets*/
function preload() {

  home_bg = loadImage("images/home_bg.jpg")

  bgNight = loadImage("images/Night.png");

  bgMorning = loadImage("images/background.jpg");

  logoimg = loadImage("images/logo.png")

  playimg = loadImage("images/play.png");

  infoimg = loadImage("images/info.png");

  mickeyimg = loadImage("images/mickey.png");

  dabberimg = loadImage("images/dabber.png");

  bg_lv = loadImage("images/bg_level_select.jfif");

  oneimg = loadImage("images/1.png");

  twoimg = loadImage("images/2.png");

  threeimg = loadImage("images/3.png");

  fourimg = loadImage("images/4.png");

  fiveimg = loadImage("images/5.png");

  back_btn_img = loadImage("images/back_btn.png");

  rpimg = loadImage("images/rp.png");

}
/*------------------------------------------------------------*/



/*Setup for the project*/
function setup() {
  canvas = createCanvas(1500, 900);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  // A fix for HiDPI displays///////////////////////////////////////////////////////////////
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = Matter.MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  //////////////////////////////////////////////////////////////////////////////////////////////

  ground = new Ground(500, 890, 2400, 20);

  ground2 = new Ground(990, 300, 260, 10);
  ground3 = new Ground(1400 - 50, 600, 200, 10);
  groundc = new Ground(1400 - 450, 600, 200, 10);
  groundd = new Ground(990 + 300, 300, 260, 10);
  grounde = new Ground(1400 - 250, 600, 200, 10);

  polygon = new Polygon(150, 200, 30, 30);

  launcher = new Slingshot(polygon.body, { x: 350, y: 210 })

  block1 = new Block(1080, 275, 30, 40);
  block2 = new Block(1050, 275, 30, 40);
  block3 = new Block(1020, 275, 30, 40);
  block4 = new Block(990, 275, 30, 40);
  block5 = new Block(960, 275, 30, 40);
  block6 = new Block(930, 275, 30, 40);
  block7 = new Block(900, 275, 30, 40);
  block8 = new Block(930, 235, 30, 40);
  block9 = new Block(960, 235, 30, 40);
  block10 = new Block(990, 235, 30, 40);
  block11 = new Block(1020, 235, 30, 40);
  block12 = new Block(1050, 235, 30, 40);
  block13 = new Block(960, 195, 30, 40);
  block14 = new Block(990, 195, 30, 40);
  block15 = new Block(1020, 195, 30, 40);
  block16 = new Block(990, 155, 30, 40);

  b1 = new Block(1400 - 50, 475, 30, 40);
  b2 = new Block(1400 - 50, 515, 30, 40);
  b3 = new Block(1370 - 50, 515, 30, 40);
  b4 = new Block(1430 - 50, 515, 30, 40);
  b5 = new Block(1400 - 50, 555, 30, 40);
  b6 = new Block(1370 - 50, 555, 30, 40);
  b7 = new Block(1340 - 50, 555, 30, 40);
  b8 = new Block(1430 - 50, 555, 30, 40);
  b9 = new Block(1460 - 50, 555, 30, 40);

  c1 = new Block(1400 - 450, 475, 30, 40);
  c2 = new Block(1400 - 450, 515, 30, 40);
  c3 = new Block(1370 - 450, 515, 30, 40);
  c4 = new Block(1430 - 450, 515, 30, 40);
  c5 = new Block(1400 - 450, 555, 30, 40);
  c6 = new Block(1370 - 450, 555, 30, 40);
  c7 = new Block(1340 - 450, 555, 30, 40);
  c8 = new Block(1430 - 450, 555, 30, 40);
  c9 = new Block(1460 - 450, 555, 30, 40);

  d1 = new Block(1080 + 300, 275, 30, 40);
  d2 = new Block(1050 + 300, 275, 30, 40);
  d3 = new Block(1020 + 300, 275, 30, 40);
  d4 = new Block(990 + 300, 275, 30, 40);
  d5 = new Block(960 + 300, 275, 30, 40);
  d6 = new Block(930 + 300, 275, 30, 40);
  d7 = new Block(900 + 300, 275, 30, 40);
  d8 = new Block(930 + 300, 235, 30, 40);
  d9 = new Block(960 + 300, 235, 30, 40);
  d10 = new Block(990 + 300, 235, 30, 40);
  d11 = new Block(1020 + 300, 235, 30, 40);
  d12 = new Block(1050 + 300, 235, 30, 40);
  d13 = new Block(960 + 300, 195, 30, 40);
  d14 = new Block(990 + 300, 195, 30, 40);
  d15 = new Block(1020 + 300, 195, 30, 40);
  d16 = new Block(990 + 300, 155, 30, 40);

  e1 = new Block(1400 - 250, 475, 30, 40);
  e2 = new Block(1400 - 250, 515, 30, 40);
  e3 = new Block(1370 - 250, 515, 30, 40);
  e4 = new Block(1430 - 250, 515, 30, 40);
  e5 = new Block(1400 - 250, 555, 30, 40);
  e6 = new Block(1370 - 250, 555, 30, 40);
  e7 = new Block(1340 - 250, 555, 30, 40);
  e8 = new Block(1430 - 250, 555, 30, 40);
  e9 = new Block(1460 - 250, 555, 30, 40);

  logo = createSprite(750,150,20,20);
  logo.addImage("logo", logoimg);
  logo.scale = 1.5;
  logo.visible = false;

  play = createSprite(750, 800, 20, 20);
  play.addImage("playimg", playimg)
  play.scale = 0.15;
  play.visible = false;

  info = createSprite(1450, 45, 20, 20);
  info.addImage("infoimg", infoimg)
  info.scale = 0.2;
  info.visible = false;

  mickey = createSprite(450, 780, 20, 20);
  mickey.addImage("mickeyimg", mickeyimg)
  mickey.scale = 0.3;
  mickey.visible = false;

  dabber = createSprite(1050, 770, 20, 20);
  dabber.addImage("dabberimg", dabberimg)
  dabber.scale = 0.4;
  dabber.visible = false;

  one = createSprite(100, 400, 20, 20);
  one.addImage("oneimg", oneimg)
  one.scale = 0.2;
  one.visible = false;

  two = createSprite(400, 402, 20, 20);
  two.addImage("twoimg", twoimg)
  two.scale = 0.085;
  two.visible = false;

  three = createSprite(700, 403, 20, 20);
  three.addImage("threeimg", threeimg)
  three.scale = 0.05;
  three.visible = false;

  four = createSprite(1000, 403, 20, 20);
  four.addImage("fourimg", fourimg)
  four.scale = 0.095;
  four.visible = false;

  five = createSprite(1300, 403, 20, 20);
  five.addImage("fiveimg", fiveimg)
  five.scale = 0.5;
  five.visible = false;

  back_btn = createSprite(37.5, 40, 20, 20);
  back_btn.addImage("back_btn_img", back_btn_img)
  back_btn.scale = 0.2;
  back_btn.visible = false;

  rp = createSprite(1450, 403, 20, 20);
  rp.addImage("rpimg", rpimg)
  rp.scale = 0.05;
  rp.visible = false;

  wallleft = new Wall(0,0,20,3200);
	wallright = new Wall(1500,0,20,3200);
	walltop = new Wall(0,0,3200,20);

}
/*------------------------------------------------------------*/



/*Code to be updated at every frames*/
function draw() {

if(gameState === "HOME"){

  background(home_bg);
  logo.visible = true;
  play.visible = true;
  info.visible = true;
  mickey.visible = true;
  dabber.visible = true;

  one.visible = false;
  two.visible = false;
  three.visible = false;
  four.visible = false;
  five.visible = false;
  back_btn.visible = false;
  rp.visible = false;

  if (mousePressedOver(play)) {
    gameState = "LEVEL_SELECT";
  }

  if (mousePressedOver(info)) {
   alert(description)
   document.location.reload(true);
  }
}

if(gameState === "LEVEL_SELECT"){
  background(bg_lv);

  logo.visible = false;
  play.visible = false;
  info.visible = false;
  mickey.visible = false;
  dabber.visible = false;

  one.visible = true;
  two.visible = true;
  three.visible = true;
  four.visible = true;
  five.visible = true;
  back_btn.visible = true;
  rp.visible = true;

  if (mousePressedOver(back_btn)) {
    gameState = "HOME";
  }

  if (mousePressedOver(rp)) {
    alert("Sorry, but currently we have only 5 levels. In future we will add more. [After you click 'OK', you will be redirected to the home page.]")
    document.location.reload(true);
  }

  if(mousePressedOver(one)){
    gameState = "LEVEL1";
  }

  if(mousePressedOver(two)){
    gameState = "LEVEL2";
  }

  if(mousePressedOver(three)){
    gameState = "LEVEL3";
  }

  if(mousePressedOver(four)){
    gameState = "LEVEL4";
  }

  if(mousePressedOver(five)){
    gameState = "LEVEL5";
  }
}


if(gameState === "LEVEL1")
 {
//background
  background(bgMorning);

  logo.visible = false;
  play.visible = false;
  info.visible = false;
  mickey.visible = false;
  dabber.visible = false;
  one.visible = false;
  two.visible = false;
  three.visible = false;
  four.visible = false;
  five.visible = false;
  rp.visible = false;

  back_btn.visible = true;

  if (mousePressedOver(back_btn)) {
    document.location.reload(true);
  }

//display objects
  ground.display();

  ground2.display();

  polygon.display();

  launcher.display();

  fill(18, 224, 224);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(255, 0, 106);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(51, 255, 0);
  block13.display();
  block14.display();
  block15.display();

  fill(255, 153, 0);
  block16.display();

  //display text
  textSize(20);
  fill("Orange");
  stroke("Green");
  strokeWeight(3);
  text("Press Space Key To Get Another Throw ", 600, 30);
 }

 if(gameState === "LEVEL2")
 {
//background
  background(bgMorning);

  logo.visible = false;
  play.visible = false;
  info.visible = false;
  mickey.visible = false;
  dabber.visible = false;
  one.visible = false;
  two.visible = false;
  three.visible = false;
  four.visible = false;
  five.visible = false;
  rp.visible = false;

  back_btn.visible = true;

  if (mousePressedOver(back_btn)) {
    document.location.reload(true);
  }

//display objects
  ground.display();

  ground2.display();

  ground3.display();

  polygon.display();

  launcher.display();

  fill(18, 224, 224);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(255, 0, 106);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(51, 255, 0);
  block13.display();
  block14.display();
  block15.display();

  fill(255, 153, 0);
  block16.display();


  fill(253, 253, 253);
  b1.display();

  fill(238, 255, 0);
  b2.display();
  b3.display();
  b4.display();


  fill(95, 119, 255);
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();


  //display text
  textSize(20);
  fill("Orange");
  stroke("Green");
  strokeWeight(3);
  text("Press Space Key To Get Another Throw ", 600, 30);
 }

 if(gameState === "LEVEL3"){
  //background
  background(bgMorning);

  logo.visible = false;
  play.visible = false;
  info.visible = false;
  mickey.visible = false;
  dabber.visible = false;
  one.visible = false;
  two.visible = false;
  three.visible = false;
  four.visible = false;
  five.visible = false;
  rp.visible = false;

  back_btn.visible = true;

  if (mousePressedOver(back_btn)) {
    document.location.reload(true);
  }

//display objects
  ground.display();

  ground2.display();

  groundc.display();

  ground3.display();

  polygon.display();

  launcher.display();

  fill(18, 224, 224);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(255, 0, 106);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(51, 255, 0);
  block13.display();
  block14.display();
  block15.display();

  fill(255, 153, 0);
  block16.display();


  fill(255, 153, 102);
  c1.display();

  fill(204, 153, 255);
  c2.display();
  c3.display();
  c4.display();


  fill(153, 255, 204);
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();


  fill(253, 253, 253);
  b1.display();

  fill(238, 255, 0);
  b2.display();
  b3.display();
  b4.display();


  fill(95, 119, 255);
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  //display text
  textSize(20);
  fill("Orange");
  stroke("Green");
  strokeWeight(3);
  text("Press Space Key To Get Another Throw ", 600, 30);
 }


 if(gameState === "LEVEL4"){
  //background
  background(bgMorning);

  logo.visible = false;
  play.visible = false;
  info.visible = false;
  mickey.visible = false;
  dabber.visible = false;
  one.visible = false;
  two.visible = false;
  three.visible = false;
  four.visible = false;
  five.visible = false;
  rp.visible = false;

  back_btn.visible = true;

  if (mousePressedOver(back_btn)) {
    document.location.reload(true);
  }

//display objects
  ground.display();

  ground2.display();

  groundc.display();

  ground3.display();

  groundd.display();

  polygon.display();

  launcher.display();


  fill(18, 224, 224);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(255, 0, 106);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(51, 255, 0);
  block13.display();
  block14.display();
  block15.display();

  fill(255, 153, 0);
  block16.display();

  fill(255, 255, 0);
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();


  fill(0, 255, 0);
  d8.display();
  d9.display();
  d10.display();
  d11.display();
  d12.display();

  fill(255, 0, 255);
  d13.display();
  d14.display();
  d15.display();

  fill(133, 163, 224);
  d16.display();

  fill(255, 153, 102);
  c1.display();

  fill(204, 153, 255);
  c2.display();
  c3.display();
  c4.display();


  fill(153, 255, 204);
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();


  fill(253, 253, 253);
  b1.display();

  fill(238, 255, 0);
  b2.display();
  b3.display();
  b4.display();


  fill(95, 119, 255);
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  //display text
  textSize(20);
  fill("Orange");
  stroke("Green");
  strokeWeight(3);
  text("Press Space Key To Get Another Throw ", 600, 30);
 }

 if(gameState === "LEVEL5"){
  //background
  background(bgMorning);

  logo.visible = false;
  play.visible = false;
  info.visible = false;
  mickey.visible = false;
  dabber.visible = false;
  one.visible = false;
  two.visible = false;
  three.visible = false;
  four.visible = false;
  five.visible = false;
  rp.visible = false;

  back_btn.visible = true;

  if (mousePressedOver(back_btn)) {
    document.location.reload(true);
  }

//display objects
  ground.display();

  ground2.display();

  groundc.display();

  ground3.display();

  grounde.display();

  groundd.display();

  polygon.display();

  launcher.display();


  fill(18, 224, 224);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(255, 0, 106);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(51, 255, 0);
  block13.display();
  block14.display();
  block15.display();

  fill(255, 153, 0);
  block16.display();

  fill(255, 255, 0);
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();


  fill(0, 255, 0);
  d8.display();
  d9.display();
  d10.display();
  d11.display();
  d12.display();

  fill(255, 0, 255);
  d13.display();
  d14.display();
  d15.display();

  fill(133, 163, 224);
  d16.display();

  fill(255, 153, 102);
  c1.display();

  fill(204, 153, 255);
  c2.display();
  c3.display();
  c4.display();


  fill(153, 255, 204);
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();


  fill(253, 253, 253);
  b1.display();

  fill(238, 255, 0);
  b2.display();
  b3.display();
  b4.display();


  fill(95, 119, 255);
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  fill(255, 153, 102);
  e1.display();

  fill(204, 153, 255);
  e2.display();
  e3.display();
  e4.display();


  fill(153, 255, 204);
  e5.display();
  e6.display();
  e7.display();
  e8.display();
  e9.display();

  //display text
  textSize(20);
  fill("Orange");
  stroke("Green");
  strokeWeight(3);
  text("Press Space Key To Get Another Throw ", 600, 30);
 }

  drawSprites();
}


/*------------------------------------------------------------*/



/*Checks that mouse is dragged or not*/
function mouseDragged() {
  //if(launcher.bodyA)
  //{
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })    
  //}
}
/*------------------------------------------------------------*/



/*Checks that mouse is released or not after dragging*/
function mouseReleased() {
  setTimeout(() => {
    launcher.fly()
  }, 30);

}
/*------------------------------------------------------------*/



/*Checks that a certain key is pressed or not*/
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 235, y: 420 })
    launcher.attach(polygon.body);

  }

}
/*------------------------------------------------------------*/



/*Makes the cursor grab*/
function cursor_Grab()
{
  cursor('grab');
}
/*------------------------------------------------------------*/