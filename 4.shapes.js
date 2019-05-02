function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // 1 - creates a circles at top
    // ellipse(20, 20, 10);
    // 2 -creates a circle at center
    // fill(250);
    // ellipse(windowWidth / 2, windowHeight / 2, 100);
    // 3
    strokeWeight(10);
    stroke(250);
    ellipse(windowWidth / 2, windowHeight / 2, 100);
    noStroke();
}
