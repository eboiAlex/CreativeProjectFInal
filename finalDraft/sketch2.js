let squareColor = 0; 
function preload(){
  img =     loadImage('https://as1.ftcdn.net/v2/jpg/01/32/10/20/1000_F_132102074_Vb6V1m6cUSTD4Nmkhg1HSaSUsFG5KQpg.jpg')
}
//change colors on mouse click!
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
background(img); 
  fill(squareColor);
  rect(199, 260, 239, 150);
  if (mouseIsPressed) {
  squareColor = color(random (255), random(255), random(255)); 
  }
}