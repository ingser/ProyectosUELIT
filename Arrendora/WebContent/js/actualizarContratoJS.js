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
	$scope.message = "ActContrato";
});


app.controller("myControllerActContrato", function($scope) {

var objeto = {
	"actContrato":
	{
		"tipo_contrato": "SIMPLE",
		"cve_cte": "93",
		"nom_cte": "CLIENTE",
		"obligado": "S",
		"num_contrato": "987",
		"fec_contrato": fecha,
		"contrato": "KKJS880402",
		"estado": "ACTIVO",
		"cve_arrendadora": "1",
		"nom_arrendadora": "LA ARRENDADORA",
		"rev_tasa": "SI",
		"num_ratificacion": "99000"
	}
};

$scope.objeto = objeto;

});