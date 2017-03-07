package mx.isban.arrendadora.modelo.bean;

public class Conceptos {
	private String id;
	private String cve_1A;
	private String cve_1B;
	private String concepto;
	private String monto;
	private String monto_cobrado;
	public Conceptos(String id, String cve_1a, String cve_1b, String concepto, String monto, String monto_cobrado) {
		super();
		this.id = id;
		cve_1A = cve_1a;
		cve_1B = cve_1b;
		this.concepto = concepto;
		this.monto = monto;
		this.monto_cobrado = monto_cobrado;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_1A() {
		return cve_1A;
	}
	public void setCve_1A(String cve_1a) {
		cve_1A = cve_1a;
	}
	public String getCve_1B() {
		return cve_1B;
	}
	public void setCve_1B(String cve_1b) {
		cve_1B = cve_1b;
	}
	public String getConcepto() {
		return concepto;
	}
	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}
	public String getMonto() {
		return monto;
	}
	public void setMonto(String monto) {
		this.monto = monto;
	}
	public String getMonto_cobrado() {
		return monto_cobrado;
	}
	public void setMonto_cobrado(String monto_cobrado) {
		this.monto_cobrado = monto_cobrado;
	}

}
