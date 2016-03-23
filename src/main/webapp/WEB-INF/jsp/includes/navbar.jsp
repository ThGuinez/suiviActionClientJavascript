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

        <nav class="navbar navbar-inverse navbar-static-top marginBottom-0 colormenu" role="navigation">
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
	<!-------------- AJOUT CLIENT ----------->
	
					<li ><a href="#myModalClient" data-toggle="modal" data-target="#myModalClient">NOUVEAU CLIENT <span class="sr-only"></span></a></li>
	
	<!-------------- AJOUT ACTION ----------->
	
					<li ><a id="navbarAction" href="#myModalAction" data-toggle="modal" data-target="#myModalAction">NOUVELLE ACTION<span class="sr-only"></span></a></li>
               
                </ul>		
            </div>
        </nav>
<!------------------------------------>
<!------------FIN NAVBAR ------------->
<!------------------------------------>