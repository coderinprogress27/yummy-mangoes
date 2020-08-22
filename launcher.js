class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }
    attach(bodyA){
        this.launch.bodyA=bodyA
    }

    display(){
        
        
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            push ()
            stroke(48,22,8)
            if(pointA.x<220)
            {

            
                strokeWeight(7.0);
            
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image (this.launch3,pointA.x-30,pointA.y-10,15,30)
            }
            else{
                strokeWeight(7.0);
            
                line(pointA.x+25, pointA.y, pointB.x+10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y+3);
                image (this.launch3,pointA.x+25,pointA.y-10,15,30)
            }
        }
    }
}
