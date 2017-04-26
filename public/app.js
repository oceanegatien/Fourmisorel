var fourmi;
var X = 10;
var Y = 10;




// Génération de la grille  
function GenerateTable (X, Y) {     
	for (var i = 0; i < X; i++) {                   
		$("#Grille").append( '<tr data-id="'+i+'"></tr>');                     
		for (var j = 0; j < Y; j++) {                       
			$("#Grille tr:last-child").append( '<td data-id="'+i+'/'+j+'">&nbsp;</td>' );

		}          
	}  

	 
}


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
			console.log(fourmi);
			
			for (var i = 0; i < X; i++) {
				for (var j = 0; j < Y; j++) {

					if (i === fourmi.x && j === fourmi.y){
						var coord = $('#Grille tr').find('[data-id="'+i+'/'+j+'"]')
							$(coord).html(fourmi.icone).css("background-color", fourmi.css);
					}

				}
			}

		}
	}).fail(function(err) {
		console.log("erreur serveur");
	});
}





//--action !

GenerateTable(X, Y);

var interval = setInterval(function(){ 
	console.log("Hello");
	RecupererUnAnimal(); 


}, 500);


$("#stop").click(function () {
	clearInterval(interval);
	
});