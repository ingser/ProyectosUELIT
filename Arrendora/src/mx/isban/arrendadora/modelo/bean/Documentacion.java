package mx.isban.arrendadora.modelo.bean;

public class Documentacion {
	private String id;
	private String cve_tipo_doc;
	private String tipo_doc;
	private String tipo_arrend;
	private String cve_cte;
	private String cliente;
	private String contrato;
	private String anexo;
	private String pagare;
	private String responsiva;
	private String addendum;
	private String convenio;
	private String cesion;
	private String prenda;
	private String subarrendamiento;
	private String reestructura;
	private String otro;
	private String envio_firma_cte;
	private String regreso_firmado_cte;
	private String solicitud_cheq;
	private String entrega_firmas_internas;
	private String envio_ratificar;
	private String regreso_ratificacion;
	private String entrega_cte;
	private String recepcion_acuse;
	private String entrega_archivo;
	public Documentacion(String id, String cve_tipo_doc, String tipo_doc, String tipo_arrend, String cve_cte,
			String cliente, String contrato, String anexo, String pagare, String responsiva, String addendum,
			String convenio, String cesion, String prenda, String subarrendamiento, String reestructura, String otro,
			String envio_firma_cte, String regreso_firmado_cte, String solicitud_cheq, String entrega_firmas_internas,
			String envio_ratificar, String regreso_ratificacion, String entrega_cte, String recepcion_acuse,
			String entrega_archivo) {
		super();
		this.id = id;
		this.cve_tipo_doc = cve_tipo_doc;
		this.tipo_doc = tipo_doc;
		this.tipo_arrend = tipo_arrend;
		this.cve_cte = cve_cte;
		this.cliente = cliente;
		this.contrato = contrato;
		this.anexo = anexo;
		this.pagare = pagare;
		this.responsiva = responsiva;
		this.addendum = addendum;
		this.convenio = convenio;
		this.cesion = cesion;
		this.prenda = prenda;
		this.subarrendamiento = subarrendamiento;
		this.reestructura = reestructura;
		this.otro = otro;
		this.envio_firma_cte = envio_firma_cte;
		this.regreso_firmado_cte = regreso_firmado_cte;
		this.solicitud_cheq = solicitud_cheq;
		this.entrega_firmas_internas = entrega_firmas_internas;
		this.envio_ratificar = envio_ratificar;
		this.regreso_ratificacion = regreso_ratificacion;
		this.entrega_cte = entrega_cte;
		this.recepcion_acuse = recepcion_acuse;
		this.entrega_archivo = entrega_archivo;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_tipo_doc() {
		return cve_tipo_doc;
	}
	public void setCve_tipo_doc(String cve_tipo_doc) {
		this.cve_tipo_doc = cve_tipo_doc;
	}
	public String getTipo_doc() {
		return tipo_doc;
	}
	public void setTipo_doc(String tipo_doc) {
		this.tipo_doc = tipo_doc;
	}
	public String getTipo_arrend() {
		return tipo_arrend;
	}
	public void setTipo_arrend(String tipo_arrend) {
		this.tipo_arrend = tipo_arrend;
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
	public String getPagare() {
		return pagare;
	}
	public void setPagare(String pagare) {
		this.pagare = pagare;
	}
	public String getResponsiva() {
		return responsiva;
	}
	public void setResponsiva(String responsiva) {
		this.responsiva = responsiva;
	}
	public String getAddendum() {
		return addendum;
	}
	public void setAddendum(String addendum) {
		this.addendum = addendum;
	}
	public String getConvenio() {
		return convenio;
	}
	public void setConvenio(String convenio) {
		this.convenio = convenio;
	}
	public String getCesion() {
		return cesion;
	}
	public void setCesion(String cesion) {
		this.cesion = cesion;
	}
	public String getPrenda() {
		return prenda;
	}
	public void setPrenda(String prenda) {
		this.prenda = prenda;
	}
	public String getSubarrendamiento() {
		return subarrendamiento;
	}
	public void setSubarrendamiento(String subarrendamiento) {
		this.subarrendamiento = subarrendamiento;
	}
	public String getReestructura() {
		return reestructura;
	}
	public void setReestructura(String reestructura) {
		this.reestructura = reestructura;
	}
	public String getOtro() {
		return otro;
	}
	public void setOtro(String otro) {
		this.otro = otro;
	}
	public String getEnvio_firma_cte() {
		return envio_firma_cte;
	}
	public void setEnvio_firma_cte(String envio_firma_cte) {
		this.envio_firma_cte = envio_firma_cte;
	}
	public String getRegreso_firmado_cte() {
		return regreso_firmado_cte;
	}
	public void setRegreso_firmado_cte(String regreso_firmado_cte) {
		this.regreso_firmado_cte = regreso_firmado_cte;
	}
	public String getSolicitud_cheq() {
		return solicitud_cheq;
	}
	public void setSolicitud_cheq(String solicitud_cheq) {
		this.solicitud_cheq = solicitud_cheq;
	}
	public String getEntrega_firmas_internas() {
		return entrega_firmas_internas;
	}
	public void setEntrega_firmas_internas(String entrega_firmas_internas) {
		this.entrega_firmas_internas = entrega_firmas_internas;
	}
	public String getEnvio_ratificar() {
		return envio_ratificar;
	}
	public void setEnvio_ratificar(String envio_ratificar) {
		this.envio_ratificar = envio_ratificar;
	}
	public String getRegreso_ratificacion() {
		return regreso_ratificacion;
	}
	public void setRegreso_ratificacion(String regreso_ratificacion) {
		this.regreso_ratificacion = regreso_ratificacion;
	}
	public String getEntrega_cte() {
		return entrega_cte;
	}
	public void setEntrega_cte(String entrega_cte) {
		this.entrega_cte = entrega_cte;
	}
	public String getRecepcion_acuse() {
		return recepcion_acuse;
	}
	public void setRecepcion_acuse(String recepcion_acuse) {
		this.recepcion_acuse = recepcion_acuse;
	}
	public String getEntrega_archivo() {
		return entrega_archivo;
	}
	public void setEntrega_archivo(String entrega_archivo) {
		this.entrega_archivo = entrega_archivo;
	}

}
