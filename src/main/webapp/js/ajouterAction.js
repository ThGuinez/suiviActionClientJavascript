$(function(){
	
	$("#enregistrerNouvelleAction").click(enregisterAction);
	
	function enregisterAction(){
		var titre = $("#titre").val();
		var client = $("select[name='client']").val();
		var etat = $("select[name='etat']").val();
		var id = nouvelIdAction();
		var action = new Action(id,titre,client,etat);
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






