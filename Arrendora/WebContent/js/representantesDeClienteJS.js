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

app.controller("myController", function($scope) {
	$scope.message = "RepresentCliente";
});


app.controller("myControllerRepresentCliente", function($scope) {

var objeto = {
	"representCliente":
	{
		"num_cte": "50",
		"nombre_cte": "EL SUJETO",
		"tipo_poder": "ACTIVO",
		"rfc": "SAJA871212",
		"nacionalidad": "MEX",
		"carta_naturalizacion": "NA",
		"fec_nac": fecha,
		"lugar_nac": "AGUA PRIETA",
		"cve_entidad": "32",
		"entidad": "22",
		"edo_civil": "SOLTERO",
		"profesion": "MEDICO",
		"calle": "SAUCES",
		"num_ext": "23",
		"num_int": "0",
		"colonia": "CENTRO",
		"cp": "88000",
		"cve_entidad2": "34",
		"entidad2": "TABASCO",
		"ciudad": "Macuspana"
	}
};

$scope.objeto = objeto;

});