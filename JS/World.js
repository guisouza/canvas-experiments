var World = Class.Extends({
  init:function(gravity,canvas,wind){
    this.gravity = gravity
    this.wind = wind
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

  		if (this.objects[o].y<490){
	  		this.objects[o].velocity += this.gravity
	  		this.objects[o].y += this.objects[o].velocity


	  		this.objects[o].velocityX += this.wind
	  		this.objects[o].x += this.objects[o].velocityX
  		}
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