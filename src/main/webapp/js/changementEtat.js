var actionident;

function detectClicChang() {
	$(".listeEtatTableau").change(
			function() {

				actionident = $(this).parent("td").parent("tr")
						.attr('actionid');
				var val = $(".listeEtatTableau").val();

				var action = {};
				action["id"] = actionident;
				var etat = {};
				etat["id"] = val;
				action["etat"] = etat;
				var historique = {};
				var date = new Date();
				historique["id"] = 0;
				historique["action"] = action;
				historique["date"] = date.getFullYear() + '-'
						+ (date.getMonth() + 1) + '-' + date.getDate();
				historique["etat"] = etat;

				$.ajax({
					url : '/api/v1/historiques',
					type : 'POST',
					data : JSON.stringify(historique),
					contentType : 'application/json',
					success : function() {
						
						// on met à jour l'objet action
						console.log("yo");

						$.ajax({
							url : '/api/v1/actions',
							type : 'PUT',
							data : JSON.stringify(action),
							contentType : 'application/json'
						});
					}
				});

				

				
			});
}

$(function() {
	detectClicChang();
});
