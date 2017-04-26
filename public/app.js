console.log('hello');
//RecupererUnAnimals();

var fourmi;

//gereratePositionAlea();

// Génération de la grille  
function GenerateTable ( X, Y ) {           
	for (var i = 0; i < X; i++) {                   
		$("#Grille").append( "<tr></tr>" );                     
		for (var j = 0; j < Y; j++) {                       
			$("#Grille tr:last-child").append( '<td></td>' );                 
		}          
	}  
};  








function RecupererUnAnimals() {
	$.ajax({

		url : "http://localhost:3000/getrandomobject",
		type: "get",
		//dataType: "html",


	}).done(function(res) {
		console.log(res);
		fourmi = res;
		console.log(fourmi);
		gereratePositionAlea();
		//return fourmi;
	});
}



function gereratePositionAlea(){
	
	fourmi.x = Math.round(Math.random()*4);
	fourmi.y = Math.round(Math.random()*4);
	// fourmi.x = x;
	// fourmi.y = y;
	// var placement = [x, y];
	// console.log(placement);	
	// var fourmi = {
	// 	fourmi : RecupererUnAnimals(),
	// 	x : x,
	// 	y : y,
	// };
	//console.log(fourmi);


}



GenerateTable(4, 4);
RecupererUnAnimals();
