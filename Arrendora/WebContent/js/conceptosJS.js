//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myController", function($scope) {
	$scope.message = "Conceptos";
});


app.controller("myControllerConceptos", function($scope) {

var objeto = {
	"conceptos":
	{
		"cve1A": "5",
		"cve1B": "9918",
		"concepto1": "1ER CONCEPTO",
		"monto1": "3265.34",
		"montoCobrado1": "343.34",
		
		"cve2A": "6",
		"cve2B": "9928",
		"concepto2": "2NDO CONCEPTO",
		"monto2": "3245.34",
		"montoCobrado2": "343.34",
		
		"cve3A": "7",
		"cve3B": "9938",
		"concepto3": "3ER CONCEPTO",
		"monto3": "3225.34",
		"montoCobrado3": "343.34",
		
		"cve4A": "8",
		"cve4B": "9948",
		"concepto4": "4TO CONCEPTO",
		"monto4": "325.34",
		"montoCobrado4": "343.34",
		
		"cve5A": "9",
		"cve5B": "9958",
		"concepto5": "5TO CONCEPTO",
		"monto5": "3255.34",
		"montoCobrado5": "343.34",
		
		"cve6A": "1",
		"cve6B": "9968",
		"concepto6": "6TO CONCEPTO",
		"monto6": "3225.34",
		"montoCobrado6": "343.34",
		
		"cve7A": "2",
		"cve7B": "9978",
		"concepto7": "7o CONCEPTO",
		"monto7": "3125.34",
		"montoCobrado7": "343.34",
		
		"cve8A": "3",
		"cve8B": "9988",
		"concepto8": "8VO CONCEPTO",
		"monto8": "3925.34",
		"montoCobrado8": "343.34",
		
		"cve9A": "4",
		"cve9B": "9998",
		"concepto9": "9o CONCEPTO",
		"monto9": "3525.34",
		"montoCobrado9": "343.34"		
	}
};

$scope.objeto = objeto;

});
