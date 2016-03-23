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

function generationListeDeroulanteEtatAvecSelected(idEtat) {

	var codeHTMLB = "";
	var stringSelected = "";
	codeHTMLB += '<select class="listeEtatTableau">';
	$.ajax({
		url : '/api/v1/etats',
		type : 'GET',
		dataType : 'json',
		async: false,
		success : function(data) {
			// console.log(data);
			//console.log("longeur:"+data.length);
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == idEtat) {
					stringSelected = " selected ";
					//console.log("paf");
				}
				codeHTMLB += '<option value="'+data[i].id+'"'+ stringSelected+'>'+ data[i].libelle+'</option>';
				stringSelected = "";

			}

		}
	});
	codeHTMLB += '</select>';
	return codeHTMLB;
}

function generationTableauActions() {

	$.ajax({
				url : '/api/v1/actions',
				type : 'GET',
				dataType : 'json',
				success : function(data) {
					var tableHTML = "";
					var listeCli = new ListeClients(listeDesClients);
					// console.log(JSON.stringify(data));
					if (data != null) {
						for (var i = 0; i < data.length; i++) {

							// console.log("-------");
							// console.log("indice ="+i);
							// console.log("valeur etat id ="+data[i].etat.id);

							tableHTML += '<tr actionid='
									+ data[i].id
									+ '><td>'
									+ data[i].titre
									+ '</td><td>'
									+ data[i].client.nom
									+ '</td><td>'
									+ generationListeDeroulanteEtatAvecSelected(data[i].etat.id)
									+ '</td><td><button type="button" class="btn btn-default btn-lg boutHistorique" data-toggle="modal" data-target="#myModalHistoriqueEtat"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span></button></td>'
									+ '<td><button type="button" class="btn btn-default btn-lg boutSuppression" data-toggle="modal" data-target="#myModalSuppressionAction"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td></tr>';
							// console.log(generationListeDeroulanteEtatAvecSelected(data[i].etat.id));
						}
						$("#contenuTableau").html(tableHTML);
						detectClicHisto();
						detectClicChang();
						detectClicSupp();
					}

				}
			});

}

function formatDate(input) {
	var datePart = input.match(/\d+/g), year = datePart[0].substring(2), month = datePart[1], day = datePart[2];

	return year + '-' + month + '-' + day;
}
