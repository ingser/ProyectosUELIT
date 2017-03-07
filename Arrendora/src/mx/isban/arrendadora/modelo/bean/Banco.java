package mx.isban.arrendadora.modelo.bean;

public class Banco {

	private String id;
	private String cve_banco;
	private String banco;
	private String plaza;
	private String cve_sucursal;
	private String sucursal;
	private String cve_banco_emisor;
	private String banco_emisor;
	private String cve_banco_deposito;
	private String banco_deposito;
	public Banco(String id, String cve_banco, String banco, String plaza, String cve_sucursal, String sucursal,
			String cve_banco_emisor, String banco_emisor, String cve_banco_deposito, String banco_deposito) {
		super();
		this.id = id;
		this.cve_banco = cve_banco;
		this.banco = banco;
		this.plaza = plaza;
		this.cve_sucursal = cve_sucursal;
		this.sucursal = sucursal;
		this.cve_banco_emisor = cve_banco_emisor;
		this.banco_emisor = banco_emisor;
		this.cve_banco_deposito = cve_banco_deposito;
		this.banco_deposito = banco_deposito;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCve_banco() {
		return cve_banco;
	}
	public void setCve_banco(String cve_banco) {
		this.cve_banco = cve_banco;
	}
	public String getBanco() {
		return banco;
	}
	public void setBanco(String banco) {
		this.banco = banco;
	}
	public String getPlaza() {
		return plaza;
	}
	public void setPlaza(String plaza) {
		this.plaza = plaza;
	}
	public String getCve_sucursal() {
		return cve_sucursal;
	}
	public void setCve_sucursal(String cve_sucursal) {
		this.cve_sucursal = cve_sucursal;
	}
	public String getSucursal() {
		return sucursal;
	}
	public void setSucursal(String sucursal) {
		this.sucursal = sucursal;
	}
	public String getCve_banco_emisor() {
		return cve_banco_emisor;
	}
	public void setCve_banco_emisor(String cve_banco_emisor) {
		this.cve_banco_emisor = cve_banco_emisor;
	}
	public String getBanco_emisor() {
		return banco_emisor;
	}
	public void setBanco_emisor(String banco_emisor) {
		this.banco_emisor = banco_emisor;
	}
	public String getCve_banco_deposito() {
		return cve_banco_deposito;
	}
	public void setCve_banco_deposito(String cve_banco_deposito) {
		this.cve_banco_deposito = cve_banco_deposito;
	}
	public String getBanco_deposito() {
		return banco_deposito;
	}
	public void setBanco_deposito(String banco_deposito) {
		this.banco_deposito = banco_deposito;
	}
	
}
