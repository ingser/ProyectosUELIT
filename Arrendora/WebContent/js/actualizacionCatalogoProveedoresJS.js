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

app.controller("myControllerActCatProveed", function($scope) {

var objeto = {
		"actCatProveed":
		{
			"clave": "45",
			"nombre": "EJECUTIVO",
			"atencion": "SR GLEZ",
			"rfc": "KJSK776765",
			"calle": "CERRO GORDO",
			"num_ext": "12",
			"num_int": "NA",
			"colonia": "CENTRO",
			"cp": "98000",
			"cve_entidad": "97",
			"entidad": "Tabasco",
			"ciudad": "Macuspana",
			"tel1": "64356456",
			"ext1": "24",
			"tel2": "64356456",
			"ext2": "44",
			"fax": "6354"
		}
	};

	$scope.objeto = objeto;

	});