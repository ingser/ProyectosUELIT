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


app.controller("ControllerConsDoctosCobr", function($scope) {

var objeto = {
	"consDoctosCobr":
	{
		"campo_1": "campo1",
		"campo_2": "campo2",
		"a_partir": fecha,
		"celda_1A": "1",
		"celda_1B": "23",
		"celda_1C": "22",
		"celda_1D": "54",
		"celda_1E": "IIE",
		"celda_1F": "JJE",
		"celda_1G": "33",
		"celda_1H": "MM",
		"celda_1I": "MXN",
		"celda_1J": "PESOS",
		"celda_2A": "1",
		"celda_2B": "23",
		"celda_2C": "22",
		"celda_2D": "54",
		"celda_2E": "IIE",
		"celda_2F": "JJE",
		"celda_2G": "33",
		"celda_2H": "MM",
		"celda_2I": "MXN",
		"celda_2J": "PESOS",		
		"celda_3A": "1",
		"celda_3B": "23",
		"celda_3C": "22",
		"celda_3D": "54",
		"celda_3E": "IIE",
		"celda_3F": "JJE",
		"celda_3G": "33",
		"celda_3H": "MM",
		"celda_3I": "MXN",
		"celda_3J": "PESOS",
		"celda_4A": "1",
		"celda_4B": "23",
		"celda_4C": "22",
		"celda_4D": "54",
		"celda_4E": "IIE",
		"celda_4F": "JJE",
		"celda_4G": "33",
		"celda_4H": "MM",
		"celda_4I": "MXN",
		"celda_4J": "PESOS",
		"celda_5A": "1",
		"celda_5B": "23",
		"celda_5C": "22",
		"celda_5D": "celda_54",
		"celda_5E": "IIE",
		"celda_5F": "JJE",
		"celda_5G": "33",
		"celda_5H": "MM",
		"celda_5I": "MXN",
		"celda_5J": "PESOS",
		"celda_6A": "1",
		"celda_6B": "23",
		"celda_6C": "22",
		"celda_6D": "celda_54",
		"celda_6E": "IIE",
		"celda_6F": "JJE",
		"celda_6G": "33",
		"celda_6H": "MM",
		"celda_6I": "MXN",
		"celda_6J": "PESOS",
		"celda_7A": "1",
		"celda_7B": "23",
		"celda_7C": "22",
		"celda_7D": "54",
		"celda_7E": "IIE",
		"celda_7F": "JJE",
		"celda_7G": "33",
		"celda_7H": "MM",
		"celda_7I": "MXN",
		"celda_7J": "PESOS",
		"celda_8A": "1",
		"celda_8B": "23",
		"celda_8C": "22",
		"celda_8D": "54",
		"celda_8E": "IIE",
		"celda_8F": "JJE",
		"celda_8G": "33",
		"celda_8H": "MM",
		"celda_8I": "MXN",
		"celda_8J": "PESOS"
	}
};

$scope.objeto = objeto;

});