var express = require('express');
var app = express();
app.use(express.static('public'));





var vegetal = {
	name : "vegetal",
	icone : "V",
	x: "",
	y: "",
	css: "green",
	attack:"0",
	
	
};
var beteHerbivore = {
	name: "beteHerbivore",
	icone : "BH",
	x: "",
	y: "",
	css:"orange",
	attack: "1",
	
};
var beteCarnivore = {
	name:"beteCarnivore",
	icone : "BC",
	x: "",
	y: "",
	css:"red",
	attack:"2",
	
};
var cailloux = {
	name: "cailloux",
	icone : "C",
	x: "",
	y: "",
	css: "grey",
	attack:"3",
	
};

var animals = [vegetal, beteHerbivore, beteCarnivore, cailloux];

	//-- routes



app.get('/', function (req, res) {
	res.send("hello");
});

app.get('/getrandomobject', function (req, res) {
	res.send(animals[Math.round(Math.random()*animals.length)]);
	//res.send(animals);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});