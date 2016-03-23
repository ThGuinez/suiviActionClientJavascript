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
	generationTableauActionsRecherche(chaine);
}