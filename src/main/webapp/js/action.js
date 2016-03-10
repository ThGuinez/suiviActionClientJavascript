function Action(id,titre,etat,client){
	this.id = id;
	this.titre = titre;
	this.etat = etat;	
	this.client = client;
}

function ListeActions(listeActions){
	this.tableauActions  = listeActions;
	this.ajouter = ajouterAction;
	this.supprimer = supprimerAction;
}

function ajouterAction(tableauActions,action){
	tableauActions.push(action);
}

function supprimerAction(tableauActions,action){
	var index = tableauActions.indexOf(action);
	tableauActions.splice(index,1);
}

// jeu d'essai

/*
var action1 = new Action("titre1","ok",1);
var action2 = new Action("titre2","no",1);
var action3 = new Action("titre3","?",1);
var liste = new Array(action1,action2,action3);
var listeAct = new ListeActions(liste);

listeAct.ajouter(listeAct.tableauActions,action3);
listeAct.supprimer(listeAct.tableauActions,action2);

localStorage.listeActions = JSON.stringify(listeAct.tableauActions);

tableauActions = JSON.parse(localStorage.getItem('listeActions'));
*/