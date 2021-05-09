class Slingshot{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly()  {
        this.sling.bodyA = null;

    }

    attach(body)  {
        this.sling.bodyA = body;

    }
    display(){
        if(this.sling.bodyA)  {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(2,45,5)
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}