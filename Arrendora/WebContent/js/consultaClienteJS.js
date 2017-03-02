//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

app.controller("myController", function($scope) {
	$scope.message = "ConsultaCliente";
});


app.controller("myControllerConsultaCliente", function($scope) {

var objeto = {
	"consultaCliente":
	{
		"cliente_cve": "5",
		"cliente_nombre": "NOMBRE DEL CLIENTE",
		"rfc": "JUSH368473",
		"homoclave": "G73",
		"tipo_persona": "F",
		"status": "ACTIVO",
		"cve_buc": "JUS66382",
		"foba": "NO",
		"contacto": "19",
		"cedula": "Y7734",
		"segmento": "FINANC",
		"cnbyv": "99000",
		"suc_seg": "97",
		"promotor_cve": "72",
		"promotor_nomb": "PROMOTOR",
		"tel1": "88273862",
		"ext1": "37",
		"tel2": "",
		"ext2": "",
		"edoCta": "88374-0",
		"suc_Cob": "034",
		"sect_Senicreb": "22",
		"sect_Contratos": "12",
		"gpo_Contratos": "SI",
		"promotor_nomb": "PROMOTOR 2",
		"forma_pago": "CHEQUE",
		"dia_cobro": "22",
		"act_senicreb": "NO",
		"act_banxico": "SI",
		"localidad": "Macuspana",
		"autorizado": "L GENARO",
		"dispuesto": "SI",
		"dispuestoBIS": "92"
	}
};

$scope.objeto = objeto;

});