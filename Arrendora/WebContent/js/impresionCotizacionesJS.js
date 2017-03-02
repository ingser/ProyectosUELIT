//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myControllerImprCotiz", function($scope) {

	var objeto = {
		"imprCotiz":
		{
			"num_cotiz": ""
		}
	};

	$scope.objeto = objeto;

	});
