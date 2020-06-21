class Paper{
  constructor(x,y,radius){

      var options3={
        isStatic : false,
        restitution : 0.1,
        friction : 1, 
        density : 0.5

      }

      this.body = Bodies.circle(x,y,radius, options3);
      this.radius = radius;
      World.add(world,this.body);
  }

  display(){

    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x,pos.y,this.radius);
  }
}