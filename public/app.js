var fourmi;
var X = 10;
var Y = 10;
var fourmiVide={
	name:"vide",
	icone:"&nbsp;"
};









// Fonctions
function GenerateTable (X, Y) {     
	for (var i = 0; i < X; i++) {                   
		$("#Grille").append( '<tr data-id="'+i+'"></tr>');                     
		for (var j = 0; j < Y; j++) {                       
			$("#Grille tr:last-child").append( '<td data-id="'+i+'/'+j+'">'+fourmiVide.icone+'</td>' );

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
			
			for (var i = 0; i < X; i++) {
				for (var j = 0; j < Y; j++) {
					var coord = $('#Grille tr').children('[data-id="'+i+'/'+j+'"]');
					//var rnd=Math.round(Math.random())
					// if (fourmi.name === "cailloux") {
					// 	var coordPlusUn = $('#Grille tr').find('[data-id="'+(i+rnd)+'/'+(j)+'"]');
					// 	console.log(coordPlusUn);
					// 		if (rnd === 1) {
					// 			$(coordPlusUn).html(fourmi.icone).css("background-color", fourmi.css);
					// 		}
					
					console.log(fourmi);
					if (i === fourmi.x && j === fourmi.y){
						$(coord).html(fourmi.icone).css("background-color", fourmi.css);
					}

				}
			}

		}
	}).fail(function(err) {
		console.log("erreur serveur");
	});
}

function fight() {
	var newFourmi;
	var vieilleFourmi;



}



//--action !

GenerateTable(X, Y);

var interval = setInterval(function(){ 
	RecupererUnAnimal(); 


}, 500);


$("#stop").click(function () {
	clearInterval(interval);
	
});