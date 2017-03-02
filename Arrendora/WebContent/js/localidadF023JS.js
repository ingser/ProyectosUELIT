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
	$scope.message = "LocalidadF023";
});


app.controller("myControllerLocalidadF023", function($scope) {

var objeto = {
	"localidadF023":
	{
		"cve_localidad": "32",
		"localidad": "Macuspana",
		"fobaproa": "NO",
		"cve_seguimiento": "S",
		"seguimiento": "S",
		"cve_clasif_cnbyv": "2993",
		"clasif_cnbyv": "00028",
		"cve_suc": "7342",
		"suc_segmentacion": "02",
		"act_banxico": "SI",
		"obs1": "Cliente alto riesgo",
		"obs2": "",
		"obs3": ""
	}
};

$scope.objeto = objeto;

});