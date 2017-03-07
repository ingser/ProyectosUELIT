package mx.isban.arrendadora.modelo.bean;

public class Documentos {
	private String id;
	private String tran;
	private String cobro;
	private String fechaDoc;
	private String fechaCobro;
	private String montoDocto;
	private String montoCobrado;
	private String tranPago;
	private String origen;
	public Documentos(String id, String tran, String cobro, String fechaDoc, String fechaCobro, String montoDocto,
			String montoCobrado, String tranPago, String origen) {
		super();
		this.id = id;
		this.tran = tran;
		this.cobro = cobro;
		this.fechaDoc = fechaDoc;
		this.fechaCobro = fechaCobro;
		this.montoDocto = montoDocto;
		this.montoCobrado = montoCobrado;
		this.tranPago = tranPago;
		this.origen = origen;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTran() {
		return tran;
	}
	public void setTran(String tran) {
		this.tran = tran;
	}
	public String getCobro() {
		return cobro;
	}
	public void setCobro(String cobro) {
		this.cobro = cobro;
	}
	public String getFechaDoc() {
		return fechaDoc;
	}
	public void setFechaDoc(String fechaDoc) {
		this.fechaDoc = fechaDoc;
	}
	public String getFechaCobro() {
		return fechaCobro;
	}
	public void setFechaCobro(String fechaCobro) {
		this.fechaCobro = fechaCobro;
	}
	public String getMontoDocto() {
		return montoDocto;
	}
	public void setMontoDocto(String montoDocto) {
		this.montoDocto = montoDocto;
	}
	public String getMontoCobrado() {
		return montoCobrado;
	}
	public void setMontoCobrado(String montoCobrado) {
		this.montoCobrado = montoCobrado;
	}
	public String getTranPago() {
		return tranPago;
	}
	public void setTranPago(String tranPago) {
		this.tranPago = tranPago;
	}
	public String getOrigen() {
		return origen;
	}
	public void setOrigen(String origen) {
		this.origen = origen;
	}

}
