
    let x = 0;
    let y = 0;
    let theta = 0;
    let inc = 0.05;
    let offset = 0; // the amount offset from begening of wave
    let amplitude; 
    let frequency; 
    let maxAngle; 

function setup() {
     amplitude = windowHeight/2.5;
     frequency = windowWidth/8;
     maxAngle = (windowWidth/frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
   
}
function draw() {
    background(0);
    noStroke();
    while (theta < maxAngle + offset ) {
       //sin
       
        fill(0, 255, 0)
        y  = sin(theta) * amplitude; 
        ellipse(x, y + height/2, 16);
        theta += 0.2;
        
        fill(0, 255, 0)
        y  = sin(theta) * amplitude; 
        ellipse(x, y + height/2, 16);
        theta += 0.2;
        //cosine

        fill(0, 255, 0)
        y  = cos(theta) * amplitude; 
        ellipse(x, y + height/2, 16);
        theta += 0.2;
       
        fill(0, 255,0 )
        y  = cos(theta) * amplitude; 
        ellipse(x, y + height/2, 16);
        theta += 0.2;

        fill(0, 255,0 )
        y  = tan(theta) * amplitude; 
        ellipse(x, y + height/2, 16);
        theta += 0.2;

        fill(0, 255,0 )
        y  = tan(theta) * amplitude; 
        ellipse(x, y + height/2, 16);
        theta += 0.2;


        x = ((theta-offset)/maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset; 
}
