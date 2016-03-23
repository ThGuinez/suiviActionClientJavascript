function detectClicHisto() {
	$(".boutHistorique").click(function() {
		actionid = $(this).parent("td").parent("tr").attr('actionid');
		//console.log(actionid);
		generationTableauHistoriqueEtat(actionid);
	});
}

function generationTableauHistoriqueEtat(id) {

	$.ajax({
		url : '/api/v1/historiques',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			var tableHTML = "";
			tableHTML += "<thead><tr><th>Etat</th><th>Date</th></tr></thead><tbody>";
			for (var i = 0; i < data.length; i++) {
				if (id == data[i].action.id) {
					tableHTML += "<tr><td>" + data[i].etat.libelle
							+ "</td><td>" + data[i].date + "</td></tr>";
				}
			}
			tableHTML += "</tbody>";
			$("#afficherHistoEtat").html(tableHTML);
		}
	});
}


