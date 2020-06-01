class Paper{
  constructor(x,y,radius){

      var options3={
        isStatic : true,
        restitution : 0.1,
        friction : 1, 
        density : 100 ,
        frictionAir: 1

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