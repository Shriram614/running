class Base {
    constructor(x, y,width,height,r,angle ) {
        var options = {
            'isStaic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.x=x;
	    this.y=y;
	    this.r=r
        this.body = Bodies.rectangle(this.x, this.y, width, height,this.r2, options);
        this.width = width;
        this.height = height;
      
        
       this.image =loadImage("base.png");

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);

        imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    
       pop();
      }
};