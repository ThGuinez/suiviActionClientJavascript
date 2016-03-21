package model;

import java.sql.Date;

public class Historique {

	private int id;
	private Action action;
	private Date date;
	private Etat etat;
	
	public Historique() {
		super();
	}

	public Historique(Action action, Date date, Etat etat) {
		super();
		this.action = action;
		this.date = date;
		this.etat = etat;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Action getAction() {
		return action;
	}
	public void setAction(Action action) {
		this.action = action;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Etat getEtat() {
		return etat;
	}
	public void setEtat(Etat etat) {
		this.etat = etat;
	}
	
}
