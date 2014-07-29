var myWorld = new World(0.01,document.getElementById('tela'),0.01,1000,1000)

// var mySquare = new Solid(30,100,1,2,1.2,50,50);
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


	for (var parts = 10; parts >= 0; parts--) {

		// myWorld.append(new Solid(400,
		// 	300,
		// 	(Math.random()-0.5)*10,
		// 	(Math.random()-0.5)*10),1.2
		// )
		myWorld.append(new Solid(
			(Math.random())*800,
			(Math.random())*800,
			0,
			0,
			1.2,10,10))

	};