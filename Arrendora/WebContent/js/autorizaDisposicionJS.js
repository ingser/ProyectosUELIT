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


app.controller("myControllerAutorizaDisp", function($scope) {

	var objeto = {
		"autorizaDisp":
		{
			"disposicion": "S",
			"fecha": fecha,
			"monto": "1,000,000",
			"cotizacion": "S",
			"contrato": "2345",
			"anexo": "00283",
			"linea_disp": "1,200,000",
			"monto_antic": "800,000",
			"monto_desc": "20,000",
			"monto_bonif": "1,000",
			"monto_recup": "0"
		}
	};

	$scope.objeto = objeto;

	});