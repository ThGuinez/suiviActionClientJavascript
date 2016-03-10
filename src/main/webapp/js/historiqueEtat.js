$(function() {

	function generationTableauHistoriqueEtat(id) {

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
		var tableHTML = "";
		tableHTML += "<thead><tr><th>Etat</th><th>Date</th></tr></thead><tbody>";
		
		if(JSON.parse(localStorage.getItem('historiqueEtats'))==undefined ){
			listeHistoriqueEtat = new Array();
		}
		else{
			listeHistoriqueEtat = JSON.parse(localStorage.getItem('historiqueEtats'));
		}
		
		if(listeHistoriqueEtat!=null){
		for (var i = 0; i < listeHistoriqueEtat.length; i++) {

			if (id == listeHistoriqueEtat[i].ref) {
				tableHTML += "<tr><td>"
						+ tableauEtat[listeHistoriqueEtat[i].etat]
						+ "</td><td>" + listeHistoriqueEtat[i].date
						+ "</td></tr>"
			}
		}
		tableHTML += "</tbody>";
		$("#afficherHistoEtat").html(tableHTML);
	}
	}

	$("#afficherHistoriqueDesChangementsEtat").click(
			generationTableauHistoriqueEtat(1));

});