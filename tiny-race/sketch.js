let racerXs = [30, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  text("Racers: " + racerXs.length, 10, 15);
  text("A = add racer   D = remove racer", 10, 27)
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    circle(racerXs[i], y, 24);
  }
}

function keyPressed() {
  if (key === "a") {
    racerXs.push(30);
  }

  if (key === "d") {
    if (racerXs.length > 0) {
      racerXs.pop();
    }
  }
}

