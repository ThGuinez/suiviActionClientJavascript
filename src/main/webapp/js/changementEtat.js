	var actionident;
	
	function detectClicChang(){
		$(".listeEtatTableau").change(function() {
			actionident = $(this).parent("td").parent("tr").attr('actionid');
			var val = $(".listeEtatTableau").val();
			alert(actionident);
			alert(val);
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
});

