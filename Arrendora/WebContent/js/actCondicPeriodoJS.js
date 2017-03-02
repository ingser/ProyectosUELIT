//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.



app.controller("myController", function($scope) {
	$scope.message = "ActCondPeriodo";
});


app.controller("myControllerActCondPeriodo", function($scope) {

var objeto = {
	"actCondPeriodo":
	{
		
		fecha1: fecha,
		valor1: "0.367999",
		
		gra1: "34",
		gra2: "35",
		gra3: "36",
		
		renA1: "N",
		renA2: "N",
		renA3: "N",
		
		renB1: "I",
		renB2: "I",
		renB3: "I",
		
		fijaA1: "V",
		fijaA2: "V",
		fijaA3: "V",
		
		fijaB1: ".0023",
		fijaB2: ".0023",
		fijaB3: ".0023"				
			
	}
};

$scope.objeto = objeto;

});


