package mx.isban.arrendadora.modelo.bean;

public class Cobranza {
	private String id;
	private String num_transacc;
	private String fecha_captura;
	private String afectar_saldo;
	private String fecha_valor;
	private String cliente_A;
	private String cliente_B;
	private String cliente_C;
	private String forma_Pago_A;
	private String forma_Pago_B;
	private String cuenta_A;
	private String cuenta_B;
	private String forma_cobro;
	private String monto_cobrado;
	private String num_cheque;
	private String tipo_cheque;
	private String num_cuenta;
	private String num_cuenta_2;
	private String tipo_cliente1;
	private String tipo_cliente2;
	private String tipo_cliente3;
	private String concepto;
	private String conceptoA;
	private String conceptoB;
	public Cobranza(String id, String num_transacc, String fecha_captura, String afectar_saldo, String fecha_valor,
			String cliente_A, String cliente_B, String cliente_C, String forma_Pago_A, String forma_Pago_B,
			String cuenta_A, String cuenta_B, String forma_cobro, String monto_cobrado, String num_cheque,
			String tipo_cheque, String num_cuenta, String num_cuenta_2, String tipo_cliente1, String tipo_cliente2,
			String tipo_cliente3, String concepto, String conceptoA, String conceptoB) {
		super();
		this.id = id;
		this.num_transacc = num_transacc;
		this.fecha_captura = fecha_captura;
		this.afectar_saldo = afectar_saldo;
		this.fecha_valor = fecha_valor;
		this.cliente_A = cliente_A;
		this.cliente_B = cliente_B;
		this.cliente_C = cliente_C;
		this.forma_Pago_A = forma_Pago_A;
		this.forma_Pago_B = forma_Pago_B;
		this.cuenta_A = cuenta_A;
		this.cuenta_B = cuenta_B;
		this.forma_cobro = forma_cobro;
		this.monto_cobrado = monto_cobrado;
		this.num_cheque = num_cheque;
		this.tipo_cheque = tipo_cheque;
		this.num_cuenta = num_cuenta;
		this.num_cuenta_2 = num_cuenta_2;
		this.tipo_cliente1 = tipo_cliente1;
		this.tipo_cliente2 = tipo_cliente2;
		this.tipo_cliente3 = tipo_cliente3;
		this.concepto = concepto;
		this.conceptoA = conceptoA;
		this.conceptoB = conceptoB;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNum_transacc() {
		return num_transacc;
	}
	public void setNum_transacc(String num_transacc) {
		this.num_transacc = num_transacc;
	}
	public String getFecha_captura() {
		return fecha_captura;
	}
	public void setFecha_captura(String fecha_captura) {
		this.fecha_captura = fecha_captura;
	}
	public String getAfectar_saldo() {
		return afectar_saldo;
	}
	public void setAfectar_saldo(String afectar_saldo) {
		this.afectar_saldo = afectar_saldo;
	}
	public String getFecha_valor() {
		return fecha_valor;
	}
	public void setFecha_valor(String fecha_valor) {
		this.fecha_valor = fecha_valor;
	}
	public String getCliente_A() {
		return cliente_A;
	}
	public void setCliente_A(String cliente_A) {
		this.cliente_A = cliente_A;
	}
	public String getCliente_B() {
		return cliente_B;
	}
	public void setCliente_B(String cliente_B) {
		this.cliente_B = cliente_B;
	}
	public String getCliente_C() {
		return cliente_C;
	}
	public void setCliente_C(String cliente_C) {
		this.cliente_C = cliente_C;
	}
	public String getForma_Pago_A() {
		return forma_Pago_A;
	}
	public void setForma_Pago_A(String forma_Pago_A) {
		this.forma_Pago_A = forma_Pago_A;
	}
	public String getForma_Pago_B() {
		return forma_Pago_B;
	}
	public void setForma_Pago_B(String forma_Pago_B) {
		this.forma_Pago_B = forma_Pago_B;
	}
	public String getCuenta_A() {
		return cuenta_A;
	}
	public void setCuenta_A(String cuenta_A) {
		this.cuenta_A = cuenta_A;
	}
	public String getCuenta_B() {
		return cuenta_B;
	}
	public void setCuenta_B(String cuenta_B) {
		this.cuenta_B = cuenta_B;
	}
	public String getForma_cobro() {
		return forma_cobro;
	}
	public void setForma_cobro(String forma_cobro) {
		this.forma_cobro = forma_cobro;
	}
	public String getMonto_cobrado() {
		return monto_cobrado;
	}
	public void setMonto_cobrado(String monto_cobrado) {
		this.monto_cobrado = monto_cobrado;
	}
	public String getNum_cheque() {
		return num_cheque;
	}
	public void setNum_cheque(String num_cheque) {
		this.num_cheque = num_cheque;
	}
	public String getTipo_cheque() {
		return tipo_cheque;
	}
	public void setTipo_cheque(String tipo_cheque) {
		this.tipo_cheque = tipo_cheque;
	}
	public String getNum_cuenta() {
		return num_cuenta;
	}
	public void setNum_cuenta(String num_cuenta) {
		this.num_cuenta = num_cuenta;
	}
	public String getNum_cuenta_2() {
		return num_cuenta_2;
	}
	public void setNum_cuenta_2(String num_cuenta_2) {
		this.num_cuenta_2 = num_cuenta_2;
	}
	public String getTipo_cliente1() {
		return tipo_cliente1;
	}
	public void setTipo_cliente1(String tipo_cliente1) {
		this.tipo_cliente1 = tipo_cliente1;
	}
	public String getTipo_cliente2() {
		return tipo_cliente2;
	}
	public void setTipo_cliente2(String tipo_cliente2) {
		this.tipo_cliente2 = tipo_cliente2;
	}
	public String getTipo_cliente3() {
		return tipo_cliente3;
	}
	public void setTipo_cliente3(String tipo_cliente3) {
		this.tipo_cliente3 = tipo_cliente3;
	}
	public String getConcepto() {
		return concepto;
	}
	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}
	public String getConceptoA() {
		return conceptoA;
	}
	public void setConceptoA(String conceptoA) {
		this.conceptoA = conceptoA;
	}
	public String getConceptoB() {
		return conceptoB;
	}
	public void setConceptoB(String conceptoB) {
		this.conceptoB = conceptoB;
	}

}
