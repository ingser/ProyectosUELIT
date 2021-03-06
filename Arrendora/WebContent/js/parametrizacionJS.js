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

app.controller("myControllerParametrizacion", function($scope) {

	var objeto = {
		"parametrizacion":
		{
			fecha1: fecha,
			valor1: "0.367",
			fecha2: fecha,
			valor2: "0.034",
			fecha3: fecha,
			valor3: "0.456",
			fecha4: fecha,
			valor4: "0.123",
			fecha5: fecha,
			valor5: "0.345",
			fecha6: fecha,
			valor6: "0.567"		
		}
	};

	$scope.objeto = objeto;

	});



