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
	$scope.message = "Pagina20";
});


app.controller("myControllerPagina20", function($scope) {

var objeto = {
	"pagina20":
	{
		"num_concepto1": "5",
		"concepto1": "CONCEPTO UNO",
		"num1": "1",
		"monto1": "4000",
		"f1": "F1",

		"num_concepto2": "6",
		"concepto2": "CONCEPTO 2",
		"num2": "2",
		"monto2": "5000",
		"f2": "F2"
	}
};

$scope.objeto = objeto;

});