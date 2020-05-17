var bg;
var tunnel;
function preload() 
{
  player_img=loadAnimation("image/run1.png","image/run2.png","image/run3.png");
  bg=loadImage("images/Background.png");
  tunnel =loadImage("images/tunnel2.png");
  tree=loadImage("images/Tile_34.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(100,displayHeight-300);
  player.addAnimation("run",player_img);
  player.scale=0.5;
}
function mousePressed(){
  spawnBullets();
}
function draw() {
  background(bg);
  image(tree,100,250);
  image(tunnel,displayWidth-500,100,200,600)
  drawSprites();
}
function spawnBullets()
 {
   console.log("hellow")
   var bullet =createSprite(player.x,player.y,50,50);
   bullet.shapeColor="red";
   bullet.velocityX=2;
   
 }
 function keyPressed() {
  if (keyCode === 32) 
  { 
    spawnBullets(); 
  }
 }