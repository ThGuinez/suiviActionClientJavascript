function generationTableauHistoriqueEtat(id) {
	var tableHTML = "";
	for (var i = 0; i < listeHistoriqueEtat.length; i++) {
		if (id == listeHistoriqueEtat[i].ref) {
			tableHTML += "<tr><td>"+tableauEtat[listeHistoriqueEtat[i].etat]+"</td><td>"+listeHistoriqueEtat[i].etat+"</td></tr>"
		}
	}
	$("#afficherEtat").html(tableHTML);
}

$("#afficherHistoriqueDesChangementsEtat").click(generationTableauHistoriqueEtat(1));