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


app.controller("myControllerCobranzaDiaria", function($scope) {

	var objeto = {
		"cobranzaDiaria":
		{
			"num_transacc": "05",
			"fecha_captura": fecha,
			"afectar_saldo": "NO",
			"fecha_valor": fecha,
			"cliente_A": "JIMENEZ",
			"cliente_B": "SANCHEZ",
			"cliente_C": "LEONEL",
			"forma_Pago_A": "CASH",
			"forma_Pago_B": "CHEQUE",
			"cuenta_A": "098132409",
			"cuenta_B": "234",
			"forma_cobro": "SPEI",
			"monto": "97000",
			"cve_moneda": "MXN",
			"moneda": "PESOS MEXICANOS",
			"moneda_nal_vigente": "PESO",
			"cve_banco": "773",
			"banco": "SANTANDER",
			"sucursal": "PIE DE LA CUESTA",
			"plaza": "QUERETARO",
			"num_cheque": "3245",
			"tipo_cheque": "PORTADOR",
			"num_cuenta": "098098234",
			"num_cta_2": ""
		}
	};

	$scope.objeto = objeto;

	});