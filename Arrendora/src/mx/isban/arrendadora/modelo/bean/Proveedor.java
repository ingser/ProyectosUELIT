package mx.isban.arrendadora.modelo.bean;

public class Proveedor {

	private String id;
	private String clave;
	private String nombre;
	private String atencion;
	private String rfc;
	public Proveedor(String id, String clave, String nombre, String atencion, String rfc) {
		super();
		this.id = id;
		this.clave = clave;
		this.nombre = nombre;
		this.atencion = atencion;
		this.rfc = rfc;
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
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getAtencion() {
		return atencion;
	}
	public void setAtencion(String atencion) {
		this.atencion = atencion;
	}
	public String getRfc() {
		return rfc;
	}
	public void setRfc(String rfc) {
		this.rfc = rfc;
	}

}
