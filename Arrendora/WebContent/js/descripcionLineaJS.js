//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myControllerDescripLinea", function($scope) {

	var objeto = {
		"descripLinea":
		{
			"num_linea_A": "5",
			"num_linea_B": "343",
			"num_cond_A": "1",
			"num_cond_B": "MENSUAL",
			"atencion_de_A": "34",
			"atencion_de_B": "Fulano de tal"
		}
	};

	$scope.objeto = objeto;

	});
