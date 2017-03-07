package mx.isban.arrendadora.modelo.bean;

public class Promotor {
	private String id;
	private String cve_promotor;
	private String nombre_promotor;
	private String nombre_promotor2;
	public Promotor(String id, String cve_promotor, String nombre_promotor, String nombre_promotor2) {
		super();
		this.id = id;
		this.cve_promotor = cve_promotor;
		this.nombre_promotor = nombre_promotor;
		this.nombre_promotor2 = nombre_promotor2;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_promotor() {
		return cve_promotor;
	}
	public void setCve_promotor(String cve_promotor) {
		this.cve_promotor = cve_promotor;
	}
	public String getNombre_promotor() {
		return nombre_promotor;
	}
	public void setNombre_promotor(String nombre_promotor) {
		this.nombre_promotor = nombre_promotor;
	}
	public String getNombre_promotor2() {
		return nombre_promotor2;
	}
	public void setNombre_promotor2(String nombre_promotor2) {
		this.nombre_promotor2 = nombre_promotor2;
	}
	

}
