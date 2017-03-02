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


app.controller("myControllerManttoCartera", function($scope) {

	var objeto = {
		"manttoCartera":
		{
			"cve_cliente": "234",
			"cliente": "32",
			"cve_empresa": "23",
			"empresa": "EMPRESA",
			"contrato": "S",
			"anexo": "99393",
			"cotizacion": "80402",
			"disposicion": "SI",
			"plazo": "60",
			"cve_arrendamiento": "34",
			"arrendamiento": "SIMPLE",
			"cve_moneda": "MXN",
			"moneda": "PESOS MEXICANOS",
			"iva": "12000",
			"factor_iva": "16",
			"fecha_pago": fecha,
			"cve_estatus": "01",
			"status": "ACTIVO",
			"opcion_compra": "NO",
			"cve_cart_vencida": "883",
			"cart_vencida": "233223"
		}
	};

	$scope.objeto = objeto;

	});