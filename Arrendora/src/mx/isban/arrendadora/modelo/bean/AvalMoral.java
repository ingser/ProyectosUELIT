package mx.isban.arrendadora.modelo.bean;

public class AvalMoral {
	private String id;
	private String obs_1;
	private String obs_2;
	public AvalMoral(String id, String obs_1, String obs_2) {
		super();
		this.id = id;
		this.obs_1 = obs_1;
		this.obs_2 = obs_2;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getObs_1() {
		return obs_1;
	}
	public void setObs_1(String obs_1) {
		this.obs_1 = obs_1;
	}
	public String getObs_2() {
		return obs_2;
	}
	public void setObs_2(String obs_2) {
		this.obs_2 = obs_2;
	}
}
