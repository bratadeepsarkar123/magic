class Gru {
    constructor(x,y,width,height) {
      var options = {
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        if (this.body.speed<3){
             var pos =this.body.position;
             rectMode(CENTER)
                strokeWeight(2)
                stroke("white");
                rect(pos.x,pos.y, width/25,height/25)
            }else{
              World.remove(world,this.body)
            }
    }
}