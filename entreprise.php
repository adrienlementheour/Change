<?php

 $message_status = '';
 $erreurMail = '';
 $erreurEnvoi = '';

 $mail = strip_tags($_POST['email-news']);
 $submitted = $_POST['subscribe'];

 // MAIL DE DESTINATION //////////////////////////////////////
$mailto = 'info@proximis.com';

 $subject = "Inscription alerte page Entreprise";
 $message = "Une personne souhaite être tenue au courant de la mise en ligne de la page entreprise sur change-commerce.com : " . $mail;

  if ( $submitted ) {
	if(empty($mail)) {
 		$erreurMail = 'Le champ <span>Email</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}else{
		if(!(filter_var($mail, FILTER_VALIDATE_EMAIL))) {
			$erreurMail = 'L’adresse email est invalide';
			$message_status = "Erreur"; 
		}
 	}

 	if($erreurMail == ''){ 
		 $sent = mail($mailto, $subject, $message);
		 if($sent) {
		 	$message_status = "success";
		 }
		 else{ 
		 	$message_status = "Erreur"; 	
		 	$erreurEnvoi = "Votre demande d'inscription n'a pas pu être envoyé. Veuillez réessayer!";
		}
	}
 }
?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	  	<meta charset="utf-8">
	  	<title>Page en construction - Change</title>
	  	<meta name="description" content="">
	  	<meta name="viewport" content="width=device-width, initial-scale = 1" />

	  	<meta property="og:title" content="Change" />
	  	<meta property="og:type" content="article" />
	  	<meta property="og:image" content=" " />
	  	<meta property="og:url" content="http://www.change-commerce.com" />
	  	<meta property="og:description" content=" " />

	  	<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
	  	<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
	  	<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
	  	<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
	  	<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
	  	<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
	  	<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
	  	<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
	  	<link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196">
	  	<link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
	  	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
	  	<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
	  	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
	  	<meta name="msapplication-TileColor" content="#54b8e7">
	  	<meta name="msapplication-TileImage" content="/mstile-144x144.png">

	  	<link rel="stylesheet" href="css/libs/normalize.css">
	  	<link rel="stylesheet" href="css/style.css">
		<!--[if lt IE 7]>
		<link rel="stylesheet" href="css/libs/ie6.css" />
		<![endif]-->

		<script src="js/libs/modernizr.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/libs/isMobile.min.js" type="text/javascript" charset="utf-8"></script>
	</head>

	<body>
		<header>
			<div>
				<div class="container">
					<nav class="bottom-header">
						<a href="./" id="logo" title="Retour à l'accueil" class="ir">Change - Cross Commerce</a>
						<ul id="menu-main">
							<li><a href="solution-cross-commerce" title="Solution"><span>Solution</span></a></li>
							<li><a href="fonctionnalites" title="Fonctionnalit&eacute;s"><span>Fonctionnalit&eacute;s</span></a></li>
							<li><a href="references" title="R&eacute;f&eacute;rences"><span>R&eacute;f&eacute;rences</span></a></li>
							<li class="lien-temp"><a href="programme-integrateurs" title="Partenaires"><span>Partenaires</span></a></li>
							<li class="active lien-temp"><a href="qui-sommes-nous" title="Entreprise"><span>Entreprise</span></a></li>
							<li><a href="contacts" class="lien-contact" title="Contact"><span>Contact</span></a></li>
						</ul>
						<div class="hamburger">
							<a href="http://www.change-commerce.com" class="symbole-burger" title="Déployer le menu">Menu <span class="symbole-burger"><span class="icon-burger1 b1"></span><span class="icon-burger2"></span><span class="icon-burger1 b3"></span></span></a>
						</div>
					</nav>
				</div>
			</div>
		</header>

		<div class="content">
			<div class="container first small small-temp ent">
				<h1>Cette page sera prochainement mise en ligne. </h1>
				<p>Nous vous invitons à nous contacter.</p>
			</div>
			<div class="container container-temp">
				<div class="temp temp-newsletter">
					<h2 class="maj"><?php if($message_status == "success"){ echo "Merci !"; }else{ echo "Vous souhaitez<br/>être informé de la mise en ligne de cette page ?"; } ?></h2>
					<form action="qui-sommes-nous" method="post" id="newsletter-temp" class='<?php if($message_status == "success") echo $message_status; if($message_status == "Erreur") echo 'error';?>'>
						<label for="email-temp">Email</label>
					  	<input size="" name="email-news" id="email-temp" type="email" value="<?php echo $mail; ?>"/>
					  	<input class="maj bigBtn" type="submit" value="S'inscrire" name="subscribe">
					</form>
					<?php if($message_status == 'Erreur'){
						echo '<p class="error">';
						if($erreurMail != '') echo $erreurMail .'<br/>';
						if($erreurEnvoi != '') echo $erreurEnvoi;
						echo '</p>'; 
					}?>
					<?php if($message_status == "success") echo "<p class='inscriptionOk'>Votre demande d'inscription a bien été envoyée</p>" ?>
				</div>
				<div class="temp temp-contact">
					<h2 class="maj">Vous souhaitez<br/>entrer en contact avec nous&nbsp;?</h2>
					<a href="mailto:contact@change-commerce.com" class="icon-mail fd-rouge">contact@change-commerce.com</a>
				</div>
			</div>
		</div>

		<footer>
			<div class="container medium">
				<div class="col-left">
					<h2 class="footer-titre rouge">L'entreprise</h2>
					<nav>
						<ul class="menu-footer">
							<li><a href="index.html#apropos" title="À propos">À propos</a></li>
							<li><a href="programme-integrateurs" title="Partenaires">Partenaires</a></li>
							<!--<li><a href="#" title="Carrière">Carrière</a></li>-->
							<li><a href="contacts" title="Contact">Contact</a></li>
						</ul>
					</nav>
				</div>
				<!--<div class="col-mid">
					<h2 class="footer-titre gris">Ressources</h2>
					<nav>
						<ul class="menu-footer">
							<li><a href="#" title="Blog">Blog</a></li>
							<li><a href="#" title="Kit presse">Kit presse</a></li>
						</ul>
					</nav>
				</div>
				<div class="col-right">-->
					<div class="col-mid col-temp">
					<h2 class="footer-titre bleu">Nous suivre</h2>
					<nav>
						<ul class="social-small">
							<li><a href="https://www.facebook.com/change.cross.commerce" class="lien-social icon-facebook" title="Change sur Facebook" target="_blank"></a></li>
							<li><a href="https://twitter.com/Change_commerce" class="lien-social icon-twitter" title="Change sur Twitter" target="_blank"></a></li>
							<li><a href="https://www.linkedin.com/company/change-commerce" class="lien-social icon-linkedin" title="Change sur LinkedIn" target="_blank"></a></li>
						</ul>
					</nav>
					</div>
					<!--<form action="#" method="post" id="newsletter">
						<label for="email">newsletter&nbsp;:</label>
					  	<input size="" name="email" id="email" type="email" value="votre@email.fr" onfocus="this.value=''" />
					  	<input type="submit" value="OK" name="subscribe" class="button" id="bouton-ok">
					</form>
				</div>-->
			</div>
			<div id="footer-bottom">
				<div class="container medium">
					<nav>
						<ul>
							<li class="plan"><a href="plan-du-site" title="Plan du site">Plan du site</a></li>
							<li><a href="mentions-legales" title="Mentions légales">Mentions légales</a></li>
						</ul>
					</nav>
					<span class="copyright">©2014 Change</span>
				</div>
			</div>
		</footer>

		<div id="masque"></div>

		<!--[if lt IE 7 ]>
			<script src="js/libs/dd_belatedpng.js"></script>
			<script>DD_belatedPNG.fix("img, .png_bg");</script>
		<![endif]-->
		<!-- jQuery -->
		<script src="js/libs/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
		<!-- Tweens -->
		<script src="js/libs/greensock/TweenMax.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/libs/greensock/TimelineMax.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/libs/greensock/plugins/BezierPlugin.min.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/min/script-min.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>