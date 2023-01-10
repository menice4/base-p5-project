
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05;
let offset = 0; // the amount offset from begening of wave
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 1;
    frequency = windowWidth / 1;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);

}
function draw() {
    background(0,190,255);
    noStroke();
    let length = 10;
    while (theta < maxAngle + offset) {


        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/7);
        for (i = length; i > 0; i--) {
            y = cos(theta - (i * 50)) * amplitude;
            fill(255, 127-(127/length * i) ,0  );
            circle(x, y + height / 10,90 );
            rotate(.9)

        }
        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/3);
        for (i = length; i > 0; i--) {
            y = cos(theta - (i * 50)) * amplitude;
            fill(150, 75 -(75/length * i), 0);
            circle(x, y + height / 5, 85    );
            rotate(.9)
          

        }
        
        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/3);
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 50)) * amplitude;
            fill(150, 150 , 250 -(230/length * i));
            circle(x, y + height / 5, 100
            );
            rotate(.2)

        }
        
        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/3);
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 5)) * amplitude;
            fill(210,215-(255/length * i) ,40 );
            circle(x, y + height / 5, 50);
            rotate(.2)

        }
        
        
        

    

    



     theta += 0.1;
     x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
