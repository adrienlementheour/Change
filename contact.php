 <?php
 
$opened_mail = false;
$opened_mail = ($_GET['open']==="1");
   
$opened_tel = false;
$opened_tel = ($_GET['open']==="2");

  

 $message_status = '';
 $erreurNom = '';
 $erreurSociete = '';
 $erreurMail = '';
 $erreurTel = '';

 $message_status2 = '';
 $erreurNom2 = '';
 $erreurTel2 = '';

 $erreurEnvoi = '';


 $nom = strip_tags($_POST['nom']);
 $societe = strip_tags($_POST['societe']);
 $mail = strip_tags($_POST['mail']);
 $tel = strip_tags($_POST['tel']);
 $message = strip_tags($_POST['message']);
 $submitted = $_POST['submitted'];

 $nom2 = strip_tags($_POST['nom2']);
 $tel2 = strip_tags($_POST['tel2']);
 $periodeAM = strip_tags($_POST['periodeAM']);
 $periodePM = strip_tags($_POST['periodePM']);
 $submitted2 = $_POST['submitted2'];
 
 
 
 
// MAIL DE DESTINATION //////////////////////////////////////
$mailto = 'faustine.marechalle@proximis.com';
 
 
 
 
 $subject = "Nouveau message provenant de change-commerce.com";
 $headers = 'De: '. $nom . "\r\n" .
 			'Société: '. $societe . "\r\n" .
 			'Tél: '. $tel . "\r\n" .
			'Répondre : ' . $mail . "\r\n";

 $subject2 = "Demande d'appel telephonique sur change-commerce.com";
 $periodeIdeale = "– rien de coché –";
 if ($periodeAM === "on") {
 		if ($periodePM === "on") {
		 	 $periodeIdeale = "matin et après-midi";
		} else {
			 $periodeIdeale = "matin";
		}
 } else {
 	if ($periodePM === "on") {
 		 $periodeIdeale = "après-midi ";
 	}
 }
 $headers2 = 'De: '. $nom2 . "\r\n" .
			 'Tél: '. $tel2 . "\r\n" .
			 'Période idéale: '. $periodeIdeale . "\r\n" ;
 


 if ( $submitted ) {
 	if(empty($nom)) {
 		$erreurNom = 'Le champ <span>Nom</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}
 	if(empty($societe)) {
 		$erreurSociete = 'Le champ <span>Société</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}
	if(empty($mail)) {
 		$erreurMail = 'Le champ <span>Email</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}else{
		if(!(filter_var($mail, FILTER_VALIDATE_EMAIL))) {
			$erreurMail = 'L’adresse email est invalide';
			$message_status = "Erreur"; 
		}
 	}
 	if(empty($tel)) {
 		$erreurTel = 'Le champ <span>Téléphone</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}else {
 		if (!(strlen($tel) == 10 && ctype_digit($tel))) {
 			$erreurTel = 'Le numéro de téléphone est incorrect';
 			$message_status = "Erreur"; 
 		}
 	}
	if($erreurNom == '' && $erreurSociete == '' && $erreurMail == '' && $erreurTel == ''){ 
		 $sent = mail( $mailto, $subject, $headers, $message);
		 if($sent) {
		 	$message_status = "Demande envoyée";
		 }
		 else{ 
		 	$message_status = "Erreur"; 	
		 	$erreurEnvoi = "Votre message n'a pas pu être envoyé. Veuillez réessayer!";
		}
	}
}


if ( $submitted2 ) {
	if(empty($tel2)) {
		$erreurTel2 = 'Le champ <span>Téléphone</span> est obligatoire';
		$message_status2 = "Erreur"; 
 	}else {
 		if (!(strlen($tel2) == 10 && ctype_digit($tel2))) {
 			$erreurTel2 = 'Numéro de téléphone incorrect';
 			$message_status2 = "Erreur"; 
 		}
 	}
 	if(empty($nom2)) {
 		$erreurNom2 = 'Le champ <span>Nom</span> est obligatoire';
 		$message_status2 = "Erreur"; 
 	}
 	else{
	 	if($erreurTel2 == '' && $erreurNom2 == ''){ 
			$sent = mail( $mailto, $subject2, $headers2);
			if($sent) {
			 	$message_status2 = "Demande envoyée";
		 	}
		 	else{ 
		 		$message_status2 = "Erreur"; 	
		 		$erreurEnvoi = "Votre message n'a pas pu être envoyé. Veuillez réessayer!";
			}
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
	  	<title>Change - Contact</title>
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
	</head>

	<body class="contactPage">
		<header id="header">
			<div id="top-header">
				<div class="container">
					<nav class="content-top-header">
						<div id="blog-header">
							<p><b>En direct du blog :</b> <span>Shopping : simplifier les achats, la cl&eacute; de la r&eacute;ussite</span></p>
							<a href="#" class="icon-plus" title="Lire le blog"></a>
						</div>
						<ul class="social-small">
							<li><a href="#" class="lien-social icon-facebook" title="Change sur Facebook"></a></li>
							<li><a href="#" class="lien-social icon-twitter" title="Change sur Twitter"></a></li>
							<li><a href="#" class="lien-social icon-linkedin" title="Change sur LinkedIn"></a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div id="bottom-header">
				<div class="container">
					<nav class="content-bottom-header">
						<a href="http://www.change-commerce.com" id="logo" title="Retour à l'accueil" class="ir">Change - Cross Commerce</a>
						<ul id="menu-header">
							<li><a href="solution-cross-commerce" class="lien-menu-header" title="Solution"><span>Solution</span></a></li>
							<li><a href="fonctionnalites" class="lien-menu-header" title="Fonctionnalit&eacute;s"><span>Fonctionnalit&eacute;s</span></a></li>
							<li><a href="references " class="lien-menu-header" title="R&eacute;f&eacute;rences"><span>R&eacute;f&eacute;rences</span></a></li>
							<li><a href="programme-integrateurs" class="lien-menu-header" title="Partenaires"><span>Partenaires</span></a></li>
							<li><a href="qui-sommes-nous" class="lien-menu-header" title="Entreprise"><span>Entreprise</span></a></li>
							<li class="active"><a href="contacts" class="lien-menu-header lien-contact" title="Contacter la société Change"><span>Contact</span></a></li>
						</ul>
						<div class="hamburger">
							<a href="http://www.change-commerce.com" class="lien-menu-header symbole-burger" title="Déployer le menu">Menu <span class="symbole-burger"><span class="icon-burger1 b1"></span><span class="icon-burger2"></span><span class="icon-burger1 b3"></span></span></a>
						</div>
					</nav>
				</div>
			</div>
		</header>

		<div class="container first medium content">
			<h1>Contactez-nous</h1>
			<div class="containerLeft">
				<p><b>Votre activité e-commerce est en plein développement</b><br/> et vous souhaitez intégrer rapidement vos magasins et vos produits au cœur de votre stratégie digitale, nous sommes à votre disposition pour échanger avec vous.</p>
				<ul class="liens-contact btn-contact">
					<li>
						<a id="soumettre" class="icon-mail fd-rouge" href="contact.php?open=1">
							contact@change-commerce.com
							<span> ou <span class="a">échanger autour de mon projet</span></span>
						</a>
					</li>
					<li>
						<a id="consultant" class="icon-tel fd-bleu" href="contact.php?open=2">
							09 72 26 88 88
							<span> ou <span class="a">un consultant vous rappelle</span></span>
						</a> 
					</li>
				</ul>
			</div>
			<div class="containerRight">
				<div class="masqueMap">
					<div id="map"></div>
				</div>
				<div class="adresses">
					<p>
						<b class="maj">Paris</b>
						16 bis avenue Parmentier 75011 Paris
					</p>
					<p>
						<b class="maj">Strasbourg</b>
						30 quai des Bateliers 67000 Strasbourg
					</p>
				</div>
			</div>
		</div>

		<div id="contactMail" class="largeContainer content form <?php if($opened_mail) echo 'opened'; ?>">
			<div class="container medium <?php if($message_status == 'Demande envoyée') echo 'success'; ?>">
				<h2 class="h1"><?php if($message_status == 'Demande envoyée'){ echo 'Merci !'; }else{ echo 'Votre projet'; } ?></h2>
				<p class="maj"><?php if($message_status == 'Demande envoyée'){ echo 'Nous avons bien reçu votre demande de contact'; }else{ echo 'Merci de bien vouloir compléter le formulaire suivant'; } ?></p>
				<?php if($message_status == 'Demande envoyée') echo '<p class="envoiReussi">Nos équipes vont revenir vers vous dés que possible</p>' ; ?>

				<?php if($message_status == 'Erreur'){
					echo '<p class="error">';
					if($erreurNom != '') echo $erreurNom .'<br/>';
					if($erreurSociete != '') echo $erreurSociete .'<br/>';
					if($erreurMail != '') echo $erreurMail .'<br/>';
					if($erreurTel != '') echo $erreurTel .'<br/>'; 
					if($erreurEnvoi != '') echo $erreurEnvoi;
					echo '</p>'; 
				} ?>

				<form method="POST" action="contact.php?open=1">
					<fieldset class="smallField">
						<fieldset class="<?php if($erreurNom != '') echo 'error'; ?>">
							<label for="nom">Nom &#38; prénom</label>
							<input type="text" name="nom" id="nom" value="<?php echo $nom; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurSociete != '') echo 'error'; ?>">
							<label for="societe">Société</label>
							<input type="text" name="societe" id="societe" value="<?php echo $societe; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurMail != '') echo 'error'; ?>">
							<label for="mail">Email <span>(pour vous répondre)</span></label>
							<input type="email" name="mail" id="mail" value="<?php echo $mail; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurTel != '') echo 'error'; ?>">
							<label for="tel">Téléphone</label>
							<input type="tel" name="tel" id="tel" value="<?php echo $tel; ?>">
						</fieldset>
					</fieldset>
					<fieldset class="fieldBlock">
						<label for="message" class="facultatif">Commentaires <span>(facultatif)</span></label> 
						<textarea name="message" id="message"><?php echo $message; ?></textarea>
					</fieldset>
					<input class="maj" type="submit" id="envoyer" name="submitted" value="Valider">
				</form>

			</div>
		</div>

		<div id="contactTel" class="largeContainer content form <?php if($opened_tel) echo 'opened'; ?>">
			<div class="container medium <?php if($message_status2 == 'Demande envoyée') echo 'success'; ?>">
				<h2 class="h1"><?php if($message_status2 == 'Demande envoyée'){ echo 'Merci !'; }else{ echo 'Un consultant vous rappelle'; } ?></h2>
				<?php if($message_status2 == 'Demande envoyée') echo '<p class="maj">Un consultant vous rappelle dés que possible</p>'; ?>

				<?php if($message_status2 == 'Erreur'){
					echo '<p class="error">';
					if($erreurTel2 != '') echo $erreurTel2 .'<br/>';
					if($erreurNom2 != '') echo $erreurNom2 .'<br/>';
					if($erreurEnvoi != '') echo $erreurEnvoi;
					echo '</p>'; 
				}?>

				<form method="POST" action="contact.php?open=2">
					<fieldset class=" <?php if ($erreurTel2 != '') echo 'error'; ?>">
						<label for="tel2">Numéro de téléphone</label>
						<input type="tel" id="tel2" name="tel2" value="<?php echo $tel2; ?>">
					</fieldset>
					<fieldset class=" <?php if ($erreurNom2 != '') echo 'error'; ?>">
						<label for="nom2">Nom</label>
						<input type="text" id="nom2" name="nom2" value="<?php echo $nom2; ?>">
					</fieldset>
					<fieldset class="rappel">
						<legend class="facultatif">Quand préférez-vous être rappelé ? <span>(facultatif)</span></legend>
						<input name="periodeAM" id="periodeAM" type="checkbox" <?php if($periodeAM === "on") echo "checked"; ?>/>
						<label class="labelBox" for="periodeAM">Matin</label>
						<input class="secondBox"  name="periodePM" id="periodePM" type="checkbox" <?php if($periodePM === "on") echo "checked"; ?>/>
						<label class="labelBox" for="periodePM">Après-midi</label>
					</fieldset>
					<input class="maj" type="submit" id="envoyer" name="submitted2" value="Valider">
				</form>
			</div>
		</div>

		<footer>
			<div class="container medium">
				<div class="col-left">
					<h2 class="footer-titre rouge">L'entreprise</h2>
					<nav>
						<ul class="menu-footer">
							<li><a href="#" title="A propos">A propos</a></li>
							<li><a href="programme-integrateurs" title="Partenaires">Partenaires</a></li>
							<li><a href="#" title="Carrière">Carrière</a></li>
							<li><a href="contacts" title="Contact">Contact</a></li>
						</ul>
					</nav>
				</div>
				<div class="col-mid">
					<h2 class="footer-titre gris">Ressources</h2>
					<nav>
						<ul class="menu-footer">
							<li><a href="#" title="Blog">Blog</a></li>
							<li><a href="#" title="Kit presse">Kit presse</a></li>
						</ul>
					</nav>
				</div>
				<div class="col-right">
					<h2 class="footer-titre bleu">Nous suivre</h2>
					<nav>
						<ul class="social-small">
							<li><a href="#" class="lien-social icon-facebook" title="Change sur Facebook"></a></li>
							<li><a href="#" class="lien-social icon-twitter" title="Change sur Twitter"></a></li>
							<li><a href="#" class="lien-social icon-linkedin" title="Change sur LinkedIn"></a></li>
						</ul>
					</nav>
					<form action="#" method="post" id="newsletter">
						<label for="email">newsletter :</label>
					  	<input size="" name="email" id="email" type="email" value="votre@email.fr" onfocus="this.value=''" />
					  	<input type="submit" value="OK" name="subscribe" class="button" id="bouton-ok">
					</form>
				</div>
			</div>
			<div id="footer-bottom">
				<div class="container medium">
					<nav>
						<ul>
							<li class="plan"><a href="#" title="Plan du site">Plan du site</a></li>
							<li><a href="mentions.html" title="Mentions légales">Mentions légales</a></li>
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
		<!-- Map -->
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASm3CwaK9qtcZEWYa-iQwHaGi3gcosAJc&sensor=false"></script>
		<!-- Tweens -->
		<script src="js/libs/greensock/TweenMax.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/libs/greensock/TimelineMax.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/libs/greensock/plugins/BezierPlugin.min.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/script.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
