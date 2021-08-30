class Paper{
    constructor(x,y){
        var options={
'isStatic':false,
'restitution':0.3,
'friction':0,
'density':1.2
 }
 this.body = Bodies.rectangle(x, y, 60, 90);
        this.width = 60;
        this.height = 90;
        this.image = loadImage("paper.png");
        //this.body.scale=0.4
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  
}