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

app.controller("myControllerDatosSubCotiz", function($scope) {

var objeto = {
	"datosSubCotiz":
	{
		"subcotizacion": "5",
		"tasa_ori": "2",
		"tasa_fija": "3",
		"iva": "16",
		"plazo_arrendadora": "12",
		"plazo_seguro": "12",
		"cve_moneda": "MXN",
		"moneda": "PESOS MEXICANOS",
		"tasa_en_curva": "1",
		"periodicidad": "SEM",
		"monto_deposito": "200",
		"prox_venc": fecha,
		"residual": "97",
		"fecha_inicio": fecha,
		"fecha_final": fecha,
		"ultimo_periodo_generado": "3",
		"ultimo_periodo_generado_seguro": "2",
		"tasa_base": "12",
		"indicador_1": "1",
		"indicador_2": "2",
		"indicador_3": "3",
		"dif_1": "D",
		"dif_2": "D2",
		"tasa_curva": "34",
		"ind_origen1": "23",
		"ind_origen2": "21",
		"tipo_pago": "CASH",
		"finan_seguro": "SI",
		"renta_anticipada": "NO",
		"si_capital": "SI",
		"si_seguro": "SI",
		"status": "ACT",
		"recurso1": "BANCO",
		"recurso2": "FINANCIERA",
		"iva_diferido": "15"
	}
};

$scope.objeto = objeto;

});