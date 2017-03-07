package mx.isban.arrendadora.modelo.bean;

public class Empresa {
private String id;
private String cve_empresa ;
private String empresa ;
public Empresa(String id, String cve_empresa, String empresa) {
	super();
	this.id = id;
	this.cve_empresa = cve_empresa;
	this.empresa = empresa;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getCve_empresa() {
	return cve_empresa;
}
public void setCve_empresa(String cve_empresa) {
	this.cve_empresa = cve_empresa;
}
public String getEmpresa() {
	return empresa;
}
public void setEmpresa(String empresa) {
	this.empresa = empresa;
}


}
