var Solid = Class.Extends({
  init:function(x,y,velocity,velocityX){
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.velocity = velocity;
    this.velocityX  =  velocityX || 0;
  },
  render : function(){
  		this.World.ctx.fillRect(this.x,this.y,this.width,this.height);
  		// this.World.ctx.fillStyle('"rgb(20,50,40)"');
  },
  jump : function (){
  	this.velocity = -20;
  },
})