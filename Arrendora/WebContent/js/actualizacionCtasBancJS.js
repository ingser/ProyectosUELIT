//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

//var myController = function($scope){
//	$scope.message = "AngularJS Tutorial";
//}

var date = new Date();
var d  = date.getDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var fecha = day + "/" + month + "/" + year;

app.controller("myController", function($scope) {
	$scope.message = "Cuenta";
});


app.controller("myControllerCuenta", function($scope) {

var objeto = {
	"cuenta":
	{
		"cve_cte": "50",
		"cliente": "zutano de mengano",
		"cve_moneda": "MXN",
		"moneda": "PESOS MEXICANOS",
		"cve_banco": "097",
		"banco": "SUCURSAL 7862 PIE DE LA CUESTA",
		"plaza": "QUERETARO",
		"cuenta": "0937762558",
		"prioridad": "ALTA",
		"cve_mov": "01",
		"tipo_mov": "ALTA",
		"cve_autoriza_1": "990",
		"cve_autoriza_2": "172312",
		"fecha_carta": fecha,
		"referencia_carta": "REF9928",
		"secuencia": "1234567",
		"fecha_entrega": fecha
	}
};

$scope.objeto = objeto;

});
