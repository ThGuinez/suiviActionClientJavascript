<!------------------------------------>
<!-------------- EN TETE ------------->
<!------------------------------------>
	<div class="jumbotron">
		<div class="container-jumbotron">
			<h1>LudoGiciel</h1>
			<hr>
			<p>Solution de gestion de ludothèque</p>

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
            	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                	<span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>				
            </div>
   
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
         		<ul class="nav navbar-nav">
    
	<!-------------- ACCUEIL ----------->
					<c:url value="/index" var="indexUrl"/>
					<li><a href="${indexUrl}">ACCUEIL <span class="sr-only"></span></a></li>
	
	<!-------------- PRET -------------->

					<c:url value="/reservation/lister" var="listerReservation"/>
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">PRÊT <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="pret-planning.html">PLANNING DES RETOURS</a></li>
                            <li><a href="${listerReservation}">PLANNING DES RÉSERVATIONS</a></li>
                        </ul>
                    </li>
									
	<!-------------- JEUX ---------------->
	 
	 				<c:url value="/jeu/ajouter" var="ajouterJeu"/>
	 				<c:url value="/jeu/lister" var="listerJeu"/>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">JEUX <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                        	<li><a href="${ajouterJeu}">AJOUTER</a></li>
                            <li><a href="${listerJeu}">LISTER</a></li>
                        </ul>
                    </li>
    <!-------------- ADHERENT ---------------->
	 				<c:url value="/adherent/ajouter" var="ajouterAdherent"/>
	 				<c:url value="/adherent/lister" var="listerAdherent"/>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">ADHÉRENT <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="${ajouterAdherent}">AJOUTER</a></li>
                            <li><a href="${listerAdherent}">LISTER</a></li>
                        </ul>
                    </li>
	 
	 
	<!-------------- COMPTA -------------->
		 			<c:url value="/compta/operation" var="listeOperation"/>
	 				<c:url value="/compta/solde" var="solde"/>
	  				<c:url value="/compta/bilan" var="bilan"/>
	 				
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">COMPTA <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="${listeOperation}">LISTE DES OPÉRATIONS</a></li>
                            <li><a href="${solde}">SOLDE</a></li>
                            <li><a href="${bilan}">BILAN</a></li>
                        </ul>
                    </li>	
		
	<!---------- IMPORT/EXPORT ----------->
	
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">IMPORT/EXPORT <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="import.html">IMPORT</a></li>
                            <li><a href="export.html">EXPORT</a></li>
                        </ul>
                    </li>
	<!---------- NEWSLETTER ----------->

					<li><a href="newsletter.html">NEWSLETTER <span class="sr-only"></span></a></li>

	<!---------- REGLAGES ----------->

					<c:url value="/reglages/parametres" var="listerParametres"/>
	 					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">RÉGLAGES <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                        	<li><a href="${listerParametres}">LISTER LES PARAMÈTRES</a></li>
                        </ul>
                    </li>
               
	<!-------------- LOGOUT ------------->
         		
         			<c:url value="/logout" var="logoutUrl"/>
         			<li><a href="${logoutUrl}">DÉCONNEXION ${user} <span class="sr-only"></span></a></li>
	               
               
                </ul>		
            </div>
        </nav>
<!------------------------------------>
<!------------FIN NAVBAR ------------->
<!------------------------------------>