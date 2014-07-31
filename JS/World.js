var World = Class.Extends({
  init:function(props){
    this.gravity = props.gravity || 0.01;
    this.wind = props.wind || 0;
    this.canvas = props.canvas;
    this.width = this.canvas.getAttribute('width');
    this.height = this.canvas.getAttribute('height');
    this.ctx = this.canvas.getContext('2d');
    this.rendering = true;
    this.ticker = window.setInterval(this.loop.bind(this),1000/60)
    this.objects = [];
  },
  loop : function(){
  	this.ctx.clearRect(0,0,1000,1000)
  	this.render();
  },
  setGravity : function(x){
  	this.gravity = x
  },
  render : function(){
  	if (this.rendering == true){
  	for(o in this.objects){

      this.objects[o].velocityY += this.gravity
      this.objects[o].y += Math.round(this.objects[o].velocityY)


  		if (this.objects[o].y+this.objects[o].height>=this.height || this.objects[o].y<0){
        this.objects[o].impact()
        if (this.objects[o].y+this.objects[o].height>=this.height){
            this.objects[o].y = this.height-this.objects[o].height
        }
        if (this.objects[o].y < 0){
            this.objects[o].y = 0
        }
      }

      this.objects[o].velocityX += this.wind        
      this.objects[o].x += Math.round(this.objects[o].velocityX);

  		if (this.objects[o].x+this.objects[0].width>=this.width || this.objects[o].x<0){
			   this.objects[o].impactLateral()
         if (this.objects[o].x+this.objects[0].width>this.width){
            this.objects[o].x = this.width-this.objects[0].width;
         }

         if (this.objects[o].x < 0){
            this.objects[o].x = 0
         }
      }


  		if (this.objects[o].velocityY > 50){
  			this.objects[o].velocityY = 50
  		}else if(this.objects[o].velocityY < -50){
  			this.objects[o].velocityY = -50
  		}
  		
  		if (this.objects[o].velocityX > 50){
  			this.objects[o].velocityX = 50
  		}else if(this.objects[o].velocityX < -50){
  			this.objects[o].velocityX = -50
  		}

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
  	var velocityA = objectA.velocityY;
  	var velocityB = objectB.velocityY;

  	objectA.velocityY = -(velocityA-velocityB)*((objectA.elasticity+objectB.elasticity)/2);
  	objectB.velocityY = -(velocityB-velocityA)*((objectA.elasticity+objectB.elasticity)/2);

  	var velocityXA = objectA.velocityX;
  	var velocityXB = objectB.velocityX;

  	objectA.velocityX = -(velocityXA-velocityXB)*((objectA.elasticity+objectB.elasticity)/2);
  	objectB.velocityX = -(velocityXB-velocityXA)*((objectA.elasticity+objectB.elasticity)/2);

  },
  append : function(obj){
  	// if (obj intanceof Solid){
  		this.objects.push(obj)
  		obj.World = this;
  	// }
  }
})














