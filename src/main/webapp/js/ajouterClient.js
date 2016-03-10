$(function() {

	$("#enregistrerNouveauClient").click(enregisterClient);
	$("#randomClient").click(genererClient);

	
	function enregisterClient() {
		var nom = $("#nom").val();
		var mel = $("#mel").val();
		var id = nouvelIdClient();
		var client = new Client(id, nom, mel);
		var listeCli = new ListeClients(listeDesClients);
		listeCli.ajouter(listeCli.tableauClients, client);
		localStorage.listeClients = JSON.stringify(listeCli.tableauClients);
		listeDesClients = JSON.parse(localStorage.getItem('listeClients'));
		generationListeDeroulanteClientFormAction(listeDesClients);
		$("#nom").val("");
		$("#mel").val("");
	}
	;

	function nouvelIdClient() {
		var nb = listeDesClients.length;
		if (nb > 0) {
			var lastId = listeDesClients[nb - 1].id;
			return lastId + 1;
		} else {
			return 1;
		}
	}

	function genererClient() {
		$.ajax({
			url : 'https://randomuser.me/api/',
			dataType : 'json',
			success : function(data) {
				$("#nom").attr("value",data.results[0].user.name.last);
				$("#mel").attr("value",data.results[0].user.email);
			}
		});

	}

});
