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
	$scope.message = "DatosComplAvalMoral";
});


app.controller("myControllerDatosComplAvalMoral", function($scope) {

var objeto = {
	"datosComplAvalMoral":
	{
		"tel1": "477388726",
		"ext1": "321",
		"tel2": "88374233",
		"ext2": "34",
		"fax": "88477387",
		"extFax": "2273",
		"numEscritura": "880402",
		"fechaEscrit": fecha,
		"numNotario": "51",
		"nomNotario": "EL NOTARIO",
		"lugarNotario": "QUERETARO",
		"regPublico": "99000",
		"lugarReg": "QRO",
		
		"obsA1": "FECHA PAGO",
		"obsA2": "DIAS 20 DE CADA MES",
		"obsB1": "",
		"obsB2": "",
		"obsC1": "",
		"obsC2": "",
		"obsD1": "",
		"obsD2": "",
		"obsE1": "",
		"obsE2": ""		
	}
};

$scope.objeto = objeto;

});