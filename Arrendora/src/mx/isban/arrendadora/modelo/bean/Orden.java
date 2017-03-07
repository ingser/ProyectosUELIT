package mx.isban.arrendadora.modelo.bean;

public class Orden {
	private String id;
	private String destino;
	private String cve_cte;
	private String cliente;
	private String calle;
	private String cve_bien;
	private String bien_cnb;
	private String cotizacion;
	private String cve_bien2;
	private String bien_interbancario;
	private String leasebak;
	private String fact_iva;
	private String iva_arrendam;
	private String tipo_arrendam;
	private String plazo;
	private String monot_finan;
	private String tipo_cambio;
	private String monto_bienes;
	private String iva;
	private String monto_iva;
	private String fecha_arrendam;
	private String fecha_pago;
	private String opcion_compra;
	private String monto_opcion_compra;
	private String credito_origen;
	public Orden(String id, String destino, String cve_cte, String cliente, String calle, String cve_bien,
			String bien_cnb, String cotizacion, String cve_bien2, String bien_interbancario, String leasebak,
			String fact_iva, String iva_arrendam, String tipo_arrendam, String plazo, String monot_finan,
			String tipo_cambio, String monto_bienes, String iva, String monto_iva, String fecha_arrendam,
			String fecha_pago, String opcion_compra, String monto_opcion_compra, String credito_origen) {
		super();
		this.id = id;
		this.destino = destino;
		this.cve_cte = cve_cte;
		this.cliente = cliente;
		this.calle = calle;
		this.cve_bien = cve_bien;
		this.bien_cnb = bien_cnb;
		this.cotizacion = cotizacion;
		this.cve_bien2 = cve_bien2;
		this.bien_interbancario = bien_interbancario;
		this.leasebak = leasebak;
		this.fact_iva = fact_iva;
		this.iva_arrendam = iva_arrendam;
		this.tipo_arrendam = tipo_arrendam;
		this.plazo = plazo;
		this.monot_finan = monot_finan;
		this.tipo_cambio = tipo_cambio;
		this.monto_bienes = monto_bienes;
		this.iva = iva;
		this.monto_iva = monto_iva;
		this.fecha_arrendam = fecha_arrendam;
		this.fecha_pago = fecha_pago;
		this.opcion_compra = opcion_compra;
		this.monto_opcion_compra = monto_opcion_compra;
		this.credito_origen = credito_origen;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDestino() {
		return destino;
	}
	public void setDestino(String destino) {
		this.destino = destino;
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
	public String getCalle() {
		return calle;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	public String getCve_bien() {
		return cve_bien;
	}
	public void setCve_bien(String cve_bien) {
		this.cve_bien = cve_bien;
	}
	public String getBien_cnb() {
		return bien_cnb;
	}
	public void setBien_cnb(String bien_cnb) {
		this.bien_cnb = bien_cnb;
	}
	public String getCotizacion() {
		return cotizacion;
	}
	public void setCotizacion(String cotizacion) {
		this.cotizacion = cotizacion;
	}
	public String getCve_bien2() {
		return cve_bien2;
	}
	public void setCve_bien2(String cve_bien2) {
		this.cve_bien2 = cve_bien2;
	}
	public String getBien_interbancario() {
		return bien_interbancario;
	}
	public void setBien_interbancario(String bien_interbancario) {
		this.bien_interbancario = bien_interbancario;
	}
	public String getLeasebak() {
		return leasebak;
	}
	public void setLeasebak(String leasebak) {
		this.leasebak = leasebak;
	}
	public String getFact_iva() {
		return fact_iva;
	}
	public void setFact_iva(String fact_iva) {
		this.fact_iva = fact_iva;
	}
	public String getIva_arrendam() {
		return iva_arrendam;
	}
	public void setIva_arrendam(String iva_arrendam) {
		this.iva_arrendam = iva_arrendam;
	}
	public String getTipo_arrendam() {
		return tipo_arrendam;
	}
	public void setTipo_arrendam(String tipo_arrendam) {
		this.tipo_arrendam = tipo_arrendam;
	}
	public String getPlazo() {
		return plazo;
	}
	public void setPlazo(String plazo) {
		this.plazo = plazo;
	}
	public String getMonot_finan() {
		return monot_finan;
	}
	public void setMonot_finan(String monot_finan) {
		this.monot_finan = monot_finan;
	}
	public String getTipo_cambio() {
		return tipo_cambio;
	}
	public void setTipo_cambio(String tipo_cambio) {
		this.tipo_cambio = tipo_cambio;
	}
	public String getMonto_bienes() {
		return monto_bienes;
	}
	public void setMonto_bienes(String monto_bienes) {
		this.monto_bienes = monto_bienes;
	}
	public String getIva() {
		return iva;
	}
	public void setIva(String iva) {
		this.iva = iva;
	}
	public String getMonto_iva() {
		return monto_iva;
	}
	public void setMonto_iva(String monto_iva) {
		this.monto_iva = monto_iva;
	}
	public String getFecha_arrendam() {
		return fecha_arrendam;
	}
	public void setFecha_arrendam(String fecha_arrendam) {
		this.fecha_arrendam = fecha_arrendam;
	}
	public String getFecha_pago() {
		return fecha_pago;
	}
	public void setFecha_pago(String fecha_pago) {
		this.fecha_pago = fecha_pago;
	}
	public String getOpcion_compra() {
		return opcion_compra;
	}
	public void setOpcion_compra(String opcion_compra) {
		this.opcion_compra = opcion_compra;
	}
	public String getMonto_opcion_compra() {
		return monto_opcion_compra;
	}
	public void setMonto_opcion_compra(String monto_opcion_compra) {
		this.monto_opcion_compra = monto_opcion_compra;
	}
	public String getCredito_origen() {
		return credito_origen;
	}
	public void setCredito_origen(String credito_origen) {
		this.credito_origen = credito_origen;
	}

}
