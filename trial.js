var font;
var pointSize=120;

function preload() {
   font = loadFont("./data/Pingsan.ttf"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  fill("pink");
  background(255,182,193);
}
function draw() {
  stroke(255);
  strokeWeight(10);
  textFont(font);
  textSize(96);
  ("womp womp", mouseX, mouseY);
}

function keyTyped(){
  text(key, mouseX, mouseY);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    pointSize-=10;
  }
  if(keyCode === RIGHT_ARROW){
    pointSize+=10;
  }
  textSize(pointSize);
}
