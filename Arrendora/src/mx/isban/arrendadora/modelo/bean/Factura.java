package mx.isban.arrendadora.modelo.bean;

public class Factura {
	private String id;
	private String cve_cliente;
	private String cliente;
	private String num_ingreso;
	private String num_factura;
	private String cve_prov;
	private String proveedor;
	private String fecha_fact;
	private String fecha_recep;
	private String fecha_pago;
	private String monto;
	private String iva;
	private String tipo_cambio;
	private String num_contrarecibo;
	private String cotizacion;
	private String contrato;
	private String anexo;
	private String cve_bien;
	private String tipo_bien;
	public Factura(String id, String cve_cliente, String cliente, String num_ingreso, String num_factura,
			String cve_prov, String proveedor, String fecha_fact, String fecha_recep, String fecha_pago, String monto,
			String iva, String tipo_cambio, String num_contrarecibo, String cotizacion, String contrato, String anexo,
			String cve_bien, String tipo_bien) {
		super();
		this.id = id;
		this.cve_cliente = cve_cliente;
		this.cliente = cliente;
		this.num_ingreso = num_ingreso;
		this.num_factura = num_factura;
		this.cve_prov = cve_prov;
		this.proveedor = proveedor;
		this.fecha_fact = fecha_fact;
		this.fecha_recep = fecha_recep;
		this.fecha_pago = fecha_pago;
		this.monto = monto;
		this.iva = iva;
		this.tipo_cambio = tipo_cambio;
		this.num_contrarecibo = num_contrarecibo;
		this.cotizacion = cotizacion;
		this.contrato = contrato;
		this.anexo = anexo;
		this.cve_bien = cve_bien;
		this.tipo_bien = tipo_bien;
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
	public String getNum_ingreso() {
		return num_ingreso;
	}
	public void setNum_ingreso(String num_ingreso) {
		this.num_ingreso = num_ingreso;
	}
	public String getNum_factura() {
		return num_factura;
	}
	public void setNum_factura(String num_factura) {
		this.num_factura = num_factura;
	}
	public String getCve_prov() {
		return cve_prov;
	}
	public void setCve_prov(String cve_prov) {
		this.cve_prov = cve_prov;
	}
	public String getProveedor() {
		return proveedor;
	}
	public void setProveedor(String proveedor) {
		this.proveedor = proveedor;
	}
	public String getFecha_fact() {
		return fecha_fact;
	}
	public void setFecha_fact(String fecha_fact) {
		this.fecha_fact = fecha_fact;
	}
	public String getFecha_recep() {
		return fecha_recep;
	}
	public void setFecha_recep(String fecha_recep) {
		this.fecha_recep = fecha_recep;
	}
	public String getFecha_pago() {
		return fecha_pago;
	}
	public void setFecha_pago(String fecha_pago) {
		this.fecha_pago = fecha_pago;
	}
	public String getMonto() {
		return monto;
	}
	public void setMonto(String monto) {
		this.monto = monto;
	}
	public String getIva() {
		return iva;
	}
	public void setIva(String iva) {
		this.iva = iva;
	}
	public String getTipo_cambio() {
		return tipo_cambio;
	}
	public void setTipo_cambio(String tipo_cambio) {
		this.tipo_cambio = tipo_cambio;
	}
	public String getNum_contrarecibo() {
		return num_contrarecibo;
	}
	public void setNum_contrarecibo(String num_contrarecibo) {
		this.num_contrarecibo = num_contrarecibo;
	}
	public String getCotizacion() {
		return cotizacion;
	}
	public void setCotizacion(String cotizacion) {
		this.cotizacion = cotizacion;
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
	public String getCve_bien() {
		return cve_bien;
	}
	public void setCve_bien(String cve_bien) {
		this.cve_bien = cve_bien;
	}
	public String getTipo_bien() {
		return tipo_bien;
	}
	public void setTipo_bien(String tipo_bien) {
		this.tipo_bien = tipo_bien;
	}	
}
