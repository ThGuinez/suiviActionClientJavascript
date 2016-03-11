$(function() {

	var actionid;
	function detectClicChang(){
		$(".listeEtatTableau").onChange(function() {
			actionid = $(this).parent("td").parent("tr").attr('actionid');
			this.val();
			var date = new Date();
			var stringDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
			var historique = new Historique(actionid,stringDate,this.val());
			var listeHisto = new ListeHistoriqueEtat(listeHistoriqueEtat);
			listeHisto.ajouter(listeHisto.tableauHistorique, historique);
			localStorage.historiqueEtats= JSON.stringify(listeHisto.tableauHistorique);
			recuperationLocalStorage();
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
