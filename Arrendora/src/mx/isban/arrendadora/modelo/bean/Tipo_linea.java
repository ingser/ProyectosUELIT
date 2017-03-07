package mx.isban.arrendadora.modelo.bean;

public class Tipo_linea {

	private String id;
	private String tipo;
	private String linea;
	public Tipo_linea(String id, String tipo, String linea) {
		super();
		this.id = id;
		this.tipo = tipo;
		this.linea = linea;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getLinea() {
		return linea;
	}
	public void setLinea(String linea) {
		this.linea = linea;
	}

}
