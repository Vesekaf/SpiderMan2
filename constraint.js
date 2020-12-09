class constraint{

    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA, 
            pointB: pointB, 
            stiffness: 0.05, 
            length: 1.0
          
        }

        this.constraint = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.constraint);
        

    }
    
    display(){

        if(this.constraint.bodyA){
        var pointA = this.constraint.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        pop();
        }
    }

    letgo(){

        this.constraint.bodyA = null;



    }


}