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


app.controller("ControllerPage13", function($scope) {

	var objeto = {
		"page13":
		{
			"tabla": "TABLA",
			"cve_tipo_recurso": "342",
			"tipo_recurso": "EXTER",
			"monto_apoyo": "123",
			"cve_moneda": "MXN",
			"moneda": "PESOS MEX",
			"tipo_cambio": "22",
			"factor_iva": "15",
			"iva_diferido": "NO",
			"monto_bienes": "100000",
			"iva": "12000",
			"monto_iva": "12300",
			"indicador_1": "0",
			"indicador_2": "97",
			"indicador_3": "12",
			"tipo_diferencial": "SIMPLE",
			"valor_dif": "36",
			"plazo": "60",
			"per": "PER",
			"renta_anticipada": "NO",
			"tipo_pago": "22",
			"tasa_curva": "12",
			"fact_int": "16",
			"num_rentas_deposito": "2",
			"monto": "87000",
			"tipo_residual": "NO",
			"porcentaje": "2",
			"monto_residual": "0",
			"ivcomape": "BANCARIO",
			"comision_apertura": "SI",
			"monto_comis_aper1": "12000",
			"monto_comis_aper2": "0",
			"enganchePORCENTAJE": "23",
			"enganchePESOS": "24000",
			"monto_financiado": "BANCARIO",
			"seguro1": "BANCARIO",
			"seguro2": "",
			"seguro3": ""
		}
	};

	$scope.objeto = objeto;

	});