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


app.controller("myControllerParamReporte", function($scope) {

	var objeto = {
		"paramReporte":
		{
			"cve_destino": "50",
			"destino": "IMPRESORA",
			"cve_empresa": "0938",
			"empresa": "DESTILADOS SA",
			"cve_sucursal": "7733",
			"sucursal": "PIE DE LA CUESTA",
			"fecha_proyeccion": fecha
		}
	};

	$scope.objeto = objeto;

	});