package mx.isban.arrendadora.modelo.bean;

public class Bien {
	private String id;
	private String num_bien;
	private String cve_tipo_bien;
	private String tipo_bien;
	private String cve_marca;
	private String marca;
	private String modelo;
	private String serie;
	private String motor;
	private String color;
	private String num_cotizacion;
	private String placas;
	private String cve_dia_descanso;
	private String dia_descanso;
	private String placas2;
	private String tenencia;
	private String seguro;
	private String cve_registro;
	private String registro;
	private String monto_fact;
	private String iva;
	public Bien(String id, String num_bien, String cve_tipo_bien, String tipo_bien, String cve_marca, String marca,
			String modelo, String serie, String motor, String color, String num_cotizacion, String placas,
			String cve_dia_descanso, String dia_descanso, String placas2, String tenencia, String seguro,
			String cve_registro, String registro, String monto_fact, String iva) {
		super();
		this.id = id;
		this.num_bien = num_bien;
		this.cve_tipo_bien = cve_tipo_bien;
		this.tipo_bien = tipo_bien;
		this.cve_marca = cve_marca;
		this.marca = marca;
		this.modelo = modelo;
		this.serie = serie;
		this.motor = motor;
		this.color = color;
		this.num_cotizacion = num_cotizacion;
		this.placas = placas;
		this.cve_dia_descanso = cve_dia_descanso;
		this.dia_descanso = dia_descanso;
		this.placas2 = placas2;
		this.tenencia = tenencia;
		this.seguro = seguro;
		this.cve_registro = cve_registro;
		this.registro = registro;
		this.monto_fact = monto_fact;
		this.iva = iva;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNum_bien() {
		return num_bien;
	}
	public void setNum_bien(String num_bien) {
		this.num_bien = num_bien;
	}
	public String getCve_tipo_bien() {
		return cve_tipo_bien;
	}
	public void setCve_tipo_bien(String cve_tipo_bien) {
		this.cve_tipo_bien = cve_tipo_bien;
	}
	public String getTipo_bien() {
		return tipo_bien;
	}
	public void setTipo_bien(String tipo_bien) {
		this.tipo_bien = tipo_bien;
	}
	public String getCve_marca() {
		return cve_marca;
	}
	public void setCve_marca(String cve_marca) {
		this.cve_marca = cve_marca;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public String getSerie() {
		return serie;
	}
	public void setSerie(String serie) {
		this.serie = serie;
	}
	public String getMotor() {
		return motor;
	}
	public void setMotor(String motor) {
		this.motor = motor;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getNum_cotizacion() {
		return num_cotizacion;
	}
	public void setNum_cotizacion(String num_cotizacion) {
		this.num_cotizacion = num_cotizacion;
	}
	public String getPlacas() {
		return placas;
	}
	public void setPlacas(String placas) {
		this.placas = placas;
	}
	public String getCve_dia_descanso() {
		return cve_dia_descanso;
	}
	public void setCve_dia_descanso(String cve_dia_descanso) {
		this.cve_dia_descanso = cve_dia_descanso;
	}
	public String getDia_descanso() {
		return dia_descanso;
	}
	public void setDia_descanso(String dia_descanso) {
		this.dia_descanso = dia_descanso;
	}
	public String getPlacas2() {
		return placas2;
	}
	public void setPlacas2(String placas2) {
		this.placas2 = placas2;
	}
	public String getTenencia() {
		return tenencia;
	}
	public void setTenencia(String tenencia) {
		this.tenencia = tenencia;
	}
	public String getSeguro() {
		return seguro;
	}
	public void setSeguro(String seguro) {
		this.seguro = seguro;
	}
	public String getCve_registro() {
		return cve_registro;
	}
	public void setCve_registro(String cve_registro) {
		this.cve_registro = cve_registro;
	}
	public String getRegistro() {
		return registro;
	}
	public void setRegistro(String registro) {
		this.registro = registro;
	}
	public String getMonto_fact() {
		return monto_fact;
	}
	public void setMonto_fact(String monto_fact) {
		this.monto_fact = monto_fact;
	}
	public String getIva() {
		return iva;
	}
	public void setIva(String iva) {
		this.iva = iva;
	}

}
