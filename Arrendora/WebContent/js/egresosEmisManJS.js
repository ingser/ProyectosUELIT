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


app.controller("myControllerEgresosEmisMan", function($scope) {

var objeto = {
		"egresosEmisMan":
		{
			"transaccion": "533",
			"fec_captura": fecha,
			"fec_emision": fecha,
			"fec_programada": fecha,
			"beneficiario_campo1": "AP PATERNO",
			"beneficiario_campo2": "AP MATERNO",
			"beneficiario_campo3": "NOMBRE???",
			"monto": "18273",
			"tipo_pago": "CHEQUE",
			"tipo_cheque": "PORTADOR",
			"cuenta_emisora_campo1": "9292",
			"cuenta_emisora_campo2": "99000",
			"cuenta_emisora_campo3": "97",
			"cve_banco_emisor": "77998",
			"banco_emisor": "SANTANDER",
			"num_cheque": "987234",
			"cve_moneda": "MXN",
			"moneda": "PESOS MEXICANOS",
			"cve_banco_deposito": "87783",
			"banco_deposito": "BANREGIO",
			"num_cuenta": "883782",
			"plaza": "MACUSPANA",
			"concepto1": "CHEQUE",
			"concepto2": "",
			"concepto3": ""
		}
	};

	$scope.objeto = objeto;

	});