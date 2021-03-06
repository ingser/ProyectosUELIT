package mx.isban.arrendadora.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mx.isban.arrendadora.modelo.bean.ClientePruebaBean;
import mx.isban.arrendadora.modelo.contexto.PruebaJSONContexto;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

	@RequestMapping(value = "/obtener", method = RequestMethod.GET)
	public ResponseEntity<ClientePruebaBean> obtenerCliente(){
		
		ClientePruebaBean c = new ClientePruebaBean("1234", "JJO");
		return new ResponseEntity<ClientePruebaBean>(c, HttpStatus.OK);
	}
	
	@RequestMapping(value="/lista", method= RequestMethod.GET)
	public ResponseEntity<List<ClientePruebaBean>> obtenerClientes(){
		
		List<ClientePruebaBean> clientes = new ArrayList<ClientePruebaBean>();
		clientes.add(new ClientePruebaBean("1", "S"));
		clientes.add(new ClientePruebaBean("2", "F"));
		clientes.add(new ClientePruebaBean("3", "O"));
		clientes.add(new ClientePruebaBean("4", "J"));
		
		return new ResponseEntity<List<ClientePruebaBean>>(clientes, HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "/actualizar", method = RequestMethod.POST)
	public ResponseEntity<ClientePruebaBean> actualizar(@RequestBody ClientePruebaBean prueba){
		
		System.out.println("ANTES " + prueba.getId() + " " + prueba.getNombre());
		
		prueba.setId(prueba.getId()+ " SERVER");
		prueba.setNombre(prueba.getNombre()+ " SERVER");
		
		System.out.println("DESPUES " + prueba.getId() + " " + prueba.getNombre());
		
		return new ResponseEntity<ClientePruebaBean>(prueba, HttpStatus.OK);
	}
	
	
	@RequestMapping(value="/auto", method = RequestMethod.POST)
	public ResponseEntity<PruebaJSONContexto> carro(@RequestBody PruebaJSONContexto ctx){
		
		System.out.println("CARRO INICIO");
		
		ctx.getCarro().setMarca(ctx.getCarro().getMarca() +  " SERVER");
		ctx.getCliente().setId(ctx.getCliente().getId() + " SERVER");
		
		System.out.println("CARRO DESPUES");
		
		return new ResponseEntity<PruebaJSONContexto>(ctx, HttpStatus.OK);
	}
	
}
