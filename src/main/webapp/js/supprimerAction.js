$("#validerSuppressionAction").click(supprimerAction());

function supprimerAction (id, titre) {
	var tabActions = listeActionsClients;
	
	var i=0;
	var dataDelete=false;
	tabActions.Action(id);
	while(dataDelete==false && i<listeActionsClients.length) {
		if(tabActions[i] == Action.id === id){
			tabActions.splice(i,1);
			dataDelete=true;
			localStorage.setItem(actions, JSON.stringify(ListeActions));
		}
		i=i+1;
	}
}

//function supprimerAction(tableauActions,action){
//	var index = tableauActions.indexOf(action);
//	tableauActions.splice(index,1);
//	
//	}
//
//function Action(id,titre,etat,client){
//	this.ref = ref;
//	this.date = date;	
//	this.etat = etat;
//}
//
//
//function ListeHistoriqueEtat(historique){
//	this.tableauHistorique = historique;
//	this.ajouter = ajouterHistorique;
//}
//
//function ajouterHistorique(tableauHistorique,changementEtat){
//	tableauHistorique.push(changementEtat);
//}