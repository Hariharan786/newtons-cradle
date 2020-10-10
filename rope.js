class chain{
    constructor (bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness : 1.5,
            length : 17

        }


   this.chain = Constraint.create(options);
   World.add(world,chain);
    
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }

}