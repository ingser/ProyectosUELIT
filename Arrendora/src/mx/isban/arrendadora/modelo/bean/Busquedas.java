package mx.isban.arrendadora.modelo.bean;

public class Busquedas {

	private String id;
	private String cadena_busqueda;
	private String respuesta;
	public Busquedas(String id, String cadena_busqueda, String respuesta) {
		super();
		this.id = id;
		this.cadena_busqueda = cadena_busqueda;
		this.respuesta = respuesta;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCadena_busqueda() {
		return cadena_busqueda;
	}
	public void setCadena_busqueda(String cadena_busqueda) {
		this.cadena_busqueda = cadena_busqueda;
	}
	public String getRespuesta() {
		return respuesta;
	}
	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}
	

}
