//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myControllerPswdSeg", function($scope) {

	var objeto = {
		"pswdSeg":
		{
			"user": "usuario",
			"pswd": "pswd"
		}
	};

	$scope.objeto = objeto;

	});
