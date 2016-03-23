$(function() {

	$("#enregistrerNouveauClient").click(enregisterClient);
	$("#randomClient").click(genererClient);

	function enregisterClient() {
		var nom = $("#nom").val();
		var mel = $("#mel").val();
		var client = new Client(0, nom, mel);

		if (nom.length > 0 && mel.length > 0) {
			
			console.log("ok");
			
			$.ajax({
				url : '/api/v1/clients',
				type : 'POST',
				data : JSON.stringify(client),
				contentType : 'application/json',
				dataType : 'json',
				success : function(data) {
				    $("#myModalClient").modal('toggle');
					generationListeDeroulanteClientFormAction(listeDesClients);
					testnavbar();
					$("#nom").val("");
					$("#mel").val("");
				}
			});
		}
		else{
			
			console.log("no");
			
		      $(".messAlert").addClass("alert");
		      var counter = 0;
		      var interval = setInterval(function() {
		            counter++;
		            // Display 'counter' wherever you want to display it.
		            if (counter == 3) {
		                // Display a login box
		                clearInterval(interval);
		                $(".messAlert").removeClass("alert");
		            }
		          }, 1000);
		}
	};


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
