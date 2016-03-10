<!-- Modal -->
<div id="myModalClient" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Ajouter un nouveau client</h4>
			</div>
			<div class="modal-body">
				<form role="form">
					<div class="form-group">
						<label for="nom">Nom :</label> <input type="text"
							class="form-control" id="nom">
					</div>
					<div class="form-group">
						<label for="mel">Adresse de messagerie :</label> <input
							type="email" class="form-control" id="mel">
					</div>
					<button id="enregistrerNouveauClient" type="submit"
						class="btn btn-default" data-dismiss="modal">Enregistrer</button>
				</form>
			</div>
		</div>
	</div>
</div>