function Client(id,nom,mel){
	this.id = id;
	this.nom = nom;
	this.mel = mel;
	this.getNom = getNomClient;
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

function getNomClient(tableauClients,id){
	var nom;
	var id;
	for(i=0;i<tableauClients.length;i++){
		if(tableauClients[i].id==id){
			return tableauClients[i].nom;
		}
	}
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