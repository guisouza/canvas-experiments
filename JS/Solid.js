
var Solid = Class.Extends({
  init:function(props){
  	this.id = makeid();
    this.x = props.x || 0;
    this.y = props.y || 0;
    this.width = props.width || 1;
    this.height = props.height || 1;
    this.velocityY = props.velocityY || 0;
    this.velocityX = props.velocityX || 0;
    this.elasticity = props.elasticity || 0;
    this.color = props.color || "#FF0000";


  },
  render : function(){
      this.World.ctx.fillStyle=this.color;
  		// this.World.ctx.fillRect(this.x,this.y,this.width,this.height);
      this.World.ctx.beginPath();
      this.World.ctx.arc(this.x,this.y,this.width,0,2*Math.PI);
      this.World.ctx.stroke();
  },
  impact : function(){
    if (Math.abs(this.velocityY) < 1){
      this.velocityY = 0;
    }else{
      this.velocityY = -(this.velocityY*this.elasticity);
    }
  	
  	this.velocityX = this.velocityX*this.elasticity
  },
  impactLateral : function(){
  	this.velocityX = -(this.velocityX*this.elasticity)
  }
})


function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}