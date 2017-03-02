//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

//var myController = function($scope){
//	$scope.message = "AngularJS Tutorial";
//}


var date = new Date();
var d  = date.getDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var fecha = day + "/" + month + "/" + year;




app.controller("myController", function($scope) {
	$scope.message = "Factura";
});



app.controller("myControllerFactura", function($scope) {
		var objeto = {
			"factura":
			{
				"cve_cliente": "372",
				"cliente": "COCINAS QUETZAL, S.A.",
				"num_ingreso": "9928",
				"num_factura": "23211",
				"cve_prov": "01",
				"proveedor": "DEL CENTRO, S.A.",
				"fecha_fact": fecha,
				"fecha_recep": fecha,
				"fecha_pago": fecha,
				"cve_arrend": "882",
				"arrendadora": "LA CONFIABLE",
				"monto": "15,625.76",
				"iva": "1,562.00",
				"cve_moneda": "MXN",
				"moneda": "PESOS MEXICANOS",
				"tipo_cambio": "20.12",
				"num_contrarecibo": "8826",
				"cotizacion": "S",
				"contrato": "992836",
				"anexo": "N",
				"cve_bien": "022",
				"tipo_bien": "INMUEBLE"
				
				
			}
		};

		$scope.objeto = objeto;

		});
