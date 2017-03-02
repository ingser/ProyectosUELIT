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
	$scope.message = "ProspCtes";
});


app.controller("myControllerProspCtes", function($scope) {

var objeto = {
	"prospCtes":
	{
		"edo_cte": "ACTVO",
		"tipo_persona": "FISICA",
		"clave": "JNS76",
		"nombre": "PERENGANO DE LEON",
		"rfc": "OLKS762212",
		"cedula": "F7637",
		"fecha_contacto": fecha,
		"cve_prom": "Z25",
		"promotor": "EL PROMOTOR ESTRELLA",
		"cve_contacto": "A23",
		"contacto": "AGENTE DE CONTACTO",
		"tel1": "234534",
		"ext1": "32",
		"tel2": "345344",
		"ext2": "65",
		"sector": "45",
		"senicreb": "SENICREB",
		"faxA": "34564456",
		"extA": "22",
		"faxB": "5874764",
		"extB": "12",
		"act": "11",
		"senicrebAct": "DFA12",
		"edo_cta": "99000",
		"dia_cobro": "23",
		"forma_pago": "SPEI",
		"cve_buc": "7636",
		"sucursal": "882",
		"cobranza": "PIE DE LA CUESTA"
	}
};

$scope.objeto = objeto;

});



