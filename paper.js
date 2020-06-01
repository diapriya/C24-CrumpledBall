class Paper{
  constructor(x,y,radius){

      var options3={
        isStatic : true,
        restitution : 0.9,
        friction : 0.5,
        density : 1.2 

      }

      this.body = Bodies.circle(x,y,radius,[options3]);
      this.radius;
      World.add(world,this.body);
  }

  display(){

    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x,pos.y,20);

  }
}