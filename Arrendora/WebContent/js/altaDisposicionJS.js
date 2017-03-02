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
	$scope.message = "AltaDisposicion";
});


app.controller("myControllerAltaDisposicion", function($scope) {

var objeto = {
	"altaDisposicion":
	{
		"disposicion": "5",
		"fecha": fecha,
		"monto": "1,000,000",
		"cotizacion": "24",
		"contrato": "535",
		"anexo": "NO",
		"linea_disp": "1,200,00",
		"monto_anticip": "500,000",
		"monto_descontar": "20,000",
		"monto_bonificar": "0",
		"monto_recuperar": "10,000"
	}
};

$scope.objeto = objeto;

});