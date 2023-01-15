// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = random(0,width + 10 * PI);
        this.y = random(0,height + 10 *PI);
        this.r = random(1,8);
        this.xSpeed = random(-3,3);
        this.ySpeed = random(-2,2.5);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        fill('rgba(242,164,59,0.5)');
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<300) {
            stroke('rgba(255, 140, 44,0.1)');
            line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }
    
    // an array to add multiple particles
    let particles = [];
    
    function setup() {
      createCanvas(windowWidth, windowHeight);
      for(let i = 1;i<width/6;i++){
        particles.push(new Particle());
      }
    }
    
    function draw() {
      background('#0f0f0f');
      for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    }
    


