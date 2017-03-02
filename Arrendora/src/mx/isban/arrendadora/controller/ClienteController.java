package mx.isban.arrendadora.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mx.isban.arrendadora.modelo.bean.Cliente;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

	@RequestMapping(value = "/obtener", method = RequestMethod.GET)
	public ResponseEntity<Cliente> obtenerCliente(){
		
		Cliente c = new Cliente("1234", "JJO");
		return new ResponseEntity<Cliente>(c, HttpStatus.OK);
	}
	
	@RequestMapping(value="/lista", method= RequestMethod.GET)
	public ResponseEntity<List<Cliente>> obtenerClientes(){
		
		List<Cliente> clientes = new ArrayList<Cliente>();
		clientes.add(new Cliente("1", "S"));
		clientes.add(new Cliente("2", "F"));
		clientes.add(new Cliente("3", "O"));
		clientes.add(new Cliente("4", "J"));
		
		return new ResponseEntity<List<Cliente>>(clientes, HttpStatus.OK);
		
	}
	
}
