function setup() {
    createCanvas(600, 600);
  background('white');
  }
  
  function draw() {
    
   stroke('red');
    fill('yellow');
   
    // console.log (mouseIsPressed);  
   
    if(mouseIsPressed) {
    rect (mouseX, mouseY, 20, 35);           
     }
  } 