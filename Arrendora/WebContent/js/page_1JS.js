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


app.controller("myControllerPage1", function($scope) {

	var objeto = {
		"page1":
		{
			"destino": "IMPR",
			"cve_cliente": "342",
			"cliente": "CLIENTE",
			"cve_empresa": "123",
			"empresa": "EMPRESA",
			"cve_promotor": "123",
			"promotor": "PROMOTOR",
			"cve_bien_CNB": "34",
			"bien_CNB": "TERRENO",
			"num_cotizac": "1",
			"cve_bien_interb": "A3",
			"bien_interb": "NINGUNO",
			"leaseback": "99000",
			"factor_iva": "97",
			"iva_arrendam": "12000",
			"tipo_arrendam": "SIMPLE",
			"plazo": "36",
			"monto_financiar": "1000000",
			"cve_moneda": "MXN",
			"moneda": "PESOS MEXICANOS",
			"tipo_cambio": "22",
			"monto_bienes": "500000",
			"iva": "16",
			"monto_iva": "23999",
			"fecha_arrendam": fecha,
			"fecha_pago": fecha,
			"opcion_compra": "NO",
			"monto_opcion_compra": "0",
			"credito_origen": "BANCARIO"
		}
	};

	$scope.objeto = objeto;

	});