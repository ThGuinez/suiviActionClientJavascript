var actionid;

function detectClicSupp(){
	$(".boutSuppression").click(function() {
		actionid = $(".boutSuppression").parent("td").parent("tr").attr('actionid');
	});
}

$(function() {
	
	$("#validerSuppressionAction").click(function(){
		//alert(actionid);
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
