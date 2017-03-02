//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.


app.controller("myControllerCaractBien", function($scope) {

var objeto = {
	"caractBien":
	{
		"num_bien": "875",
		"cve_tipo_bien": "345",
		"tipo_bien": "AUTO",
		"cve_marca": "45",
		"marca": "FORD",
		"modelo": "FOCUS",
		"serie": "jshd880402234EF",
		"motor": "HECHO EN MEX",
		"color": "ROJO",
		"num_cotizacion": "23",
		"placas": "MMM1234",
		"cve_dia_descanso": "01",
		"dia_descanso": "LUNES",
		"placas2": "MMJ444",
		"tenencia": "2017",
		"seguro": "0039KEK3",
		"cve_registro": "39",
		"registro": "M23409LKJ",
		"monto_fact": "130,000",
		"iva": "14,000"
	}
};

$scope.objeto = objeto;

});