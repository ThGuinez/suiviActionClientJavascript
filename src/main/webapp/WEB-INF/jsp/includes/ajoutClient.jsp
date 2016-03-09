<div class="boutton">
	<button type="button" class="btn btn-info btn-lg" data-toggle="modal"
		data-target="#myModal">Nouveau Client</button>
</div>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Ajouter un nouveau client</h4>
			</div>
			<div class="modal-body">
				<form>
					<p>
						<button type="button meslabels" class="btn btn-default"
							aria-label="Left Align">
							<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
							<label for="nom">Nom et prénom</label>
						</button>
						<input id="nom" type="text" value="" />
					</p>
					<p>	
						<button type="button meslabels" class="btn btn-default"
							aria-label="Left Align">
							<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
							<label for="mel">Adresse de messagerie</label>
						</button>
						<input id="mel" type="mail" value="" />
					</p>
				</form>
			</div>
			<div class="modal-footer">
				<button id="enregistrerNouveauClient" type="button" class="btn btn-default" data-dismiss="modal">Enregistrer</button>
			</div>
		</div>
	</div>
</div>