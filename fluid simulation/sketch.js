let fluid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fluid = new Fluid(0.1, 0, 0);
}

function mouseDragged(){
  fluid.addDensity(parseInt(mouseX/SCALE),parseInt(mouseY/SCALE),8000);
  let sx=(mouseX-pmouseX);
  let sy=(mouseY-pmouseY);
  fluid.addVelocity(parseInt(mouseX/SCALE),parseInt(mouseY/SCALE),sx,sy)
}

function draw() {
  stroke(51);
  strokeWeight(2);
  fluid.step();
  fluid.renderD();
}
