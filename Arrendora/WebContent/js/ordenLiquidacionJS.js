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
	$scope.message = "OrdenLiquidacion";
});


app.controller("myControllerOrdenLiquidacion", function($scope) {

var objeto = {
	"ordenLiquidacion":
	{
		"destino": "5",
		"cve_cliente": "453",
		"cliente": "FULANO DE TAL",
		"cve_empresa": "S0065",
		"empresa": "SIERGE, S.A.",
		"cve_promotor": "872",
		"promotor": "EL PROMOTOR",
		"cve_bien_CNB": "098",
		"bien_CNB": "AUTO",
		"num_cotiza": "9928",
		"cve_bien_interbanc": "3737",
		"bien_interbanc": "8882",
		"leaseback": "97",
		"fact_IVA": "23,998.00",
		"iva_arrendam": "3,272.98",
		"tipo_arrendam": "LEASING",
		"plazo": "60 MESES",
		"monto_financ": "1,000,000.00",
		"cve_moneda": "MXN",
		"moneda": "PESOS MEXICANOS",
		"tipo_cambio": "22.76",
		"monto_bienes": "2,398,322.87",
		"iva": "23,987,339.53",
		"monto_iva": "3,772,34",
		"fecha_arrendam": fecha,
		"fecha_pago": fecha,
		"opcion_compra": "NO",
		"monto_opc_compra": "0",
		"credito_origen": "BANCARIO"
	}
};

$scope.objeto = objeto;

});