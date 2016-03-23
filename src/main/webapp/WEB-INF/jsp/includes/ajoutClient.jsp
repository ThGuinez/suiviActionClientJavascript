<!-- Modal -->
<div id="myModalClient" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<p class="mess messAlert">Veuillez saisir le nom et le mél du client.</p>
			</div>
			<div class="modal-body">
					<div class="form-group">
						<label for="nom">Nom :</label> <input type="text"
							class="form-control" id="nom" name= "nom" value="">
					</div>
					<div class="form-group">
						<label for="mel">Adresse de messagerie :</label> <input
							type="email" class="form-control" id="mel" name="id" value="">
					</div>
					<button id="randomClient" type="button" class="btn btn-default">générer client aléatoire</button>
					<button id="enregistrerNouveauClient" class="btn btn-default">Enregistrer</button>
			</div>
		</div>
	</div>
</div>