package model;

public class Action {

	private int id;
	private String titre;
	private Etat etat;
	private Client client;

	public Action() {
		super();
	}	
	
	public Action(String titre, Etat etat, Client client) {
		super();
		this.titre = titre;
		this.etat = etat;
		this.client = client;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Etat getEtat() {
		return etat;
	}

	public void setEtat(Etat etat) {
		this.etat = etat;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}
	
}
