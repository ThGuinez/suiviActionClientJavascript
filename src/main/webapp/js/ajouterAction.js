$(function(){
	
	$("#enregistrerNouvelleAction").click(enregisterAction);
	
	function enregisterAction(){
		var titre = $("#titre").val();
		var client = $("select[id='listeDeroulanteClients']").val();
		var etat = $("select[id='listeDeroulanteEtat']").val();
		var id = nouvelIdAction();
		var action = new Action(id,titre,etat,client);
		var listeAct = new ListeActions(listeActionsClients);
		listeAct.ajouter(listeAct.tableauActions,action);
		localStorage.listeActions = JSON.stringify(listeAct.tableauActions);
		listeActionsClients = JSON.parse(localStorage.getItem('listeActions'));
		var date = new Date();
		var stringDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		var historique = new Historique(id,stringDate,etat);
		var listeHisto = new ListeHistoriqueEtat(listeHistoriqueEtat);
		listeHisto.ajouter(listeHisto.tableauHistorique, historique);
		localStorage.historiqueEtats= JSON.stringify(listeHisto.tableauHistorique);
		recuperationLocalStorage();
		$("#titre").val("");
		generationTableauActions();
		detectClicSupp();
	};
	
	function nouvelIdAction(){
		var nb = listeActionsClients.length;
		if(nb>0){
			var lastId = listeActionsClients[nb-1].id;
			return lastId+1;
		}
		else{
			return 1;
		}
	}
	
});






