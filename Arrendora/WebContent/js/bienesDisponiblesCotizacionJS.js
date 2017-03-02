//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

var date = new Date();
var d  = date.getDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;

var fecha = day + "/" + month + "/" + year;


app.controller("myController", function($scope) {
	$scope.message = "BienesDispCot";
});


app.controller("myControllerBienesDispCot", function($scope) {

var objeto = {
	"bienesDispCot":
	{
		"bien1": "AUTO",
		"factura1": "983762",
		"bien2": "MOTO",
		"factura2": "772663",
		"bien3": "",
		"factura3": "",
		"bien4": "",
		"factura4": "",
		
		
		"bienA": "Bien A",
		"renA": "Ren A",
		"descripA": "Descrip. A",
		
		"bienB": "Bien B",
		"renB": "Ren B",
		"descripB": "Descrip. B",
		
		"bienC": "Bien C",
		"renC": "Ren C",
		"descripC": "Descrip. C",
		
		"bienD": "",
		"renD": "",
		"descripD": "",
		
		"bienE": "",
		"renE": "",
		"descripE": "",
		
		"bienF": "",
		"renF": "",
		"descripF": "",
		
		"bienG": "",
		"renG": "",
		"descripG": "",
		
		"bienH": "",
		"renH": "",
		"descripH": "",
		
		"bienI": "",
		"renI": "",
		"descripI": "",
		
		"bienJ": "",
		"renJ": "",
		"descripJ": "",
		
		"bienK": "",
		"renK": "",
		"descripK": "",
		
		"bienL": "",
		"renL": "",
		"descripL": ""		
	}
};

$scope.objeto = objeto;

});
