class plinko{
    constructor(x,y,radius) {
        var options ={
            isStatic: true
        }

        this.body = Bodies.circle(x,y,options);
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle)
        //imageMode(CENTER)
        ellipseMode(RADIUS);
        ellipse(0,0);
        pop();
    }
};