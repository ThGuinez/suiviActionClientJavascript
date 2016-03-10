function Historique(ref,date,etat){
	this.ref = ref;
	this.date = date;	
	this.etat = etat;
}

Historique.ref

function ListeHistoriqueEtat(historique){
	this.tableauHistorique = historique;
	this.ajouter = ajouterHistorique;
}

function ajouterHistorique(tableauHistorique,changementEtat){
	tableauHistorique.push(changementEtat);
}

/*
var historique1 = new Historique(1,"12/12/13",2);
var historique2 = new Historique(1,"12/12/14",3);
var historique3 = new Historique(1,"12/12/15",4);
var historique4 = new Historique(1,"12/02/15",5);
var historique5 = new Historique(2,"22/12/12",1);
var historique6 = new Historique(2,"12/12/12",2);
var historique7 = new Historique(2,"12/12/12",3);
var historique8 = new Historique(2,"12/12/12",4);

var listeHisto = new ListeHistoriqueEtat(listeHistoriqueEtat);
listeHisto.ajouter(listeHisto.tableauHistorique, historique1);
listeHisto.ajouter(listeHisto.tableauHistorique, historique2);
listeHisto.ajouter(listeHisto.tableauHistorique, historique3);
listeHisto.ajouter(listeHisto.tableauHistorique, historique4);
listeHisto.ajouter(listeHisto.tableauHistorique, historique5);
listeHisto.ajouter(listeHisto.tableauHistorique, historique6);
listeHisto.ajouter(listeHisto.tableauHistorique, historique7);
listeHisto.ajouter(listeHisto.tableauHistorique, historique8);

localStorage.historiqueEtats= JSON.stringify(listeHisto.tableauHistorique);

*/














//
//
//var historique = new Object();
//	tableauEtat.ref = "";
//	historique.date = "";
//	historique.etat = "";
//
//
//	var etat = ["Début projet", "En cours", "Devis envoyé", "Devis accepté et signé", "Réalisé", "Fini", "Fin projet", "Litige", "Abandonné"];
//	document.getElementById("demo").innerHTML = cars;
//	
//
//
//	
//
//	
//
//function afficherHistorique(obj, historique) {
//	  var résultat = "";
//	  for (var i in obj) {
//	    if (obj.etat(i)) {
//	        résultat += historique + "." + i + " = " + obj[i] + "\n";
//	    }
//	  }
//	  return résultat;
//	}



//document.getElementById('inner').innerHTML = "Hello World!";




//var tableauEtat[1] = new Action("etat","ref",1);
//var tableauEtat[2] = new Action("historique2","ref",2);
//var tableauEtat[3] = new Action("titre3","?",3);
//var liste = new Array(1,action2,action3);
//var listeAct = new ListeAct(liste);
//
//listeHist.ajouter(listeHist.tableauActions,action3);
//tableauEtat.supprimer(tableauEtat.tableauActions,action2);
//
//localStorage.listeActions = JSON.stringify(tableauEtat.tableauActions);
//
//tableauActions = JSON.parse(localStorage.getItem('listeActions'));