$(function() {

});

function detectRecherche(){
	$("#search").keyup(function() {
		chaine = $(this).val();
		if(chaine.length>=3){
			rechercher(chaine);
		}
	});
}

function rechercher(chaine){
	console.log(chaine);
	// aficher le tableau mais en filtrant les résultats en fonction de la chaine recherchée
}