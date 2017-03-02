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

app.controller("myControllerControlDocum", function($scope) {

	var objeto = {
		"controlDocum":
		{
			"cve_tipo_doc": "5",
			"tipo_doc": "tipo",
			"tipo_arrend": "SIMPLE",
			"cve_cte": "S213SD",
			"cliente": "CLIENTE FULANO",
			"contrato": "SADF34",
			"anexo": "jFFd880402",
			"pagare": "2433",
			"responsiva": "NO",
			"addendum": "WQER333",
			"convenio": "235DD",
			"cesion": "99000",
			"prenda": "9700",
			"subarrendamiento": "NO",
			"reestructura": "NO",
			"otro": "NA",
			"envio_firma_cte": fecha,
			"regreso_firmado_cte": fecha,
			"solicitud_cheq": fecha,
			"entrega_firmas_internas": fecha,
			"envio_ratificar": fecha,
			"regreso_ratificacion": fecha,
			"entrega_cte": fecha,
			"recepcion_acuse": fecha,
			"entrega_archivo": fecha,
		}
	};

	$scope.objeto = objeto;

	});