class Ground{

    constructor(x,y,width,height){
     
        var options2={
            isStatic : true,
            restitution : 0.9,
            friction : 0.5
        }

        this.body = Bodies.rectangle(x, y, width, height, {restitution:0.9, isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }

}

