$(document).ready(function() {

	recuperationLocalStorage();
	generationListeDeroulanteClientFormAction(listeDesClients);
	generationListeDeroulanteEtat(listeDesClients);
	generationTableauActions()

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
			var codeHTML = "";
			for (var i = 0; i < data.length; i++) {
				codeHTML += '<option value="' + data[i].id + '">' + data[i].nom
						+ '</option>';
			}
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
			var codeHTML = "";
			for (var i = 0; i < data.length; i++) {
				codeHTML += '<option value="' + data[i].id + '">'
						+ data[i].libelle + '</option>';
			}
			$("#listeDeroulanteEtat").html(codeHTML);
		}
	});

}

function generationListeDeroulanteEtatAvecSelected(idEtat, actid) {

	var codeHTMLB = "";
	var stringSelected = "";
	$.ajax({
		url : '/api/v1/etats',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == idEtat) {
					stringSelected = " selected ";
				}
				codeHTMLB += '<option value="' + data[i].id + '"'
						+ stringSelected + '>' + data[i].libelle + '</option>';
				stringSelected = "";
			}
			$('.listeEtatTableau[actid=' + actid + ']').html(codeHTMLB);
		}
	});
}

function generationTableauActions() {

	$.ajax({
		url : '/api/v1/actions',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
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
							+ '<select class="listeEtatTableau" actid="'
							+ data[i].id
							+ '">'
							+ generationListeDeroulanteEtatAvecSelected(
									data[i].etat.id, data[i].id)
							+ '</select>'
							+ '</td><td><button type="button" class="btn btn-default btn-lg boutHistorique" data-toggle="modal" data-target="#myModalHistoriqueEtat"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span></button></td>'
							+ '<td><button type="button" actionid="'
							+ data[i].id
							+ '" class="btn btn-default btn-lg boutSuppression" data-toggle="modal" data-target="#myModalSuppressionAction"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td></tr>';
				}
				$("#contenuTableau").html(tableHTML);
				detectClicHisto();
				detectClicChang();
				detectClicSupp();
				detectRecherche();
			}

		}
	});

}

function generationTableauActionsRecherche(chaine) {

	$.ajax({
		url : '/api/v1/actions',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			var tableHTML = "";
			if (data != null) {
				for (var i = 0; i < data.length; i++) {
					var position = data[i].titre.indexOf(chaine);
					if (position >= 0) {
						tableHTML += '<tr actionid='
								+ data[i].id
								+ '><td>'
								+ data[i].titre
								+ '</td><td>'
								+ data[i].client.nom
								+ '</td><td>'
								+ '<select class="listeEtatTableau" actid="'
								+ data[i].id
								+ '">'
								+ generationListeDeroulanteEtatAvecSelected(
										data[i].etat.id, data[i].id)
								+ '</select>'
								+ '</td><td><button type="button" class="btn btn-default btn-lg boutHistorique" data-toggle="modal" data-target="#myModalHistoriqueEtat"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span></button></td>'
								+ '<td><button type="button" actionid="'
								+ data[i].id
								+ '" class="btn btn-default btn-lg boutSuppression" data-toggle="modal" data-target="#myModalSuppressionAction"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td></tr>';
					}
					$("#contenuTableau").html(tableHTML);
					detectClicHisto();
					detectClicChang();
					detectClicSupp();
					detectRecherche();
				}
			}

		}
	});
}

function formatDate(input) {
	var datePart = input.match(/\d+/g), year = datePart[0].substring(2), month = datePart[1], day = datePart[2];

	return year + '-' + month + '-' + day;
}
