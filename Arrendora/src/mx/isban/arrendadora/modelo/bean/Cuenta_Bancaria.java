package mx.isban.arrendadora.modelo.bean;

public class Cuenta_Bancaria {
	private String id;
	private String cve_cte;
	private String cliente;
	private String cuenta;
	private String prioridad;
	private String cve_mov;
	private String tipo_mov;
	private String cve_autoriza_1;
	private String cve_autoriza_2;
	private String fecha_carta;
	private String referencia_carta;
	private String secuencia;
	private String fecha_entrega;
	public Cuenta_Bancaria(String id, String cve_cte, String cliente, String cuenta, String prioridad, String cve_mov,
			String tipo_mov, String cve_autoriza_1, String cve_autoriza_2, String fecha_carta, String referencia_carta,
			String secuencia, String fecha_entrega) {
		super();
		this.id = id;
		this.cve_cte = cve_cte;
		this.cliente = cliente;
		this.cuenta = cuenta;
		this.prioridad = prioridad;
		this.cve_mov = cve_mov;
		this.tipo_mov = tipo_mov;
		this.cve_autoriza_1 = cve_autoriza_1;
		this.cve_autoriza_2 = cve_autoriza_2;
		this.fecha_carta = fecha_carta;
		this.referencia_carta = referencia_carta;
		this.secuencia = secuencia;
		this.fecha_entrega = fecha_entrega;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_cte() {
		return cve_cte;
	}
	public void setCve_cte(String cve_cte) {
		this.cve_cte = cve_cte;
	}
	public String getCliente() {
		return cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	public String getCuenta() {
		return cuenta;
	}
	public void setCuenta(String cuenta) {
		this.cuenta = cuenta;
	}
	public String getPrioridad() {
		return prioridad;
	}
	public void setPrioridad(String prioridad) {
		this.prioridad = prioridad;
	}
	public String getCve_mov() {
		return cve_mov;
	}
	public void setCve_mov(String cve_mov) {
		this.cve_mov = cve_mov;
	}
	public String getTipo_mov() {
		return tipo_mov;
	}
	public void setTipo_mov(String tipo_mov) {
		this.tipo_mov = tipo_mov;
	}
	public String getCve_autoriza_1() {
		return cve_autoriza_1;
	}
	public void setCve_autoriza_1(String cve_autoriza_1) {
		this.cve_autoriza_1 = cve_autoriza_1;
	}
	public String getCve_autoriza_2() {
		return cve_autoriza_2;
	}
	public void setCve_autoriza_2(String cve_autoriza_2) {
		this.cve_autoriza_2 = cve_autoriza_2;
	}
	public String getFecha_carta() {
		return fecha_carta;
	}
	public void setFecha_carta(String fecha_carta) {
		this.fecha_carta = fecha_carta;
	}
	public String getReferencia_carta() {
		return referencia_carta;
	}
	public void setReferencia_carta(String referencia_carta) {
		this.referencia_carta = referencia_carta;
	}
	public String getSecuencia() {
		return secuencia;
	}
	public void setSecuencia(String secuencia) {
		this.secuencia = secuencia;
	}
	public String getFecha_entrega() {
		return fecha_entrega;
	}
	public void setFecha_entrega(String fecha_entrega) {
		this.fecha_entrega = fecha_entrega;
	}
}
