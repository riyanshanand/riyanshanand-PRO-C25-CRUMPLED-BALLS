class Paper {
    constructor(x, y, radius) {
      var options = {
        restitution :0.3,
        friction:0,
        density:1.2

      }
      this.body = Bodies.circle(x, y, (radius-4)/2, options);
      this.radius = radius;
	  this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("purple");
      image(this.image, 0, 0, this.radius=-60, this.radius=-60);
      pop();
    }
  };