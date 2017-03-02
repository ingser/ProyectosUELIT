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
	$scope.message = "ActTipoLinea";
});

app.controller("myControllerActTipoLinea", function($scope) {
	
	var objeto = {
			
		"actTipoLinea":
			{
			linea1A: "123",
			linea1B: "0387",
			linea2A: "desc1",
			linea2B: "obser1",
			
			linea3A: "456",
			linea3B: "88377",
			linea4A: "desc2",
			linea4B: "obser2",
			
			linea5A: "789",
			linea5B: "36700"
				
			}
			
	};
	
	$scope.objeto = objeto;

});

