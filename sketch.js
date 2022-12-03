
const ROW = 700; 
const COL = 400;

function setup() {
    createCanvas(ROW, COL);    
  }
  
function draw() {
    background(200);
    // sprite(1,1);
    
  }
  



function speedController(x,y,direction){
    const SPEED = 10; 
    switch(direction){
        case 'RIGHT':
            return [x+SPEED,y];
        
        case 'LEFT':
            return [x-SPEED,y]
        
        case 'UP': 
            return [x,y+SPEED]
        
        case 'DOWN':
            return [x,y+SPEED] 
    }
    
}  


let maze = function(x,y){
    const spacing = 10; 
    this.row = y;
    this.col = x;    
  }
  
  
let sprite = function(x,y){
    this.x = x;
    this.y = y;
    diameter = 20
    stroke(50);
    fill(100)
    ellipse(x+10,y+10,diameter,diameter)
  }