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
	//console.log(tableauActions);
	//console.log(action);
	var tab = new Array();
	for(var y=0;y<tableauActions.length;y++){
		console.log(tableauActions[y].id);
		if(action.id!=tableauActions[y].id){
			tab.push(tableauActions[y]);
		}
	}
	return tab;
}

// jeu d'essai

/*
var action1 = new Action(1,"tes1",1,1);
var action2 = new Action(2,"tes2",1,5);
var action3 = new Action(3,"tes3",1,8);
var action4 = new Action(4,"tes4",1,6);
var action5 = new Action(5,"tes5",1,2);
var liste = new Array(action1,action2,action3,action4,action5);
var listeAct = new ListeActions(liste);
localStorage.listeActions = JSON.stringify(listeAct.tableauActions);

listeAct.ajouter(listeAct.tableauActions,action3);
listeAct.supprimer(listeAct.tableauActions,action2);



tableauActions = JSON.parse(localStorage.getItem('listeActions'));
*/