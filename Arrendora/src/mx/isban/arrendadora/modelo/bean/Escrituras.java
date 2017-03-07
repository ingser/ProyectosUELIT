package mx.isban.arrendadora.modelo.bean;

public class Escrituras {

	private String id;
	private String facultades;
	private String num_escritura;
	private String fecha_escritura;
	private String num_notario;
	private String nombre_notario;
	private String lugar_notario;
	private String reg_publico;
	private String lugar_registro;
	public Escrituras(String id, String facultades, String num_escritura, String fecha_escritura, String num_notario,
			String nombre_notario, String lugar_notario, String reg_publico, String lugar_registro) {
		super();
		this.id = id;
		this.facultades = facultades;
		this.num_escritura = num_escritura;
		this.fecha_escritura = fecha_escritura;
		this.num_notario = num_notario;
		this.nombre_notario = nombre_notario;
		this.lugar_notario = lugar_notario;
		this.reg_publico = reg_publico;
		this.lugar_registro = lugar_registro;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFacultades() {
		return facultades;
	}
	public void setFacultades(String facultades) {
		this.facultades = facultades;
	}
	public String getNum_escritura() {
		return num_escritura;
	}
	public void setNum_escritura(String num_escritura) {
		this.num_escritura = num_escritura;
	}
	public String getFecha_escritura() {
		return fecha_escritura;
	}
	public void setFecha_escritura(String fecha_escritura) {
		this.fecha_escritura = fecha_escritura;
	}
	public String getNum_notario() {
		return num_notario;
	}
	public void setNum_notario(String num_notario) {
		this.num_notario = num_notario;
	}
	public String getNombre_notario() {
		return nombre_notario;
	}
	public void setNombre_notario(String nombre_notario) {
		this.nombre_notario = nombre_notario;
	}
	public String getLugar_notario() {
		return lugar_notario;
	}
	public void setLugar_notario(String lugar_notario) {
		this.lugar_notario = lugar_notario;
	}
	public String getReg_publico() {
		return reg_publico;
	}
	public void setReg_publico(String reg_publico) {
		this.reg_publico = reg_publico;
	}
	public String getLugar_registro() {
		return lugar_registro;
	}
	public void setLugar_registro(String lugar_registro) {
		this.lugar_registro = lugar_registro;
	}
	

}
