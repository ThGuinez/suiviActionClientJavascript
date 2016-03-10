$( document ).ready(function() {
	
	tableauEtat = new Array();
	tableauEtat[0] ="Début projet";
	tableauEtat[1] = "En cours";
	tableauEtat[2] = "Devis envoyé";
	tableauEtat[3] = "Devis accepté et signé";
	tableauEtat[4] = "Réalisé";
	tableauEtat[5] = "Fini";
	tableauEtat[6] = "Fin projet";
	tableauEtat[7] = "Litige";
	tableauEtat[8] = "Abandonné";
	
	recuperationLocalStorage();
	generationListeDeroulanteClientFormAction(listeDesClients);
	generationListeDeroulanteEtat(listeDesClients);
	
});


function recuperationLocalStorage(){
	// clients
	if(JSON.parse(localStorage.getItem('listeClients'))==undefined){
		listeDesClients = new Array();
	}
	else{
		listeDesClients = JSON.parse(localStorage.getItem('listeClients'));
	}
	// actions
	if(JSON.parse(localStorage.getItem('listeActions'))==undefined ){
		listeActionsClients = new Array();
	}
	else{
		listeActionsClients = JSON.parse(localStorage.getItem('listeActions'));
	}
	// historique
	if(JSON.parse(localStorage.getItem('historiqueEtats'))==undefined ){
		listeHistoriqueEtat = new Array();
	}
	else{
		listeHistoriqueEtat = JSON.parse(localStorage.getItem('historiqueEtats'));
	}
}

function generationListeDeroulanteClientFormAction(listeDesClients){
	var codeHTML ="";
	for(var i=0;i<listeDesClients.length;i++){
		codeHTML += '<option value="'+listeDesClients[i].id+'">'+listeDesClients[i].nom+'</option>';
	}
	//alert(codeHTML);
	$("#listeDeroulanteClients").html(codeHTML);
}

function generationListeDeroulanteEtat(){
	var codeHTML ="";
	for(var i=0;i<tableauEtat.length;i++){
		codeHTML += '<option value="'+i+'">'+tableauEtat[i]+'</option>';
	}
	//alert(codeHTML);
	$("#listeDeroulanteEtat").html(codeHTML);
}