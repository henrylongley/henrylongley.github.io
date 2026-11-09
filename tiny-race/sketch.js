let racerXs = [30, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;

// Create the canvas
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  // Show racer count / controls
  text("Racers: " + racerXs.length, 10, 15);
  text("A = add racer   D = remove racer", 10, 27)

  // Draw finish line
  line(finishX, 0, finishX, height);

  // Racer loop
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;

    // Move each racer
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }

    //Draw each racer
    circle(racerXs[i], y, 24);
  }
}

//add n remove racers
function keyPressed() {
  //add
  if (key === "a") {
    racerXs.push(30);
  }
//remove
  if (key === "d") {
    //list check
    if (racerXs.length > 0) {
      racerXs.pop();
    }
  }
}

