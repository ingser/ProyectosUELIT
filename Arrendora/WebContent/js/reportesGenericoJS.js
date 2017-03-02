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


var meses = new Array ("ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE");
var f=new Date();
var fechaCompleta = (f.getDate() + " DE " + meses[f.getMonth()] + " DE " + f.getFullYear());


app.controller("ControllerReporteGenerico", function($scope) {

	var objeto = {
		"repGenerico":
		{
			"titulo_reporte": "COTIZACION DE ARRENDAMIENTO",
			"entidad": "CIUDAD DE MÉXICO, ",
			"fechaCompleta": fechaCompleta,
			"pag_ini": "1",
			"pag_fin": "2",
			"consec_reporte": "R0003",
			"cotizacion": "0402",
			"cve_cliente": "03827",
			"cliente": "CREMERIA DEL BAJIO, SA",
			"atencion": "",
			"tipo_arendamiento": "FINANCIERO",
			"tipo_bien": "MAQUINARIA Y EQUIPO",
			"tipo_moneda": "MXN PESOS",
			"monto_bien": "9,876,2873.00",
			"iva": "98,889.98",
			"opcion_compra": "773,998.89",
			"tipo_de_moneda": "01 MXN PESOS",
			"monto_financiar": "9,887,333.00",
			"comision_apertura": "1,398.98",
			"monto_en_deposito": "99,000",
			"seguro": "0",
			"monto_bien": "9,887,333.00",
			"capital": "9,887,333.00",
			"intereses": "98,887.56",
			"iva_intereses": "8,887.52",
			"tabla": "1",
			"tipo_moneda_3": "MXN PESOS",
			"tipo_fondeo": "RECURSOS PROPIOS",
			"monto_bien_2": "9,887,333.00",
			"monto_financiar_2": "9,887,333.00",
			"tasa_base": "4.0023",
			"diferencial_puntos": "3.5",
			"forma_pago": "MENSUAL",
			"tasa_operacion": "7.88374",
			"tipo_pago": "VENCIDOS",
			"pago_inicial": "0",
			"comision_apertura_2": "83,992.22",
			"enganche": "1,838,887.73",
			"iva_comis_apertura": "2,878.99",
			"iva_enganche": "3,987.90",
			"total": "2,798,893.09"				
		}
	};

	$scope.objeto = objeto;

	});



