var actionid;

function detectClicSupp(){
	$(".boutSuppression").click(function() {
		actionid = $(this).attr('actionid');
		console.log(actionid);
	});
}

$(function() {
	
	$("#validerSuppressionAction").click(function(){
		//console.log(actionid);
		supprimerAction(actionid);
	});
	
	function supprimerAction(id) {

		$.ajax({
			url : '/api/v1/actions/'+id,
			type : 'DELETE',
			success : function() {
			generationTableauActions();
			}
		});
	}
});
