//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.


app.controller("myControllerPagina02", function($scope) {

var objeto = {
	"pagina02":
	{
		"cotizac": "0945",
		"tabla_amortizac": "234",
		"contin": "SI"
	}
};

$scope.objeto = objeto;

});