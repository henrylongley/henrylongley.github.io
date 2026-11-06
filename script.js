let planeY = 200;
let obstacleX = 350;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 139);
  
  planeY = planeY + 1;
  
  if (keyIsDown(UP_ARROW)) {
  planeY = planeY - 3
}
  
  fill("white")
  rect(100, planeY, 40, 20)
  triangle(140, planeY, 140, planeY+20, 150, planeY+10)
  
  fill("red")
  triangle(100, planeY, 140, planeY, 80, planeY-5)
  triangle(100, planeY+20, 140, planeY+20, 80, planeY+25)

  obstacleX = obstacleX - 2;
if (obstacleX < -300) {
  obstacleX = 400;
}
  
  fill("purple");
  
  for (let i = 0; i < 3; i++) {
  let pipeX = obstacleX + i * 150;

  rect(pipeX, 0, 40, 170 + i * 20);
rect(pipeX, 230 + i * 20, 40, 170);
}

  if (planeY > 380 || planeY < 10) {
    planeY = 200;
    obstacleX = 350;
  }

}
