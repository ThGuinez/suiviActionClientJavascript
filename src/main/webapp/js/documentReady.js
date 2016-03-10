$( document ).ready(function() {
	recuperationLocalStorage();
	generationListeDeroulanteClientFormAction(listeDesClients);
});


function recuperationLocalStorage(){
	if(JSON.parse(localStorage.getItem('listeClients'))==undefined){
		listeDesClients = new Array();
	}
	else{
		listeDesClients = JSON.parse(localStorage.getItem('listeClients'));
	}
	
	if(JSON.parse(localStorage.getItem('listeActions'))==undefined ){
		listeActionsClients = new Array();
	}
	else{
		listeActionsClients = JSON.parse(localStorage.getItem('hisroriqueEtats'));
	}
	
	if(JSON.parse(localStorage.getItem('hisroriqueEtats'))==undefined ){
		listeHistoriqueEtat = new Array();
	}
	else{
		listeHistoriqueEtat = JSON.parse(localStorage.getItem('hisroriqueEtats'));
	}
}

function generationListeDeroulanteClientFormAction(listeDesClients){
	var codeHTML;
	for(var i=0;i<listeDesClients.length;i++){
		codeHTML += '<option value="'+listeDesClients[i].id+'">'+listeDesClients[i].nom+'</option>';
	}
	$("#listeDeroulanteClients").html(codeHTML);
}