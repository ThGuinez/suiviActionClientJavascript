$(function(){
	
	$("#enregistrerNouveauClient").click(enregisterClient);
	
	function enregisterClient(){
		var nom = $("#nom").val();
		var mel = $("#mel").val();
		var id = nouvelId();
		var client = new Client(id,nom,mel);
		var listeCli = new ListeClients(listeDesClients);
		listeCli.ajouter(listeCli.tableauClients,client);
		localStorage.listeClients = JSON.stringify(listeCli.tableauClients);
		listeDesClients = JSON.parse(localStorage.getItem('listeClients'));
		$("#nom").val("");
		$("#mel").val("");
	};
	
	function nouvelId(){
		var nb = listeDesClients.length;
		if(nb>0){
			var lastId = listeDesClients[nb-1].id;
			return lastId+1;
		}
		else{
			return 1;
		}
	}
	
});






