var Solid = Class.Extends({
  init:function(x,y,velocity,velocityX,elasticity){
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 5;
    this.velocity = velocity;
    this.velocityX  =  velocityX || 0;
    this.elasticity = elasticity || 0
  },
  render : function(){
  		this.World.ctx.fillRect(this.x,this.y,this.width,this.height);
  		// this.World.ctx.fillStyle('"rgb(20,50,40)"');
  },
  jump : function (){
  	this.velocity = -20;
  },
  impact : function(){
  	this.velocity = -(this.velocity*this.elasticity)
  	this.velocityX = this.velocityX*this.elasticity
  },
  impactLateral : function(){
  	this.velocityX = -(this.velocityX*this.elasticity)
  }
})