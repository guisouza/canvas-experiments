function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var Solid = Class.Extends({
  init:function(x,y,velocity,velocityX,elasticity,width,height){
  	this.id = makeid();
    this.x = x;
    this.y = y;
    this.width = width || 1;
    this.height = height ||  1;
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