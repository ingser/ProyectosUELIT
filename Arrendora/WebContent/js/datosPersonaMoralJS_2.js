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

app.controller("myControllerDatPersMoral2", function($scope) {

	var objeto = {
		"datPersMoral2":
		{
			"perten_grupo": "N",
			"cve_sector": "2873",
			"sector": "CONSTRUCCION",
			"num_escritura": "2345432",
			"fecha_escritura": fecha,
			"num_notario": "098243",
			"nom_notario": "EL NOTARIO",
			"lugar_notario": "DOM CONOCIDO",
			"reg_publico": "0983",
			"lugar_registro": "QUERETARO",
			"observ_1A": "1",
			"observ_1B": "TERRENO BALDIO",
			"observ_2A": "2",
			"observ_2B": "SIN SERVICIOS",
			"observ_3A": "",
			"observ_3B": "",
			"observ_4A": "",
			"observ_4B": "",
			"observ_5A": "",
			"observ_5B": ""
		}
	};

	$scope.objeto = objeto;

	});