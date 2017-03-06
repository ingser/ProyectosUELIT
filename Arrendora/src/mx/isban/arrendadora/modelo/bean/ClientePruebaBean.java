package mx.isban.arrendadora.modelo.bean;


public class ClientePruebaBean {

	private String id;
	private String nombre;
	
	public ClientePruebaBean (String id, String nombre){
		this.id = id;
		this.nombre = nombre;
	}
	
	public ClientePruebaBean(){
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
//	
}
