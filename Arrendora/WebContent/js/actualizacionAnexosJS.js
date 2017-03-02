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


app.controller("myControllerActAnexos", function($scope) {

	var objeto = {
		"actAnexos":
		{
			"num_contrato": "9835",
			"cliente": "EL CLIENTE",
			"cve_cliente": "ACT",
			"num_anexo": "493",
			"rev_condiciones": "S",
			"cve_arrendadora": "E993",
			"arrendadora": "LA PROVINCIAL",
			"fecha_ini": fecha,
			"fecha_ven": fecha,
			"tasa_1": "10",
			"tasa_2": "0",
			"pagare": "7732",
			"estado": "97",
			"responsiva": "9872143",
			"num_cotizacion": "0987243",
			"venta_terceros": "NO",
			"interes_moratorio": "15%",
			"factor_moratorio": "0.15"
		}
	};

	$scope.objeto = objeto;

	});
