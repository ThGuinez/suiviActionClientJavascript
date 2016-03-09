$(function(){
	
	$("#enregistrerNouveauClient").click(enregisterClient);
	
	function enregisterClient(){
		var nom = $("#nom").val();
		var mel = $("#mel").val();
		var client = new Client(nom,mel);
		var listeCli = new ListeClients(listeDesClients);
		listeCli.ajouter(listeCli.tableauClients,client);
		localStorage.listeClients = JSON.stringify(listeCli.tableauClients);
		listeDesClients = JSON.parse(localStorage.getItem('listeClients'));
	};
	
	
});






