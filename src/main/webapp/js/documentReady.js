$( document ).ready(function() {
	recuiperationLocalStorage()
});


function recuiperationLocalStorage(){
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