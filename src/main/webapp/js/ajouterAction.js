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
											"Pour saisir une action, vous devez d'abord crÃ©er un client");
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

function recordAction() {

	$("#enregistrerNouvelleAction").click(enregisterAction);

	function enregisterAction() {

		var titre = $("#titre").val();
		var idClient = $("select[id='listeDeroulanteClients']").val();
		var idEtat = $("select[id='listeDeroulanteEtat']").val();
		// console.log(idEtat);

		if (titre.length > 0) {

			// ajax#1 on récupère le client complet
			$.ajax({
				url : '/api/v1/client/' + idClient,
				type : 'GET',
				dataType : 'json',
				success : function(dataClient) {

					// ajax#2 on récupère l'état complet
					$.ajax({
						url : '/api/v1/etat/' + idEtat,
						type : 'GET',
						dataType : 'json',
						success : function(dataEtat) {

							var client = {}
							client["id"] = dataClient.id;
							client["nom"] = dataClient.nom;
							client["mel"] = dataClient.mel;
							var etat = {}
							etat["id"] = dataEtat.id;
							etat["libelle"] = dataEtat.libelle;
							var action = {};
							action["id"] = 0;
							action["titre"] = titre;
							action["etat"] = etat;
							action["client"] = client;
							actionJ = JSON.stringify(action);
							// on affiche l'objet JSON actionJ
							// console.log(actionJ);

							// ajax#3 On ajoute l'action
							$.ajax({
								url : '/api/v1/actions',
								type : 'POST',
								data : actionJ,
								contentType : 'application/json',
								dataType : 'json',
								success : function(act) {

									// on recharge le tableau et on redéfinit
									// les évènements click sur boutons
									// supprimer et historique
									generationTableauActions();

									// ajout historique
									var date = new Date();
									var historique = {};
									historique["id"] = 0;
									historique["action"] = act;
									historique["date"] = date.getFullYear()
											+ '-' + (date.getMonth() + 1) + '-'
											+ date.getDate();
									historique["etat"] = etat;

									$("#titre").val("");

									// ajax#4 On ajoute l'historique
									$.ajax({
										url : '/api/v1/historiques',
										type : 'POST',
										data : JSON.stringify(historique),
										contentType : 'application/json',
										dataType : 'json'
									});
								}
							});

						}
					});

				}
			});
		}
	}
}