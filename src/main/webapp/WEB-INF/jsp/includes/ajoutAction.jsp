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
						<label for="client">Client :</label>
						 <select id="listeDeroulanteClients" name="client">
						</select>	
					</div>										
					<div class="form-group">
						<label for="etat">Etat :</label> 
						<select id="listeDeroulanteEtat" name="etat">
						</select>		
					</div>
					<button id="enregistrerNouvelleAction" type="submit"
						class="btn btn-default" data-dismiss="modal">Enregistrer</button>
				</form>
			</div>
		</div>
	</div>
</div>