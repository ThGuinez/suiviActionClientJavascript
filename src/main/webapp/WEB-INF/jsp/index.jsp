<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="fr">
  <head>
  
  	<%@ include file="includes/header.jsp" %>

    <!-- CUSTOM CSS ---->
    <c:url value='/css/accueil.css' var="accueilCssUrl"/>
	<link href="${accueilCssUrl}" rel="stylesheet">
  </head>
  <body>
  	<%@ include file="includes/navbar.jsp" %>


	<%@ include file="includes/footer.jsp" %>	
    <c:url value="/js/index.js" var="indexJsUrl"/>
	<script src="${indexJsUrl}"></script>
  </body>
</html>