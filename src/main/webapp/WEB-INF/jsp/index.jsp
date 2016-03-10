<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="fr">
<head>
<!-- header -->
<%@ include file="includes/header.jsp"%>
</head>
<body>

	<!-- navBar -->
	<%@ include file="includes/navbar.jsp"%>

	<!-- recherche -->
	<%@ include file="includes/recherche.jsp"%>

	<!-- tableau -->
	<%@ include file="includes/tableau.jsp"%>

	<!--  bouton ajout Client -->
	<div class="boutton">
		<button type="button" class="btn btn-info btn-lg" data-toggle="modal"
			data-target="#myModalClient">Nouveau Client</button>
	</div>

	<!-- form ajoutClient -->
	<%@ include file="includes/ajoutClient.jsp"%>

	<!--  bouton ajoutAction -->
	<div class="boutton">
		<button type="button" class="btn btn-info btn-lg" data-toggle="modal"
			data-target="#myModalAction">Nouvelle action</button>
	</div>
	<!--  form ajoutAction -->
	<%@ include file="includes/ajoutAction.jsp"%>

	<!--  suppresionAction -->
	<%@ include file="includes/suppresionAction.jsp"%>

	<!--  bouton Historique -->
	<div class="boutton">
		<button id="afficherHistoriqueDesChangementsEtat" type="button" class="btn btn-info btn-lg" data-toggle="modal"
			data-target="#myModalHistoriqueEtat">Historique des Etats</button>
	</div>
	<!--  historiqueEtats -->
	<%@ include file="includes/historiqueEtats.jsp"%>

	<!--  footer -->
	<%@ include file="includes/footer.jsp"%>

</body>
</html>