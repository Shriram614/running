
	class paper{
		constructor(x,y,r) {
			

	
	 this.image=loadImage("paper.png");

	
		}
	   display() {
	   
	    image(this.image,this.position.x,this.position.y,this.width,this.height);
	 
	   }
   };