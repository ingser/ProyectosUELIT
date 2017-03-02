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


app.controller("myControllerMonitorTesoreria", function($scope) {

	var objeto = {
		"monitorTesoreria":
		{
			"celda_1A": "",
			"celda_1B": "990",
			"celda_1C": "nuevo",
			"celda_1D": "BAYER SA DE CV",
			"celda_1E": "987123213",
			"celda_1F": "3,009,384",
			"celda_1G": "12,000",
			"celda_1H": "",
			"celda_1I": "TN",
			"celda_1J": "",
			
			"celda_2A": "",
			"celda_2B": "990",
			"celda_2C": "nuevo",
			"celda_2D": "BAYER SA DE CV",
			"celda_2E": "987123213",
			"celda_2F": "13,009,384",
			"celda_2G": "12,000",
			"celda_2H": "",
			"celda_2I": "TN",
			"celda_2J": "",
			
			"celda_3A": "",
			"celda_3B": "990",
			"celda_3C": "nuevo",
			"celda_3D": "BAYER SA DE CV",
			"celda_3E": "987123213",
			"celda_3F": "13,009,384",
			"celda_3G": "12,000",
			"celda_3H": "",
			"celda_3I": "TN",
			"celda_3J": "",
			
			"celda_4A": "",
			"celda_4B": "990",
			"celda_4C": "nuevo",
			"celda_4D": "BAYER SA DE CV",
			"celda_4E": "987123213",
			"celda_4F": "13,009,384",
			"celda_4G": "12,000",
			"celda_4H": "",
			"celda_4I": "TN",
			"celda_4J": "",
			
			"celda_5A": "",
			"celda_5B": "990",
			"celda_5C": "nuevo",
			"celda_5D": "BAYER SA DE CV",
			"celda_5E": "987123213",
			"celda_5F": "13,009,384",
			"celda_5G": "12,000",
			"celda_5H": "",
			"celda_5I": "TN",
			"celda_5J": "",
			
			"celda_6A": "",
			"celda_6B": "990",
			"celda_6C": "nuevo",
			"celda_6D": "BAYER SA DE CV",
			"celda_6E": "987123213",
			"celda_6F": "13,009,384",
			"celda_6G": "12,000",
			"celda_6H": "",
			"celda_6I": "TN",
			"celda_6J": "",
			
			"celda_7A": "",
			"celda_7B": "990",
			"celda_7C": "nuevo",
			"celda_7D": "BAYER SA DE CV",
			"celda_7E": "987123213",
			"celda_7F": "13,009,384",
			"celda_7G": "12,000",
			"celda_7H": "",
			"celda_7I": "TN",
			"celda_7J": "",
			
			"celda_8A": "",
			"celda_8B": "990",
			"celda_8C": "nuevo",
			"celda_8D": "BAYER SA DE CV",
			"celda_8E": "987123213",
			"celda_8F": "13,009,384",
			"celda_8G": "12,000",
			"celda_8H": "",
			"celda_8I": "TN",
			"celda_8J": "",
			
			"celda_9A": "",
			"celda_9B": "90",
			"celda_9C": "nuevo",
			"celda_9D": "BAYER SA DE CV",
			"celda_9E": "987123213",
			"celda_9F": "13,009,384",
			"celda_9G": "12,000",
			"celda_9H": "",
			"celda_9I": "TN",
			"celda_9J": "",
			
			"celda_10A": "",
			"celda_10B": "990",
			"celda_10C": "nuevo",
			"celda_10D": "BAYER SA DE CV",
			"celda_10E": "987123213",
			"celda_10F": "13,009,384",
			"celda_10G": "12,000",
			"celda_10H": "",
			"celda_10I": "TN",
			"celda_10J": "",
			
			"celda_11A": "",
			"celda_11B": "990",
			"celda_11C": "nuevo",
			"celda_11D": "BAYER SA DE CV",
			"celda_11E": "987123213",
			"celda_11F": "13,009,384",
			"celda_11G": "12,000",
			"celda_11H": "",
			"celda_11I": "TN",
			"celda_11J": "",			
			
			"total_cobrar": "1000",
			"total_cobrado": "1000",
			"monto_pendiente": "0"
		}
	};

	$scope.objeto = objeto;

	});