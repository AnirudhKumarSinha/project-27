class Slingshot { 
    constructor(bodyA,pointB)
    { 
    var options= { bodyA:bodyA,
         pointB:pointB, 
         stiffness:0.04,
          length:400
     } 
     this.pointB=pointB
this.slingshot = Constraint.create(options)
World.add(world,this.slingshot)  
} 
display() 
{ 
    var pointB = this.pointB;
    line(
        this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y, pointB.x, pointB.y
    )
} 
}