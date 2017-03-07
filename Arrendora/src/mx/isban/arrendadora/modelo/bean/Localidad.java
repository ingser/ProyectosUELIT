package mx.isban.arrendadora.modelo.bean;

public class Localidad {
	private String id;
	private String cve_localidad;
	private String localidad;
	private String fobaproa;
	private String cve_seguimiento;
	private String seguimiento;
	private String cve_clasif_cnbyv;
	private String clasif_cnbyv;
	private String cve_suc;
	private String suc_segmentacion;
	private String act_banxico;
	private String obs1;
	private String obs2;
	private String obs3;
	public Localidad(String id, String cve_localidad, String localidad, String fobaproa, String cve_seguimiento,
			String seguimiento, String cve_clasif_cnbyv, String clasif_cnbyv, String cve_suc, String suc_segmentacion,
			String act_banxico, String obs1, String obs2, String obs3) {
		super();
		this.id = id;
		this.cve_localidad = cve_localidad;
		this.localidad = localidad;
		this.fobaproa = fobaproa;
		this.cve_seguimiento = cve_seguimiento;
		this.seguimiento = seguimiento;
		this.cve_clasif_cnbyv = cve_clasif_cnbyv;
		this.clasif_cnbyv = clasif_cnbyv;
		this.cve_suc = cve_suc;
		this.suc_segmentacion = suc_segmentacion;
		this.act_banxico = act_banxico;
		this.obs1 = obs1;
		this.obs2 = obs2;
		this.obs3 = obs3;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_localidad() {
		return cve_localidad;
	}
	public void setCve_localidad(String cve_localidad) {
		this.cve_localidad = cve_localidad;
	}
	public String getLocalidad() {
		return localidad;
	}
	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}
	public String getFobaproa() {
		return fobaproa;
	}
	public void setFobaproa(String fobaproa) {
		this.fobaproa = fobaproa;
	}
	public String getCve_seguimiento() {
		return cve_seguimiento;
	}
	public void setCve_seguimiento(String cve_seguimiento) {
		this.cve_seguimiento = cve_seguimiento;
	}
	public String getSeguimiento() {
		return seguimiento;
	}
	public void setSeguimiento(String seguimiento) {
		this.seguimiento = seguimiento;
	}
	public String getCve_clasif_cnbyv() {
		return cve_clasif_cnbyv;
	}
	public void setCve_clasif_cnbyv(String cve_clasif_cnbyv) {
		this.cve_clasif_cnbyv = cve_clasif_cnbyv;
	}
	public String getClasif_cnbyv() {
		return clasif_cnbyv;
	}
	public void setClasif_cnbyv(String clasif_cnbyv) {
		this.clasif_cnbyv = clasif_cnbyv;
	}
	public String getCve_suc() {
		return cve_suc;
	}
	public void setCve_suc(String cve_suc) {
		this.cve_suc = cve_suc;
	}
	public String getSuc_segmentacion() {
		return suc_segmentacion;
	}
	public void setSuc_segmentacion(String suc_segmentacion) {
		this.suc_segmentacion = suc_segmentacion;
	}
	public String getAct_banxico() {
		return act_banxico;
	}
	public void setAct_banxico(String act_banxico) {
		this.act_banxico = act_banxico;
	}
	public String getObs1() {
		return obs1;
	}
	public void setObs1(String obs1) {
		this.obs1 = obs1;
	}
	public String getObs2() {
		return obs2;
	}
	public void setObs2(String obs2) {
		this.obs2 = obs2;
	}
	public String getObs3() {
		return obs3;
	}
	public void setObs3(String obs3) {
		this.obs3 = obs3;
	}

}
