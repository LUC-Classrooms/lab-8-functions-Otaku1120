function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 159, 100);
  myShape(50,150,107,50)
  myShape(160,50,230,189,100)
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, w, h) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(.69);
  fill("pink")
  ellipse(x, y, w, h); // simple ellipse at the translated origin (0,0)//explain why 0,0
  fill("green")
  rect(x, y - h/2, w, h);
  pop(); // dispose of the layer
}
