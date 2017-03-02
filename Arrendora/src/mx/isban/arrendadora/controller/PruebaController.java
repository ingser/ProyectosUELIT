package mx.isban.arrendadora.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/prueba")
public class PruebaController {

	@RequestMapping(value = "/saludo", method = RequestMethod.GET)
	public String hola(){
		
		return "HOLA REST";
	}
	
}
