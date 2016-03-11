<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
	<head>
		<%@ include file="includes/header.jsp" %>	    
	    <!-- CUSTOM CSS ---->
	    <c:url value='/css/login1.css' var="loginCssUrl"/>
		<link href="${loginCssUrl}" rel="stylesheet">			
	</head>
	
	
	<body onload='document.loginForm.j_username.focus();'>
<!------------------------------------>
<!-------------- EN TETE ------------->
<!------------------------------------>
	<div class="jumbotron">
		<div class="container-jumbotron">
			<h1>Suivi d'actions Clients</h1>
			<hr>
			<p>LA solution de suivi d'actions clients</p>

		</div>
    </div>
	
<!------------------------------------>
<!-----------FIN EN TETE ------------->
<!------------------------------------>	
	
 <!------------------------------------>
 <!-------------- NAVBAR -------------->
 <!------------------------------------>

        <nav class="navbar navbar-inverse navbar-static-top marginBottom-0" role="navigation">
            <div class="navbar-header">           			
<!-------------- ACCUEIL -------------->				
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav">
					
                </ul>
				
				
            </div>
        </nav>
<!------------------------------------>
<!------------FIN NAVBAR ------------->
<!------------------------------------>

<!------------------------------------>
<!---------------- CORPS -------------->
<!------------------------------------>	
   <div class="container">
        <div class="card card-container">
    		<c:url value="/img/avatar.png" var="avatarUrl"/>
            <img id="profile-img" class="profile-img-card" src="${avatarUrl}" />
            <p id="profile-name" class="profile-name-card"></p>
            <c:url value="/login" var="loginUrl"/>
            <form class="form-signin" action="${loginUrl}" method="POST">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="text" id="inputEmail" class="form-control" placeholder="Email" name="username">
                <input type="password" id="inputPassword" class="form-control" placeholder="mot de passe" name="password">
            <hr>                
                <c:if test="${param.error != null}">        
					<p>
						<span  class="errormsg">Mot de passe et/ou identifiant invalides.</span>
					</p>
				</c:if>
				<c:if test="${param.logout != null}">       
					<p>
						<span  class="errormsg"> Vous êtes maintenant déconnecté.</span>
					</p>
				</c:if>
				<input type="hidden"                        
					name="${_csrf.parameterName}"
					value="${_csrf.token}"/>
                <button class="btn btn-lg btn-primary btn-block btn-signin btnbase" type="submit" name="submit">Connexion</button>
            </form><!-- /form -->
        </div><!-- /card-container -->
    </div><!-- /container -->
	
	
		
	<%@ include file="includes/footer.jsp" %>	
	</body>
</html>