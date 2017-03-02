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
	$scope.message = "LineaCredito";
});


app.controller("myControllerLineaCredito", function($scope) {

var objeto = {
	"lineaCredito":
	{
		"cve_cte1": "5",
		"cve_cte2": "tipo",
		"cve_cte3": "nuevo",
		"resolucion": "S",
		"status": "S",
		"asegura": "Fulano de tal",
		"monto": "jshd880402",
		"tot_autorizado": "Dom conocido",
		"tot_dispuesto": "1",
		"fecha_aut": fecha,
		"fecha_ven": fecha,
		"fecha_ven2": fecha,
		"cve_linea1": "centro",
		"cve_linea2": "99000",
		"cve_auto1": "97",
		"cve_auto2": "9879872",
		"cve_auto3": "989872R",
		
		"num1": "123",
		"gar1": "37662",
		"descr1": "AUTOMOVIL",
		"observ1": "MOD 2007",
		
		"num2": "433",
		"gar2": "5675",
		"descr2": "AUTOMOVIL",
		"observ2": "MOD 2003",
		
		"num3": "665",
		"gar3": "3453",
		"descr3": "TERRENO",
		"observ3": "SIN SERVICIOS",
		
		"num4": "222",
		"gar4": "8837",
		"descr4": "CASA",
		"observ4": "3 REC."
	}
};

$scope.objeto = objeto;

});

