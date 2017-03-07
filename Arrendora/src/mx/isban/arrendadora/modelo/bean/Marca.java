package mx.isban.arrendadora.modelo.bean;

public class Marca {
	private String id;
	private String clave;
	private String descripcion;
	public Marca(String id, String clave, String descripcion) {
		super();
		this.id = id;
		this.clave = clave;
		this.descripcion = descripcion;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getClave() {
		return clave;
	}
	public void setClave(String clave) {
		this.clave = clave;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
