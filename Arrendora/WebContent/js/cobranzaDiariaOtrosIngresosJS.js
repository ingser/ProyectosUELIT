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
	$scope.message = "CobDiariaOtrosIngr";
});


app.controller("myControllerCobDiariaOtrosIngr", function($scope) {

var objeto = {
	"cobDiariaOtrosIngr":
	{
		"num_transacc": "5",
		"fecha_capt": fecha,
		"afectar_saldo": "SI",
		"fecha_valor": fecha,
		"tipo_cliente1": "VIP",
		"tipo_cliente2": "FISICA",
		"tipo_cliente3": "",
		"formaPago1": "05",
		"formaPago2": "CARGO TDC",
		"cuenta_A": "877392339-0",
		"cuenta_B": "",
		"forma_cobro": "MENSUAL",
		"monto_cobrado": "83,882.92",
		"cve_moneda": "MXN",
		"moneda": "PESOS MEXICANOS",
		"MN_vigente": "PESOS",
		"cve_banco": "033",
		"banco": "SANTANDER",
		"sucursal": "PIE DE LA CUESTA 77832",
		"num_cheque": "0029883",
		"plaza": "QUERETARO",
		"tipo_cheque": "CERTIFICADO",
		"num_cuenta": "8837289-0",
		"concepto": "MENSUALIDAD 3",
		"conceptoA": "",
		"conceptoB": ""
	}
};

$scope.objeto = objeto;

});