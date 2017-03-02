//var app = angular.module("demoApp", []);

// Un módulo es un contenedor de controladores, servicios, directivas, filtros, etc.
var app = angular.module("moduloMain", []);

// Un controlador es una función de JavaScript
// La función es construir un modelo para desplegar la Vista.

//var myController = function($scope){
//	$scope.message = "AngularJS Tutorial";
//}

app.controller("myController", function($scope) {
	$scope.message = "Cliente nuevo";
});


app.controller("myControllerFechaValor", function($scope) {
	
	var parametros = {
			first1: "",
			first2: "",
			first3: "",
			
			cte1: "9873",
			cte2: "6522",
			cte3: "9393",
			
			nombre1: "SOLOY SA DE CV",
			nombre2: "BAYER SA DE CV",
			nombre3: "HIGA SA DE CV",
			
			ccargo1: "65827384",
			ccargo2: "65999273",
			ccargo3: "65882212",
			
			impori1: "311,346,234",
			impori2: ".00",
			impori3: "1,456.23",
			
			impordesc1: ".00",
			impordesc2: "123,999.00",
			impordesc3: "3,984,983.00",

			transac1: "",
			transac2: "",
			transac3: "",

			edo1: "T",
			edo2: "PR",
			edo3: "T",

			st1: "N",
			st2: "N",
			st3: "N",

			sdocta1: "",
			sdocta2: "",
			sdocta3: ""
	};
	
	$scope.parametros = parametros;

});


