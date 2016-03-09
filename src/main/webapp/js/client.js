function Client(nom,mel){
	this.nom = nom;
	this.mel = mel;
}

function ListeClients(listeClients){
	this.tableauClients = listeClients;
	this.ajouter = ajouterClient;
	this.supprimer = supprimerClient;
}

function ajouterClient(tableauClients,client){
	tableauClients.push(client);
}

function supprimerClient(tableauClients,client){
	var index = tableauClients.indexOf(client);
	tableauClients.splice(index,1);
}

//jeu d'essai

/*
var client1 = new Action("John Doe","john@doe.com");
var client2 = new Action("Jaimie Lee","Jaimie@lee.com");
var liste = new Array(client1,client2);
var listeCli = new ListeClients(liste);

localStorage.listeClients = JSON.stringify(listeCli.tableauClients);

var tableauClients = [];
tableauClients = JSON.parse(localStorage.getItem('listeClients'));
*/