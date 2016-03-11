
$(function() {

	testnavbar();
	recordAction();
	
});



function testnavbar() {
	
	$("#navbarAction")
			.click(
					function() {
						listeDesClients = JSON.parse(localStorage
								.getItem('listeClients'));
						// alert(listeDesClients.length);
						if (listeDesClients.length == 0) {
							$("#containerAjoutAction")
									.html(
											"Pour saisir une action, vous devez d'abord créer un client");
						} else {
							var codeHTMLB = '<form role="form">';
							codeHTMLB += '<div class="form-group">'
									+ '<label for="nom">Titre :</label> <input type="text" class="form-control" id="titre">'
									+ '</div>'
									+ '<div class="form-group">'
									+ '<label for="listeDeroulanteClients">Client :</label> <select id="listeDeroulanteClients">'
									+ '</select>'
									+ '</div>'
									+ '<div class="form-group">'
									+ '<label for="listeDeroulanteEtat">Etat :</label> <select id="listeDeroulanteEtat">'
									+ '</select>'
									+ '</div>'
									+ '<button id="enregistrerNouvelleAction" type="submit"class="btn btn-default" data-dismiss="modal">Enregistrer</button>'
									+ '</form>';

							$("#containerAjoutAction").html(codeHTMLB);
							generationListeDeroulanteClientFormAction(listeDesClients);
							generationListeDeroulanteEtat(listeDesClients);
							recordAction();
						}
					});
}


function recordAction(){
	
	$("#enregistrerNouvelleAction").click(enregisterAction);
	
	function enregisterAction() {

		var titre = $("#titre").val();
		var client = $("select[id='listeDeroulanteClients']").val();
		var etat = $("select[id='listeDeroulanteEtat']").val();
		var id = nouvelIdAction();
		var action = new Action(id, titre, etat, client);
		var listeAct = new ListeActions(listeActionsClients);
		listeAct.ajouter(listeAct.tableauActions, action);
		localStorage.listeActions = JSON.stringify(listeAct.tableauActions);
		listeActionsClients = JSON.parse(localStorage.getItem('listeActions'));
		// ajout historique
		var date = new Date();
		var stringDate = date.getDate() + "/" + (date.getMonth() + 1) + "/"
				+ date.getFullYear();
		var historique = new Historique(id, stringDate, etat);
		var listeHisto = new ListeHistoriqueEtat(listeHistoriqueEtat);
		listeHisto.ajouter(listeHisto.tableauHistorique, historique);
		localStorage.historiqueEtats = JSON
				.stringify(listeHisto.tableauHistorique);
		recuperationLocalStorage();
		$("#titre").val("");
		generationTableauActions();
		detectClicHisto();
		detectClicSupp();
		detectClicChang();
		}
}
	
function nouvelIdAction() {
	var nb = listeActionsClients.length;
	if (nb > 0) {
		var lastId = listeActionsClients[nb - 1].id;
		return lastId + 1;
	} else {
		return 1;
	}
}