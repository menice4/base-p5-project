
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05;
let offset = 0; // the amount offset from begening of wave
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 2;
    frequency = windowWidth / 5;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);

}
function draw() {
    background(0);
    noStroke();
    let length = 22;
    while (theta < maxAngle + offset) {

        amplitude =  (( theta-offset)/maxAngle) * (windowHeight/2);
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 0.08)) * amplitude;
            fill(0, 255 -(255/length * i), 0);
            square(x, y + height / 2, 16);
        }

        for (i = length; i > 0; i--) {
                y = sin(theta - (i * 0.05)) * amplitude;
                fill(0, 0, 255 -(255/length * i));
                square(x, y + height / 2, 16);
        }
        
        for (i = length; i > 0; i--) {
            y = sin(theta - (i *0.03)) * amplitude;
            fill(255 -(255/length * i), 0, 0);
            square(x, y + height / 2, 16);
    }
    
    

    



     theta += 0.2;
     x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
