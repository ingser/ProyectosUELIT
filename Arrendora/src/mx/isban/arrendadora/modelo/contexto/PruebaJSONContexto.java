package mx.isban.arrendadora.modelo.contexto;

import mx.isban.arrendadora.modelo.bean.CarroPruebaBean;
import mx.isban.arrendadora.modelo.bean.ClientePruebaBean;

public class PruebaJSONContexto {

	private CarroPruebaBean carro;
	private ClientePruebaBean cliente;
	
	
	public PruebaJSONContexto(){
		
	}
	
	public PruebaJSONContexto(CarroPruebaBean carro, ClientePruebaBean cliente){
		
	}

	public CarroPruebaBean getCarro() {
		return carro;
	}

	public void setCarro(CarroPruebaBean carro) {
		this.carro = carro;
	}

	public ClientePruebaBean getCliente() {
		return cliente;
	}

	public void setCliente(ClientePruebaBean cliente) {
		this.cliente = cliente;
	}
	
	
	
}
