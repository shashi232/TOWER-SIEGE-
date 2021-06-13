class Slingshot{
    constructor(){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.sling = constraint.create(options);
        this.pointB = pointB;
        world.add(world,this.sling);
    }
    fly(){
        this.sling. BodyA = null;
    }
   
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
  }
}