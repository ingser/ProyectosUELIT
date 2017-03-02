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


app.controller("myControllerActAvalesRepres", function($scope) {

	var objeto = {
		"actAvalesRepres":
		{
			"edo_cliente": "ACT",
			"clave": "9393",
			"nombre": "CLIENTE",
			"tipo_persona": "F",
			"ap_paterno": "DE LEON",
			"ap_materno": "DE LA O",
			"rfc": "jshd880402",
			"curp": "LKJQW98732LK",
			"cedula": "432109832",
			"fecha_contac": fecha,
			"cve_prom": "122",
			"promotor": "99000"
		}
	};

	$scope.objeto = objeto;

	});