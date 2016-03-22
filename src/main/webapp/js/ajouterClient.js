$(function() {

	$("#enregistrerNouveauClient").click(enregisterClient);
	$("#randomClient").click(genererClient);

	
	function enregisterClient() {
		var nom = $("#nom").val();
		var mel = $("#mel").val();
		var client = new Client(0, nom, mel);
		
		console.log(client);
		
		$.ajax({
			url : '/api/v1/clients',
			type : 'POST',
			data : JSON.stringify(client),
			contentType: 'application/json',
			dataType : 'json',
			success : function(data) {
				generationListeDeroulanteClientFormAction(listeDesClients);
				testnavbar();
				$("#nom").val("");
				$("#mel").val("");
			}
		});
	};

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
				console.log(data.results[0].user.name.last);
				console.log(data.results[0].user.email);
				$("#nom").val(data.results[0].user.name.last);
				$("#mel").val(data.results[0].user.email);
			}
		});

	}

});
