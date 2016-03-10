function Historique(ref,date,etat){
	this.ref = ref;
	this.date = date;	
	this.etat = etat;
}

function ListeHistoriqueEtat(historique){
	this.tableauHistorique = historique;
	this.ajouter = ajouterHistorique;
}

function ajouterHistorique(tableauHistorique,changementEtat){
	tableauHistorique.push(changementEtat);
}