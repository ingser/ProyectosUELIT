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
	$scope.message = "ImpresVencCte";
});


app.controller("myControllerImpresVencCte", function($scope) {

var objeto = {
	"impresVencCte":
	{
		"param1": "Parametro 1",
		"valo1": "1",
		"param2": "param 2",
		"valor2": "2",
		"param3": "el tercero",
		"valor3": "3",
		"param4": "Cuarto",
		"valor4": "4",
		"param5": "5to.",
		"valor5": "5"
	}
};

$scope.objeto = objeto;

});