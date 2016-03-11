$(function() {

	var actionid;
	
	
	function detectClicSupp(){
		$(".boutSuppression").click(function() {
			actionid = $(this).parent("td").parent("tr").attr('actionid');
			//alert(actionid);
		});
	}
	
	detectClicSupp();

	function supprimerAction(id) {

		var i = 0;
		var dataDelete = false;

		if (JSON.parse(localStorage.getItem('listeActions')) == undefined) {
			listeActionsClients = new Array();
		} else {
			listeActionsClients = JSON.parse(localStorage
					.getItem('listeActions'));
		}

		
		while (dataDelete == false && i < listeActionsClients.length) {
			//alert("A");
			if (listeActionsClients[i].id == id) {
				//alert("B:"+listeActionsClients[i].id);
				var listAc = new ListeActions(listeActionsClients);
				listeActionsClients = listAc.supprimer(
						listAc.tableauActions, listeActionsClients[i]);
				localStorage.listeActions= JSON.stringify(listeActionsClients);
				dataDelete = true;
				generationTableauActions();	
				detectClicSupp();
			}
			i = i + 1;
		}
	}

	
	$("#validerSuppressionAction").click(function(){
		//alert(actionid);
		supprimerAction(actionid);
	});
	
});

// function supprimerAction(tableauActions,action){
// var index = tableauActions.indexOf(action);
// tableauActions.splice(index,1);
//	
// }
//
// function Action(id,titre,etat,client){
// this.ref = ref;
// this.date = date;
// this.etat = etat;
// }
//
//
// function ListeHistoriqueEtat(historique){
// this.tableauHistorique = historique;
// this.ajouter = ajouterHistorique;
// }
//
// function ajouterHistorique(tableauHistorique,changementEtat){
// tableauHistorique.push(changementEtat);
// }
