package mx.isban.arrendadora.modelo.bean;

public class Cartera {
	private String id;
	private String cve_cliente;
	private String cliente;
	private String contrato;
	private String anexo;
	private String cotizacion;
	private String disposicion;
	private String plazo;
	private String cve_arrendamiento;
	private String arrendamiento;
	private String iva;
	private String factor_iva;
	private String fecha_pago;
	private String cve_estatus;
	private String status;
	private String opcion_compra;
	private String cve_cart_vencida;
	private String cart_vencida;
	public Cartera(String id, String cve_cliente, String cliente, String contrato, String anexo, String cotizacion,
			String disposicion, String plazo, String cve_arrendamiento, String arrendamiento, String iva,
			String factor_iva, String fecha_pago, String cve_estatus, String status, String opcion_compra,
			String cve_cart_vencida, String cart_vencida) {
		super();
		this.id = id;
		this.cve_cliente = cve_cliente;
		this.cliente = cliente;
		this.contrato = contrato;
		this.anexo = anexo;
		this.cotizacion = cotizacion;
		this.disposicion = disposicion;
		this.plazo = plazo;
		this.cve_arrendamiento = cve_arrendamiento;
		this.arrendamiento = arrendamiento;
		this.iva = iva;
		this.factor_iva = factor_iva;
		this.fecha_pago = fecha_pago;
		this.cve_estatus = cve_estatus;
		this.status = status;
		this.opcion_compra = opcion_compra;
		this.cve_cart_vencida = cve_cart_vencida;
		this.cart_vencida = cart_vencida;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_cliente() {
		return cve_cliente;
	}
	public void setCve_cliente(String cve_cliente) {
		this.cve_cliente = cve_cliente;
	}
	public String getCliente() {
		return cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	public String getContrato() {
		return contrato;
	}
	public void setContrato(String contrato) {
		this.contrato = contrato;
	}
	public String getAnexo() {
		return anexo;
	}
	public void setAnexo(String anexo) {
		this.anexo = anexo;
	}
	public String getCotizacion() {
		return cotizacion;
	}
	public void setCotizacion(String cotizacion) {
		this.cotizacion = cotizacion;
	}
	public String getDisposicion() {
		return disposicion;
	}
	public void setDisposicion(String disposicion) {
		this.disposicion = disposicion;
	}
	public String getPlazo() {
		return plazo;
	}
	public void setPlazo(String plazo) {
		this.plazo = plazo;
	}
	public String getCve_arrendamiento() {
		return cve_arrendamiento;
	}
	public void setCve_arrendamiento(String cve_arrendamiento) {
		this.cve_arrendamiento = cve_arrendamiento;
	}
	public String getArrendamiento() {
		return arrendamiento;
	}
	public void setArrendamiento(String arrendamiento) {
		this.arrendamiento = arrendamiento;
	}
	public String getIva() {
		return iva;
	}
	public void setIva(String iva) {
		this.iva = iva;
	}
	public String getFactor_iva() {
		return factor_iva;
	}
	public void setFactor_iva(String factor_iva) {
		this.factor_iva = factor_iva;
	}
	public String getFecha_pago() {
		return fecha_pago;
	}
	public void setFecha_pago(String fecha_pago) {
		this.fecha_pago = fecha_pago;
	}
	public String getCve_estatus() {
		return cve_estatus;
	}
	public void setCve_estatus(String cve_estatus) {
		this.cve_estatus = cve_estatus;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getOpcion_compra() {
		return opcion_compra;
	}
	public void setOpcion_compra(String opcion_compra) {
		this.opcion_compra = opcion_compra;
	}
	public String getCve_cart_vencida() {
		return cve_cart_vencida;
	}
	public void setCve_cart_vencida(String cve_cart_vencida) {
		this.cve_cart_vencida = cve_cart_vencida;
	}
	public String getCart_vencida() {
		return cart_vencida;
	}
	public void setCart_vencida(String cart_vencida) {
		this.cart_vencida = cart_vencida;
	}

}
