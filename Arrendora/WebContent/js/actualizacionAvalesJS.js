//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

//var myController = function($scope){
//	$scope.message = "AngularJS Tutorial";
//}


//JSON:
//SINTAXIS ELEMENTAL: { "objeto" : valor }
//EL OBJETO PARA ESTE CASO PUEDE SER AVALES


app.controller("myController", function($scope) {
	$scope.message = "Aval";
});


app.controller("myControllerAval", function($scope) {

var objeto = {
	"aval":
	{
		"num_aval": "5",
		"tipo_aval": "tipo",
		"aval": "nuevo",
		"obligado": "S",
		"otorga_garantia": "S",
		"nombre": "Fulano de tal",
		"rfc": "jshd880402",
		"calle": "Dom conocido",
		"num_ext": "1",
		"num_int": "",
		"colonia": "centro",
		"cp": "99000",
		"cve_entidad": "97",
		"entidad": "Tabasco",
		"ciudad": "Macuspana"
	}
};

$scope.objeto = objeto;

});


