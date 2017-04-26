var fourmi;
var X = 10;
var Y = 10;








function RecupererUnAnimal() {
	$.ajax({

		url : "http://localhost:3000/getrandomobject",
		type: "get",


	}).done(function(res) {
		if (res === null || undefined) {
			console.log("erreur");

		}else{
			fourmi = res;
			fourmi.x = Math.round(Math.random()*X);
			fourmi.y = Math.round(Math.random()*Y);
			console.log(fourmi)
			for (var i = 0; i <= X; i++) {
				for (var j = 0; j <= Y; j++) {
					if (i === fourmi.x && j === fourmi.y){
						$("tr td").html(fourmi.icone);
					}
				}
			}

		}
	}).fail(function(err) {
		console.log("erreur serveur");
	});
}



// Génération de la grille  
function GenerateTable (X, Y) {    
	 RecupererUnAnimal();   
	 console.log(fourmi); 
	for (var i = 0; i < X; i++) {                   
		$("#Grille").append( "<tr></tr>" );                     
		for (var j = 0; j < Y; j++) {                       
			$("#Grille tr:last-child").append( '<td></td>' );                 
		}          
	}  
};  


GenerateTable(X, Y);
//RecupererUnAnimal();

