//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myController", function($scope) {
	$scope.message = "CalculoCotizacion";
});


app.controller("myControllerCalculoCotizacion", function($scope) {

var objeto = {
	"calculoCotizacion":
	{
		"tabla1": "Tab 1",
		"tablaA": "Tab A",
		"tabla2": "Tab 2",
		"tablaB": "Tab B",
		"tabla3": "Tab 3",
		"tablaC": "Tab C",
		"tabla4": "Tab 4",
		"tablaD": "Tab D",
		"tabla5": "Tab 5",
		"tablaE": "Tab E",
		"tabla6": "Tab 6",
		"tablaF": "Tab F",
		"tabla7": "Tab 7",
		"tablaG": "Tab G",
		"tabla8": "Tab 8",
		"tablaH": "Tab H",
		"tabla9": "Tab 9",
		"tablaI": "Tab I",
		"tabla10": "Tab 10",
		"tablaJ": "Tab J",
		
		"montoFinanc": "12,387,498.98",
		"pagoInic": "23,764.65",
		"ivaMontoFinanc": "3,376.33",
		"plazo": "60 MESES",
		"capital": "15,382,388.34",
		"tasaOriginal": "12",
		"ivaCapital": "23,343,874.66",
		"valorContrato": "23,439.00",
		"interes": "34,883.93",
		"cargaFinanc": "1,239.00",
		"ivaInteres": "12,387.73",
		"tasaEfectiva": "12",
		"pagoRenta": "1,376.88"
	}
};

$scope.objeto = objeto;

});