var express = require('express');
var app = express();
app.use(express.static('public'));





var vegetal = {
	icone : "V",
	x: "",
	y: ""
	
};
var beteHerbivore = {
	icone : "BH",
	x: "",
	y: ""
};
var beteCarnivore = {
	icone : "BC",
	x: "",
	y: ""
};
var cailloux = {
	icone : "C",
	x: "",
	y: ""
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