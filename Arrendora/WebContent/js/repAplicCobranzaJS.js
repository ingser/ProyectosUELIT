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


app.controller("myControllerRepAplicCobran", function($scope) {

	var objeto = {
		"repAplicCobran":
		{
			"fecha_reporte": fecha,
			"cve_sucursal": "243",
			"sucursal": "CNETRO",
			"comentarios_1": "COMM 1",
			"comentarios_2": "COMM 2",
			"comentarios_3": "COMM 3",
			"comentarios_4": "COMM 4",
			"comentarios_5": "COMM 5",
			"comentarios_6": "COMM 6",
			"comentarios_7": "COMM 7",
			"comentarios_8": "COMM 8",
			"comentarios_9": "COMM 9"
		}
	};

	$scope.objeto = objeto;

	});