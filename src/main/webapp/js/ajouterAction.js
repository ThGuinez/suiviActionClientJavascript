$(function(){
	
	$("#enregistrerNouvelleAction").click(enregisterAction);
	
	function enregisterAction(){
		var titre = $("#titre").val();
		var client = $("#client").val();
		var etat = $("#etat").val();
		var id = nouvelIdAction();
		var action = new Action(id,titre,client,etat);
		var listeAct = new ListeActions(listeActionsClients);
		listeAct.ajouter(listeAct.tableauActions,action);
		localStorage.listeActions = JSON.stringify(listeAct.tableauActions);
		listeActionsClients = JSON.parse(localStorage.getItem('listeActions'));
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






