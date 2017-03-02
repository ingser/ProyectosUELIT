//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

var date = new Date();
var d = date.getDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var fecha = day + "/" + month + "/" + year;



app.controller("myController", function($scope) {
	$scope.message = "AutOrden";
});


app.controller("myControllerAutOrden", function($scope) {

var objeto = {
	"autOrden":
	{
		"destino": "I",
		"cve_cte": "342",
		"cliente": "EL CLIENTE",
		"cve_empr": "0092",
		"empresa": "LA EMPRESA",
		"cve_prom": "2345",
		"promotor": "EL PROMOTOR",
		"calle": "LA CALLE",
		"cve_bien": "1",
		"bien_cnb": "7773",
		"cotizacion": "9982",
		"cve_bien2": "99000",
		"bien_interbancario": "97",
		"leasebak": "LEASE",
		"fact_iva": "SI",
		
		"iva_arrendam": "1,763.87",
		"tipo_arrendam": "SIMPLE",
		"plazo": "60",
		"monot_finan": "123,763.98",
		"cve_moneda": "MXN",
		"moneda": "PESOS MEXICANOS",
		"tipo_cambio": "25.87",
		"monto_bienes": "243,776.87",
		"iva": "12,653.55",
		"monto_iva": "12,663.88",
		"fecha_arrendam": fecha,
		"fecha_pago": fecha,
		"opcion_compra": "NO",
		"monto_opcion_compra": "0",
		"credito_origen": "0"
	}
};

$scope.objeto = objeto;

});