	var actionident;
	
	function detectClicChang(){
		$(".listeEtatTableau").change(function() {
			actionident = $(this).parent("td").parent("tr").attr('actionid');
			var val = $(".listeEtatTableau").val();
			//alert(actionident);
			//alert(val);
			// on enregistre un objet historique
			var date = new Date();
			var stringDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
			var historique = new Historique(actionident,stringDate,val);
			var listeHisto = new ListeHistoriqueEtat(listeHistoriqueEtat);
			listeHisto.ajouter(listeHisto.tableauHistorique, historique);
			localStorage.historiqueEtats= JSON.stringify(listeHisto.tableauHistorique);
			recuperationLocalStorage();
			// on met à jour l'objet action
			listeActio = new ListeActions(listeActionsClients);
			for(var ii=0;ii<listeActio.tableauActions.length;ii++){
				if(listeActio.tableauActions[ii].id==actionident){
					listeActio.tableauActions[ii].etat=val;
				}
			}
			localStorage.listeActions= JSON.stringify(listeActio.tableauActions);
			recuperationLocalStorage();
		});
	}

$(function() {


	
	detectClicChang();

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
