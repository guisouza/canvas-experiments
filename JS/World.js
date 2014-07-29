var World = Class.Extends({
  init:function(gravity,canvas,wind,width,height){
    this.gravity = gravity
    this.wind = wind
    this.width = width
    this.height = height
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.rendering = true;
    window.setInterval(this.loop.bind(this),1)
	// requestAnimationFrame(function(){
	// 	myWorld.loop.call(myWorld);
	// })
    this.objects = [];
  },
  loop : function(){
  	this.ctx.clearRect(0,0,1000,1000)
  	if (this.rendering == true){
  		this.render();  		
  	}else{
  		this.derender();
  	}
  },
  setGravity : function(x){
  	this.gravity = x
  },
  render : function(){
  	if (this.rendering == true){
  	for(o in this.objects){



  		if (this.objects[o].y+this.objects[o].height>=this.height || this.objects[o].y<0){
			this.objects[o].impact()
  		}

  		if (this.objects[o].x+this.objects[0].width>=this.width || this.objects[o].x<0){
			this.objects[o].impactLateral()
  		}


  		if (this.objects[o].velocity > 20){
  			this.objects[o].velocity = 20
  		}else if(this.objects[o].velocity < -20){
  			this.objects[o].velocity = -20
  		}
  		
  		if (this.objects[o].velocityX > 20){
  			this.objects[o].velocityX = 20
  		}else if(this.objects[o].velocityX < -20){
  			this.objects[o].velocityX = -20
  		}



  		this.objects[o].velocity += this.gravity
  		this.objects[o].y += this.objects[o].velocity
  		this.objects[o].x += this.objects[o].velocityX
  		this.objects[o].velocityX += this.wind

  		this.hitTest(this.objects[o],this.objects)


		this.objects[o].render();
  	}
  }
  },
  hitTest :function(x,z){

  	for(a in z){
  		if (z[a].id !== x.id){
	  		if (z[a].x < x.x + x.width  && z[a].x + z[a].width  > x.x &&
				z[a].y < x.y + x.height && z[a].y + z[a].height > x.y) {
	  			this.colide(z[a],x);
			}
		}
  	}
  },
  colide : function(objectA,objectB){
  	var velocityA = objectA.velocity;
  	var velocityB = objectB.velocity;

  	objectA.velocity = -(velocityA-velocityB);
  	objectB.velocity = -(velocityB-velocityA);

  	var velocityXA = -(objectA.velocityX);
  	var velocityXB = -(objectB.velocityX);

  	objectA.velocityX = velocityXA-velocityXB;
  	objectB.velocityX = velocityXB-velocityXA;

  },
  append : function(obj){
  	// if (obj intanceof Solid){
  		this.objects.push(obj)
  		obj.World = this;
  	// }
  }
})














