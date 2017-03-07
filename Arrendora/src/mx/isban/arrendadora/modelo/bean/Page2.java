package mx.isban.arrendadora.modelo.bean;

public class Page2 {
	private String id;
	private String cotizac;
	private String tabla_amortizac;
	private String contin;
	public Page2(String id, String cotizac, String tabla_amortizac, String contin) {
		super();
		this.id = id;
		this.cotizac = cotizac;
		this.tabla_amortizac = tabla_amortizac;
		this.contin = contin;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCotizac() {
		return cotizac;
	}
	public void setCotizac(String cotizac) {
		this.cotizac = cotizac;
	}
	public String getTabla_amortizac() {
		return tabla_amortizac;
	}
	public void setTabla_amortizac(String tabla_amortizac) {
		this.tabla_amortizac = tabla_amortizac;
	}
	public String getContin() {
		return contin;
	}
	public void setContin(String contin) {
		this.contin = contin;
	}

}
