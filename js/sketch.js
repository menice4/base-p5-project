
let x = 0;
let y = 0;
let theta = 100;
let inc = 0.05;
let offset = 100; // the amount offset from begening of wave
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
    background(0);
    noStroke();
    let length = 50;
    while (theta < maxAngle + offset) {


        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/15);
        for (i = length; i > 0; i--) {
            y = tan(theta - (i * 0.1)) * amplitude;
            fill(0, 255 -(255/length * i), 0);
            square(x, y + width / 9, 16);
            rotate(.1)
        }

        

        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/10.5);
        for (i = length; i > 0; i--) {
            y = tan(theta - (i * 0.1)) * amplitude;
            fill(0, 255 -(255/length * i), 0);
            circle(x, y + width / 9, 16);
            rotate(.1)
        }

        


    
    

    



     theta += 0.2;
     x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
