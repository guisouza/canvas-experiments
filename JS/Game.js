var myWorld = new World(0.10,document.getElementById('tela'),0.00,1000,1000)

// var mySquare = new Solid(30,100,-4,2,1.2);
// var mySquare2 = new Solid(100,100,-2);

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

	// myWorld.append(new Solid(20,20,1,1,0.8))


	for (var parts = 10; parts >= 0; parts--) {

		// myWorld.append(new Solid(400,
		// 	300,
		// 	(Math.random()-0.5)*10,
		// 	(Math.random()-0.5)*10),1.2
		// )
		myWorld.append(new Solid(
			250,
			250,
			(Math.random()-0.5)*10,
			(Math.random()-0.5)*10,
			1.2))

	};