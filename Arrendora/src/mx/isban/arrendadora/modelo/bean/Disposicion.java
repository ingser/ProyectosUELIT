package mx.isban.arrendadora.modelo.bean;

public class Disposicion {
	private String id;
	private String disposicion;
	private String fecha;
	private String monto;
	private String cotizacion;
	private String contrato;
	private String anexo;
	private String linea_disp;
	private String monto_anticip;
	private String monto_descontar;
	private String monto_bonificar;
	private String monto_recuperar;
	public Disposicion(String id, String disposicion, String fecha, String monto, String cotizacion, String contrato,
			String anexo, String linea_disp, String monto_anticip, String monto_descontar, String monto_bonificar,
			String monto_recuperar) {
		super();
		this.id = id;
		this.disposicion = disposicion;
		this.fecha = fecha;
		this.monto = monto;
		this.cotizacion = cotizacion;
		this.contrato = contrato;
		this.anexo = anexo;
		this.linea_disp = linea_disp;
		this.monto_anticip = monto_anticip;
		this.monto_descontar = monto_descontar;
		this.monto_bonificar = monto_bonificar;
		this.monto_recuperar = monto_recuperar;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDisposicion() {
		return disposicion;
	}
	public void setDisposicion(String disposicion) {
		this.disposicion = disposicion;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getMonto() {
		return monto;
	}
	public void setMonto(String monto) {
		this.monto = monto;
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
	public String getLinea_disp() {
		return linea_disp;
	}
	public void setLinea_disp(String linea_disp) {
		this.linea_disp = linea_disp;
	}
	public String getMonto_anticip() {
		return monto_anticip;
	}
	public void setMonto_anticip(String monto_anticip) {
		this.monto_anticip = monto_anticip;
	}
	public String getMonto_descontar() {
		return monto_descontar;
	}
	public void setMonto_descontar(String monto_descontar) {
		this.monto_descontar = monto_descontar;
	}
	public String getMonto_bonificar() {
		return monto_bonificar;
	}
	public void setMonto_bonificar(String monto_bonificar) {
		this.monto_bonificar = monto_bonificar;
	}
	public String getMonto_recuperar() {
		return monto_recuperar;
	}
	public void setMonto_recuperar(String monto_recuperar) {
		this.monto_recuperar = monto_recuperar;
	}

}
