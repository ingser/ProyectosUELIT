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
	$scope.message = "CambiosLineasCredito";
});


app.controller("myControllerCambiosLineasCredito", function($scope) {

var objeto = {
	"cambiosLineasCredito":
	{
		"cve_cte": "025",
		"nombre_cte": "EL CLIENTE",
		"resolucion": "99382",
		"status": "ACTIVO",
		"asegura": "SI",
		"monto": "1,000,000",
		"tot_aut": "980,000",
		"tot_disp": "980,000",
		"fecha_auto": fecha,
		"fecha_venc1": fecha,
		"fecha_venc2": fecha,
		"cve_linea": "990",
		"cve_lineaB": "978837",
		"cve_auto1": "1282",
		"cve_auto2": "38827",
		"cve_auto3": "9993",
		
		"num1": "99283",
		"gar1": "GAR1",
		"descrip1": "DESCR1",
		"observ1": "MacusOBSERV1pana",
		
		"num2": "2",
		"gar2": "GAR 2",
		"descrip2": "DES 2",
		"observ2": "OBS 2",
		
		"num3": "3",
		"gar3": "GAR 3",
		"descrip3": "DES 3",
		"observ3": "OB 3"		
	}
};

$scope.objeto = objeto;

});