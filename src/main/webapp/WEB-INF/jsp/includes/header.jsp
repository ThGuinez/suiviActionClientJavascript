<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Suivi d'actions Clients</title>

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <c:url value="/outils/bootstrap/js/bootstrap.min.js" var="bootstrapJsUrl"/>
  <script src="${bootstrapJsUrl}"></script>
   
<!-- scripts js -->
<c:url value='js/documentReady.js' var="documentReady"/>
<script src="${documentReady}"></script>
<c:url value='js/action.js' var="actionjs"/>
<script src="${actionjs}"></script>
<c:url value='js/client.js' var="clientjs"/>
<script src="${clientjs}"></script>
<c:url value='js/historique.js' var="historiquejs"/>
<script src="${historiquejs}"></script>
<c:url value='js/ajouterClient.js' var="ajouterClient"/>
<script src="${ajouterClient}"></script>
<c:url value='js/ajouterAction.js' var="ajouterAction"/>
<script src="${ajouterAction}"></script>
<c:url value='js/historiqueEtat.js' var="historiqueEtat"/>
<script src="${historiqueEtat}"></script>
<c:url value='js/supprimerAction.js' var="supprimerAction"/>
<script src="${supprimerAction}"></script>

<!-- Bootstrap -->
<c:url value='/outils/bootstrap/css/bootstrap.min.css' var="bootstrapCssUrl"/>
<link href="${bootstrapCssUrl}" rel="stylesheet">
<c:url value='/css/base.css' var="baseCssUrl"/>
<link href="${baseCssUrl}" rel="stylesheet">






<!--  jQuery UI -->
<!-- <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/cupertino/jquery-ui.css"> -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script> -->

<!-- GOOGLE FONT ---->
<!-- <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'> -->

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->