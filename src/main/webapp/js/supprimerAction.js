$("#supprimerActionClik").click(supprimerAction());

function supprimerAction (id, titre) {
	
	var i=0;
	var dataDelete=false;
	listeActionsClients.Action(id);
	while(dataDelete==false && i<listeActionsClients.length) {
		if(listeActionsClients[i] == Action.id === id){
			listeActionsClients.splice(i,1);
			dataDelete=true;
			localStorage.setItem(actions, JSON.stringify(listeActionsClients));
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