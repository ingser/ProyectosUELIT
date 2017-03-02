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



app.controller("myControllerInfoCliente", function($scope) {

var objeto = {
	"infoCliente":
	{
		"edo_cliente": "ACT",
		"clave": "24",
		"cve_buc": "2345",
		"nombre": "SUTANO",
		"tipo_persona": "F",
		"ap_paterno": "SOLANO",
		"ap_materno": "ARCHUNDIA",
		"rfc": "JJSM3288273",
		"curp": "JJDSHN388273MMD",
		"tipo_identificacion": "INE",
		"num_identificacion": "883728",
		"tipo_domicilio": "PROPIO",
		"dom_extranjero": "NA",
		"fecha_contacto": fecha,
		"cedula": "0981SFD",
		"cve_sect_senicreb": "234534",
		"sect_senicreb": "SECTOR",
		"cve_act_senicreb": "43523",
		"act_senicreb": "SENICREB",
		"cve_promotor": "2435324",
		"promotor": "PROMOTOR",
		"cve_contacto": "234",
		"contacto": "MISMO",
		"dia_cobro": fecha,
		"forma_pago": "CHEQUE",
		"edo_cuenta": "SI",
		"cve_suc_cobranza": "884327",
		"suc_cobranza": "CENTRO"
	}
};

$scope.objeto = objeto;

});