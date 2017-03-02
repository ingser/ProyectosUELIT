//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myControllerParamReportes", function($scope) {

	var objeto = {
		"paramReportes":
		{
			"nombre_destino": "IMPRESORA",
			"formato_destino": "CLIENTE",
			"num_copias": "8",
			"cotizacion": "S"
		}
	};

	$scope.objeto = objeto;

	});
