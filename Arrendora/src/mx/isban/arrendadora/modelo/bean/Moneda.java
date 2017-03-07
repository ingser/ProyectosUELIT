package mx.isban.arrendadora.modelo.bean;

public class Moneda {
	private String id;
	private String cve_moneda;
	private String moneda;
	private String tipo_moneda;
	private String moneda_nal_vigente;
	public Moneda(String id, String cve_moneda, String moneda, String tipo_moneda, String moneda_nal_vigente) {
		super();
		this.id = id;
		this.cve_moneda = cve_moneda;
		this.moneda = moneda;
		this.tipo_moneda = tipo_moneda;
		this.moneda_nal_vigente = moneda_nal_vigente;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_moneda() {
		return cve_moneda;
	}
	public void setCve_moneda(String cve_moneda) {
		this.cve_moneda = cve_moneda;
	}
	public String getMoneda() {
		return moneda;
	}
	public void setMoneda(String moneda) {
		this.moneda = moneda;
	}
	public String getTipo_moneda() {
		return tipo_moneda;
	}
	public void setTipo_moneda(String tipo_moneda) {
		this.tipo_moneda = tipo_moneda;
	}
	public String getMoneda_nal_vigente() {
		return moneda_nal_vigente;
	}
	public void setMoneda_nal_vigente(String moneda_nal_vigente) {
		this.moneda_nal_vigente = moneda_nal_vigente;
	}
 
	
}
