<!-- Modal -->
<div id="myModalAction" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Ajouter une nouvelle action</h4>
			</div>
			<div class="modal-body">
				<form role="form">
					<div class="form-group">
						<label for="nom">Titre :</label> <input type="text"
							class="form-control" id="titre">
					</div>
					<div class="form-group">
						<label for="client">Client :</label> <input type="text"
							class="form-control" id="client">
					</div>					
					<div class="form-group">
						<label for="etat">Etat :</label> 
						<select name="etat">
						  <option value="1">Début projet</option>
						  <option value="2">En cours</option>
						  <option value="3">Devis envoyé</option>
						  <option value="4">Devis accepté et signé</option>
						  <option value="5">Réalisé</option>
						  <option value="6">Fini</option>
						  <option value="7">Fin projet</option>
						  <option value="8">Litige</option>
						  <option value="9">Abandonné</option>
						</select>		
					</div>
					<button id="enregistrerNouvelAction" type="submit"
						class="btn btn-default" data-dismiss="modal">Enregistrer</button>
				</form>
			</div>
		</div>
	</div>
</div>