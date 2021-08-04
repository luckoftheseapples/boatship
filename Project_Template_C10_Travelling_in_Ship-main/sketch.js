var sea;
var seaAnim;
var ship;
var shipAnim;

function preload(){
 shipAnim = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
 seaAnim = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
sea = createSprite(200,200,400,400);
 ship = createSprite(150,230,100,100);
 ship.scale = 0.3;
 sea.addAnimation("seaAnim", seaAnim);
 ship.addAnimation("shipAnim", shipAnim);
 
}

function draw() {
  background("blue");
  drawSprites();
}