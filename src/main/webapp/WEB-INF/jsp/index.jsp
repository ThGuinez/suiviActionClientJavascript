<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="fr">
  <head>
  	<!-- header -->
    	<%@ include file="includes/header.jsp" %>
  </head>
  <body>
  
  	<!-- navBar -->
   	<%@ include file="includes/navbar.jsp" %>

	<!-- recherche -->
	<%@ include file="includes/recherche.jsp" %>	

	<!-- tableau -->
	<%@ include file="includes/tableau.jsp" %>	

	<!-- ajoutClient -->
	<%@ include file="includes/ajoutClient.jsp" %>	
	
	<!--  ajoutAction -->
	<%@ include file="includes/ajoutAction.jsp" %>	

	<!--  suppresionAction -->
	<%@ include file="includes/suppresionAction.jsp" %>		

	<!--  historiqueEtats -->
	<%@ include file="includes/historiqueEtats.jsp" %>			

	<!--  footer -->
	<%@ include file="includes/footer.jsp" %>	
	
  </body>
</html>