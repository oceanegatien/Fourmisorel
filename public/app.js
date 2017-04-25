console.log('hello');
gererateAnimalsAlea(10,10, 4);
//RecupererUnAnimals();







function RecupererUnAnimals() {
	$.ajax({

		url : "http://localhost:3000/getrandomobject",
		type: "get",
		//dataType: "html",


	}).done(function(res) {
		console.log(res);
	});
}



function gererateAnimalsAlea(x, y, nbrFourmi){
	//RecupererUnAnimals();
	x = Math.round(Math.random()*nbrFourmi);
	y = Math.round(Math.random()*nbrFourmi);
	var placement = [x, y];
	console.log(placement);	
	var fourmi = {
		fourmi : RecupererUnAnimals(),
		x : x,
		y : y,
	};
	console.log(fourmi);


}
