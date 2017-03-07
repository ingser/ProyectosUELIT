package mx.isban.arrendadora.modelo.bean;

public class Reporte {
	private String id;
	private String cve_destino;
	private String nombre_destino;
	private String fecha_proyeccion;
	private String formato_destino;
	private String num_copias;
	private String cotizacion;
	private String fecha_reporte;
	public Reporte(String id, String cve_destino, String nombre_destino, String fecha_proyeccion,
			String formato_destino, String num_copias, String cotizacion, String fecha_reporte) {
		super();
		this.id = id;
		this.cve_destino = cve_destino;
		this.nombre_destino = nombre_destino;
		this.fecha_proyeccion = fecha_proyeccion;
		this.formato_destino = formato_destino;
		this.num_copias = num_copias;
		this.cotizacion = cotizacion;
		this.fecha_reporte = fecha_reporte;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_destino() {
		return cve_destino;
	}
	public void setCve_destino(String cve_destino) {
		this.cve_destino = cve_destino;
	}
	public String getNombre_destino() {
		return nombre_destino;
	}
	public void setNombre_destino(String nombre_destino) {
		this.nombre_destino = nombre_destino;
	}
	public String getFecha_proyeccion() {
		return fecha_proyeccion;
	}
	public void setFecha_proyeccion(String fecha_proyeccion) {
		this.fecha_proyeccion = fecha_proyeccion;
	}
	public String getFormato_destino() {
		return formato_destino;
	}
	public void setFormato_destino(String formato_destino) {
		this.formato_destino = formato_destino;
	}
	public String getNum_copias() {
		return num_copias;
	}
	public void setNum_copias(String num_copias) {
		this.num_copias = num_copias;
	}
	public String getCotizacion() {
		return cotizacion;
	}
	public void setCotizacion(String cotizacion) {
		this.cotizacion = cotizacion;
	}
	public String getFecha_reporte() {
		return fecha_reporte;
	}
	public void setFecha_reporte(String fecha_reporte) {
		this.fecha_reporte = fecha_reporte;
	}

}
