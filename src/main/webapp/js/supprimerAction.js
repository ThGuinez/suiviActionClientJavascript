var actionid;

function detectClicSupp(){
	
	$(".boutSuppression").click(function() {
		actionid = $(".boutSuppression").parent("td").parent("tr").attr('actionid');
		//alert(actionid);
	});

}

$(function() {

	
	detectClicSupp();
	
	function supprimerAction(id) {

		//alert(id);
		
		var i = 0;
		var dataDelete = false;

		if (JSON.parse(localStorage.getItem('listeActions')) == undefined) {
			listeActionsClients = new Array();
		} else {
			listeActionsClients = JSON.parse(localStorage
					.getItem('listeActions'));
		}

		
		while (dataDelete == false && i < listeActionsClients.length) {
			//alert("A");
			if (listeActionsClients[i].id == id) {
				//alert("B:"+listeActionsClients[i].id);
				var listAc = new ListeActions(listeActionsClients);
				listeActionsClients = listAc.supprimer(
						listAc.tableauActions, listeActionsClients[i]);
				localStorage.listeActions= JSON.stringify(listeActionsClients);
				dataDelete = true;
				generationTableauActions();	
				detectClicSupp();
			}
			i = i + 1;
		}
	}


	
	$("#validerSuppressionAction").click(function(){
		//alert(actionid);
		supprimerAction(actionid);
	});
	
});



