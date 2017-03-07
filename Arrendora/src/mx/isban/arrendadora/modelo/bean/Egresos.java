package mx.isban.arrendadora.modelo.bean;

public class Egresos {
	private String id;
	private String transaccion;
	private String fec_captura;
	private String fec_emision;
	private String fec_programada;
	private String beneficiario_campo1;
	private String beneficiario_campo2;
	private String beneficiario_campo3;
	private String monto;
	private String tipo_pago;
	private String tipo_cheque;
	private String cuenta_emisora_campo1;
	private String cuenta_emisora_campo2;
	private String cuenta_emisora_campo3;
	private String num_cheque;
	private String num_cuenta;
	private String concepto1;
	private String concepto2;
	private String concepto3;
	public Egresos(String id, String transaccion, String fec_captura, String fec_emision, String fec_programada,
			String beneficiario_campo1, String beneficiario_campo2, String beneficiario_campo3, String monto,
			String tipo_pago, String tipo_cheque, String cuenta_emisora_campo1, String cuenta_emisora_campo2,
			String cuenta_emisora_campo3, String num_cheque, String num_cuenta, String concepto1, String concepto2,
			String concepto3) {
		super();
		this.id = id;
		this.transaccion = transaccion;
		this.fec_captura = fec_captura;
		this.fec_emision = fec_emision;
		this.fec_programada = fec_programada;
		this.beneficiario_campo1 = beneficiario_campo1;
		this.beneficiario_campo2 = beneficiario_campo2;
		this.beneficiario_campo3 = beneficiario_campo3;
		this.monto = monto;
		this.tipo_pago = tipo_pago;
		this.tipo_cheque = tipo_cheque;
		this.cuenta_emisora_campo1 = cuenta_emisora_campo1;
		this.cuenta_emisora_campo2 = cuenta_emisora_campo2;
		this.cuenta_emisora_campo3 = cuenta_emisora_campo3;
		this.num_cheque = num_cheque;
		this.num_cuenta = num_cuenta;
		this.concepto1 = concepto1;
		this.concepto2 = concepto2;
		this.concepto3 = concepto3;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTransaccion() {
		return transaccion;
	}
	public void setTransaccion(String transaccion) {
		this.transaccion = transaccion;
	}
	public String getFec_captura() {
		return fec_captura;
	}
	public void setFec_captura(String fec_captura) {
		this.fec_captura = fec_captura;
	}
	public String getFec_emision() {
		return fec_emision;
	}
	public void setFec_emision(String fec_emision) {
		this.fec_emision = fec_emision;
	}
	public String getFec_programada() {
		return fec_programada;
	}
	public void setFec_programada(String fec_programada) {
		this.fec_programada = fec_programada;
	}
	public String getBeneficiario_campo1() {
		return beneficiario_campo1;
	}
	public void setBeneficiario_campo1(String beneficiario_campo1) {
		this.beneficiario_campo1 = beneficiario_campo1;
	}
	public String getBeneficiario_campo2() {
		return beneficiario_campo2;
	}
	public void setBeneficiario_campo2(String beneficiario_campo2) {
		this.beneficiario_campo2 = beneficiario_campo2;
	}
	public String getBeneficiario_campo3() {
		return beneficiario_campo3;
	}
	public void setBeneficiario_campo3(String beneficiario_campo3) {
		this.beneficiario_campo3 = beneficiario_campo3;
	}
	public String getMonto() {
		return monto;
	}
	public void setMonto(String monto) {
		this.monto = monto;
	}
	public String getTipo_pago() {
		return tipo_pago;
	}
	public void setTipo_pago(String tipo_pago) {
		this.tipo_pago = tipo_pago;
	}
	public String getTipo_cheque() {
		return tipo_cheque;
	}
	public void setTipo_cheque(String tipo_cheque) {
		this.tipo_cheque = tipo_cheque;
	}
	public String getCuenta_emisora_campo1() {
		return cuenta_emisora_campo1;
	}
	public void setCuenta_emisora_campo1(String cuenta_emisora_campo1) {
		this.cuenta_emisora_campo1 = cuenta_emisora_campo1;
	}
	public String getCuenta_emisora_campo2() {
		return cuenta_emisora_campo2;
	}
	public void setCuenta_emisora_campo2(String cuenta_emisora_campo2) {
		this.cuenta_emisora_campo2 = cuenta_emisora_campo2;
	}
	public String getCuenta_emisora_campo3() {
		return cuenta_emisora_campo3;
	}
	public void setCuenta_emisora_campo3(String cuenta_emisora_campo3) {
		this.cuenta_emisora_campo3 = cuenta_emisora_campo3;
	}
	public String getNum_cheque() {
		return num_cheque;
	}
	public void setNum_cheque(String num_cheque) {
		this.num_cheque = num_cheque;
	}
	public String getNum_cuenta() {
		return num_cuenta;
	}
	public void setNum_cuenta(String num_cuenta) {
		this.num_cuenta = num_cuenta;
	}
	public String getConcepto1() {
		return concepto1;
	}
	public void setConcepto1(String concepto1) {
		this.concepto1 = concepto1;
	}
	public String getConcepto2() {
		return concepto2;
	}
	public void setConcepto2(String concepto2) {
		this.concepto2 = concepto2;
	}
	public String getConcepto3() {
		return concepto3;
	}
	public void setConcepto3(String concepto3) {
		this.concepto3 = concepto3;
	}

}
