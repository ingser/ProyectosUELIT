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


app.controller("myControllerAsignacionFacturas", function($scope) {

var objeto = {
	"asignacionFacturas":
	{

		montoSinIVA1: "851,241.02",
		montoSinIVA2: "851,242.02",
		montoSinIVA3: "851,243.02",
		
		fact1:"081",
		fact2:"082",
		fact3:"083",
		
		cveProd1:"3386",
		cveProd2:"3385",
		cveProd3:"3384",
		
		nomProv1: "KENWORTH DEL CENTRO, S.A. DE C.V.",
		nomProv2: "KENWORTH DEL SUR, S.A. DE C.V.",
		nomProv3: "KENWORTH DEL NORTE, S.A. DE C.V."
	}
};

$scope.objeto = objeto;

});

