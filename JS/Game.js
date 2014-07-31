
var myWorld = new World({
	gravity : 1,
	canvas : document.getElementById('tela'),
	wind : 00
})


// var mySquare2 = new Solid(100,100,2,1,1.2,50,50);

// myWorld.append(mySquare);
// myWorld.append(mySquare2);


// window.setInterval(function(){
// 	myWorld.append(new Solid(400,
// 		300,
// 		(Math.random()-0.5)*10,
// 		(Math.random()-0.5)*10))
// 	// myWorld.setGravity(Math.random()-0.5);
// 	// myWorld.wind = Math.random()-0.5;
// })

	// myWorld.append(new Solid(0,0,1,0,1.2))
	// myWorld.append(new Solid(100,300,1,0,1.2))
		myWorld.append(new Solid({
			x : 0,
			y : 0,
			width : 60,
			height :60,
			elasticity: 0,
			velocityX:0.1,
			velocityY:0,
			color:'#0000FF'
		}))	



setInterval(function(){
		myWorld.append(new Solid({
			x : 500,
			y : 500,
			width : 40,
			height : 40,
			elasticity: 0,
			velocityX:(Math.random()-0.5)*10,
			velocityY:-(Math.random())*10,
			color:'#00FF00'
		}))	
},500)
