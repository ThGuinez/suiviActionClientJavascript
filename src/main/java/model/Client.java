package model;

public class Client {
	
	private int id;
	private String nom;
	private String mel;
	
	public Client() {
		super();
	}
	
	public Client(String nom, String mel) {
		super();
		this.nom = nom;
		this.mel = mel;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getMel() {
		return mel;
	}

	public void setMel(String mel) {
		this.mel = mel;
	}
	
	
}
