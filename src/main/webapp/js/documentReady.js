$(document).ready(function() {

	tableauEtat = new Array();
	tableauEtat[0] = "Début projet";
	tableauEtat[1] = "En cours";
	tableauEtat[2] = "Devis envoyé";
	tableauEtat[3] = "Devis accepté et signé";
	tableauEtat[4] = "Réalisé";
	tableauEtat[5] = "Fini";
	tableauEtat[6] = "Fin projet";
	tableauEtat[7] = "Litige";
	tableauEtat[8] = "Abandonné";

	recuperationLocalStorage();
	generationListeDeroulanteClientFormAction(listeDesClients);
	generationListeDeroulanteEtat(listeDesClients);
	generationTableauActions()
	detectClicHisto();
	detectClicChang

});

function recuperationLocalStorage() {

	if (localStorage.getItem("listeClients") == null) {
		localStorage.setItem("listeClients", "[]");
	}
	if (localStorage.getItem("listeActions") == null) {
		localStorage.setItem("listeActions", "[]");
	}
	if (localStorage.getItem("historiqueEtats") == null) {
		localStorage.setItem("historiqueEtats", "[]");
	}

	// clients
	listeDesClients = JSON.parse(localStorage.getItem('listeClients'));
	// actions
	listeActionsClients = JSON.parse(localStorage.getItem('listeActions'));
	// historique
	listeHistoriqueEtat = JSON.parse(localStorage.getItem('historiqueEtats'));
}

function generationListeDeroulanteClientFormAction(listeDesClients) {
	$.ajax({
		url : '/api/v1/clients',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			console.log(data);

			var codeHTML = "";
			for (var i = 0; i < data.length; i++) {
				codeHTML += '<option value="' + data[i].id + '">' + data[i].nom
						+ '</option>';
			}
			// alert(codeHTML);
			$("#listeDeroulanteClients").html(codeHTML);

		}
	});

}

function generationListeDeroulanteEtat() {

	$.ajax({
		url : '/api/v1/etats',
		type : 'GET',
		dataType : 'json',
		success : function(data) {

			console.log(data);

			var codeHTML = "";
			for (var i = 0; i < data.length; i++) {
				codeHTML += '<option value="' + i + '">' + data[i].libelle
						+ '</option>';
			}
			$("#listeDeroulanteEtat").html(codeHTML);
		}
	});

}

function generationListeDeroulanteEtatAvecSelected(etat) {
	
	$.ajax({
		url : '/api/v1/etats',
		type : 'GET',
		dataType : 'json',
		success : function(data) {

			console.log(data);

			var codeHTMLB = "";
			var stringSelected = "";
			codeHTMLB += '<select class="listeEtatTableau">';

			for (var z = 0; z < data.length; z++) {
				if (z == etat) {
					stringSelected = " selected ";
				}
				codeHTMLB += '<option value="' + z + '"' + stringSelected + '>'
						+ data[z].libelle + '</option>';
				stringSelected = "";
			}
			codeHTMLB += '</select>';
			// alert(codeHTML);
			return codeHTMLB;
		}
	});
}

function generationTableauActions() {

	$
			.ajax({
				url : '/api/v1/actions',
				type : 'GET',
				dataType : 'json',
				success : function(data) {

					console.log(data);

					var tableHTML = "";
					var listeCli = new ListeClients(listeDesClients);
					if (data != null) {
						for (var i = 0; i < data.length; i++) {

							tableHTML += '<tr actionid='
									+ data[i].id
									+ '><td>'
									+ data[i].titre
									+ '</td><td>'
									+ data[i].client.nom
									+ '</td><td>'
									// +
									// tableauEtat[listeActionsClients[i].etat]
									+ generationListeDeroulanteEtatAvecSelected(data[i].etat.id)
									+ '</td><td><button type="button" class="btn btn-default btn-lg boutHistorique" data-toggle="modal" data-target="#myModalHistoriqueEtat"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span></button></td>'
									+ '<td><button type="button" class="btn btn-default btn-lg boutSuppression" data-toggle="modal" data-target="#myModalSuppressionAction"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td></tr>';
						}
						$("#contenuTableau").html(tableHTML);
					}

				}
			});

}
