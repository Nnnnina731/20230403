

let points = [[1,0],[2,-1],[3,-1],[4,0],[4,-2],[6,-2],[7,-1],[8,-1],[9,-2],
[9,-3],[8,-2],[7,-2],[7,-3],[8,-4],[8,-5],[7,-4],[7,-5],[6,-4],[4,-4],[3,-5],
[2,-5],[3,-4],[2,-4],[1,-5],[0,-5],[1,-4],[2,-3],[1,-2],[1,0]];
let polygon = [];

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  for(let i =0; i<points.length;i++){
    let p = createVector(points[i][0],points[i][1]);
    p.mult(20);
    polygon.push(p);
  }
}


function draw() {
 

  background(255);
  translate(width/3,height/2);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("cat", -10, 0);

  let mouseXpos = mouseX - width/3;
  let mouseYpos =height/2 -mouseY;
  let scaleAmt = map(abs(mouseXpos),0,width/3,0.2,1);
  scaleAmt = constrain(scaleAmt,0.2,1);
  let interpX = lerp(0,mouseXpos,0.05);
  let interpY = lerp(0,mouseYpos,0.05);
  translate(interpX,interpY);

  for(let i = 1; i<=5 ;i++){
    push();
    scale(scaleAmt*i/6);
    scale(1,-1);
    strokeWeight(3);

    for(let j=0;j<polygon.length-1;j++){
      let from=color(255,0,0);
      let to=color(0,0,255);
      stroke(lerpColor(from,to,j/polygon.length));
      line(polygon[j].x,polygon[j].y,polygon[j+1].x,polygon[j+1].y);
    }
    pop();
  }


  
}
