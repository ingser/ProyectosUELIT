//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myController", function($scope) {
	$scope.message = "ConsDoctosCobrPG2";
});


app.controller("myControllerConsDoctosCobrPG2", function($scope) {

var objeto = {
	"consDoctosCobrPG2":
	{
		"tran1": "1",
		"cobro1": "tipo",
		"fechaDoc1": "nuevo",
		"fechaCobro1": "S",
		"montoDocto1": "S",
		"montoCobrado1": "Fulano de tal",
		"tranPago1": "jaaaa880402",
		"origen1": "Dom conocido",
		
		"tran2": "2",
		"cobro2": "tipo",
		"fechaDoc2": "nuevo",
		"fechaCobro2": "S",
		"montoDocto2": "S",
		"montoCobrado2": "Fulano de tal",
		"tranPago2": "sdgfds880402",
		"origen2": "Dom conocido",

		"tran3": "3",
		"cobro3": "tipo",
		"fechaDoc3": "nuevo",
		"fechaCobro3": "S",
		"montoDocto3": "S",
		"montoCobrado3": "Fulano de tal",
		"tranPago3": "asfd880402",
		"origen3": "Dom conocido",

		"tran4": "4",
		"cobro4": "tipo",
		"fechaDoc4": "nuevo",
		"fechaCobro4": "S",
		"montoDocto4": "S",
		"montoCobrado4": "Fulano de tal",
		"tranPago4": "jshd880402",
		"origen4": "Dom conocido",

		"tran5": "5",
		"cobro5": "_",
		"fechaDoc5": "nu_vo",
		"fechaCobro5": "_",
		"montoDocto5": "_",
		"montoCobrado5": "__",
		"tranPago5": "__",
		"origen5": "___",

		"tran6": "6",
		"cobro6": "*",
		"fechaDoc6": "*",
		"fechaCobro6": "*",
		"montoDocto6": "*",
		"montoCobrado6": "**",
		"tranPago6": "**",
		"origen6": "*",

		"tran7": "7",
		"cobro7": "+",
		"fechaDoc7": "+",
		"fechaCobro7": "+",
		"montoDocto7": "+",
		"montoCobrado7": "++",
		"tranPago7": "++",
		"origen7": "Dom ++",

		"tran8": "8",
		"cobro8": "-",
		"fechaDoc8": "-",
		"fechaCobro8": "-",
		"montoDocto8": "-",
		"montoCobrado8": "--",
		"tranPago8": "--",
		"origen8": "--",

		"tran9": "9",
		"cobro9": "cobro9",
		"fechaDoc9": "fechaDoc9",
		"fechaCobro9": "fechaCobro9",
		"montoDocto9": "montoDocto9",
		"montoCobrado9": "montoCobrado9",
		"tranPago9": "tranPago9",
		"origen9": "origen9"
	}
};

$scope.objeto = objeto;

});