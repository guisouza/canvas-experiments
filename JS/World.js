var World = Class.Extends({
  init:function(gravity,canvas,wind,width,height){
    this.gravity = gravity
    this.wind = wind
    this.width = width
    this.height = height
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.rendering = true;
	requestAnimationFrame(function(){
		myWorld.loop.call(myWorld);
	})
    this.objects = [];
  },
  loop : function(){
  	this.ctx.clearRect(0,0,1000,1000)
  	if (this.rendering == true){
  		this.render();  		
  	}else{
  		console.log('testte')
  		this.derender();
  	}

  	requestAnimationFrame(function(){
		myWorld.loop.call(myWorld);
	})
  },
  setGravity : function(x){
  	this.gravity = x
  },
  render : function(){
  	if (this.rendering == true){
  	for(o in this.objects){
  		// this.wind += 0.002;

  		if (this.objects[o].y>=this.height || this.objects[o].y<0){
			this.objects[o].impact()
  		}

  		if (this.objects[o].x>=this.width || this.objects[o].x<0){
			this.objects[o].impactLateral()
  		}
  		this.objects[o].velocity += this.gravity
  		this.objects[o].y += this.objects[o].velocity
  		if (this.objects[o].velocity > 20){
  			this.objects[o].velocity = 20
  		}else if(this.objects[o].velocity < -20){
  			this.objects[o].velocity = -20
  		}
  		this.objects[o].velocityX += this.wind
  		if (this.objects[o].velocityX > 20){
  			this.objects[o].velocityX = 20
  		}else if(this.objects[o].velocityX < -20){
  			this.objects[o].velocityX = -20
  		}
  		this.objects[o].x += this.objects[o].velocityX

		this.objects[o].render();
  	}
  }

  },
  derender : function(){
  	this.rendering = false;
  	for(o in this.objects){
  		// this.wind += 0.002;

  		this.objects[o].velocity -= this.gravity
  		this.objects[o].y -= this.objects[o].velocity
  		this.objects[o].velocityX -= this.wind
  		this.objects[o].x -= this.objects[o].velocityX
		this.objects[o].render();
  	}
  },
  append : function(obj){
  	// if (obj intanceof Solid){
  		this.objects.push(obj)
  		obj.World = this;
  	// }
  }
})