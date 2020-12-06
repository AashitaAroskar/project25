class BaseClass{
    constructor(x,y,radius) {
        var options={
			restitution:0.3,
			friction:0.5,
            density:1.2
        }

    this.body=Bodies.circle(this.x, this.y, this.r/2, options);
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("base.png");
    World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
        pop();
    }
}