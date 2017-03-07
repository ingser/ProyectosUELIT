package mx.isban.arrendadora.modelo.bean;

public class Imprimir_Venc_Cliente {
	private String id;
	private String param;
	private String valor;
	public Imprimir_Venc_Cliente(String id, String param, String valor) {
		super();
		this.id = id;
		this.param = param;
		this.valor = valor;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getParam() {
		return param;
	}
	public void setParam(String param) {
		this.param = param;
	}
	public String getValor() {
		return valor;
	}
	public void setValor(String valor) {
		this.valor = valor;
	}

}
