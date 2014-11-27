 <?php

 if(isset($_GET['open']) && $_GET['open']=="1"){
 	$opened = ($_GET['open']=="1");
 }else{
 	$opened = false;
 }

 $message_status = '';
 $erreurNom = '';
 $erreurMedia = '';
 $erreurMail = '';
 $erreurTel = '';
 $erreurEnvoi = '';

 if(isset($_POST['nom'])){ $nom = strip_tags($_POST['nom']); }else{ $nom = '';}
 if(isset($_POST['media'])){ $media = strip_tags($_POST['media']); }else{ $media = ''; }
 if(isset($_POST['mail'])){ $mail = strip_tags($_POST['mail']); }else{ $mail = ''; }
 if(isset($_POST['tel'])){ $tel = strip_tags($_POST['tel']); }else{ $tel = ''; }

 // MAIL DE DESTINATION //////////////////////////////////////
 $mailto = 'presse@cross-commerce.com';

 if(isset($_POST['submitted'])) {
 	if(empty($nom)) {
 		$erreurNom = 'Le champ <span>Nom</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}
 	if(empty($media)) {
 		$erreurMedia = 'Le champ <span>Média</span> est obligatoire';
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
 	if($erreurNom == '' && $erreurMedia == '' && $erreurMail == '' && $erreurTel == ''){ 
 		$subject = "Nouvelle demande de dossier de presse provenant de change-commerce.com";
 		$headers = 'De: '. $nom . "\r\n" .
 					'Média: '. $media . "\r\n" .
 					'Tél: '. $tel . "\r\n" .
 					'Répondre : ' . $mail . "\r\n";
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

?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	  	<meta charset="utf-8">
	  	<title>Communiqués de presse - Change</title>
	  	<meta name="description" content="">
	  	<meta name="viewport" content="width=device-width, initial-scale = 1" />
	  	<meta name="format-detection" content="telephone=no">

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

	<body class="presse">
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
							<li class="lien-temp"><a href="qui-sommes-nous" title="Entreprise"><span>Entreprise</span></a></li>
							<li><a href="contacts" class="lien-contact" title="Contact"><span>Contact</span></a></li>
						</ul>
						<div class="hamburger">
							<a href="http://www.change-commerce.com" class="symbole-burger" title="Déployer le menu">Menu <span class="symbole-burger"><span class="icon-burger1 b1"></span><span class="icon-burger2"></span><span class="icon-burger1 b3"></span></span></a>
						</div>
					</nav>
				</div>
			</div>
		</header>

		<div class='presse-header'>
			<div class="container small-width align-center content">
				<h1 class="maj">Dernier communiqué de presse :</h1>
				<h2 class="h1 small">“Deux acteurs phares du e-commerce français se rapprochent”</h2>
				<p><b>Proximis, éditeur spécialisé dans le cross-canal depuis 2008, opère un rapprochement stratégique avec l’éditeur de la plateforme e-commerce Change et reprend dans son portefeuille produits la solution éponyme, jusqu’alors dans le giron de la société RBS.</b> Change, issue de 8 années de R&D et disposant de plus de 50 clients, dont des Retailers de premier ordre [...]</p>
				<div class="btn"><a href="#" title="Télécharger le communiqué au format PDF">Lire la suite<span class="icon-plus"></span></a></div>
			</div>

			<div class='bandeau'>
				<div class="container small-width">
					<!--<div class="btn right"><a href="#" class="maj retour"><span class="icon-prev"></span> Retour</a><b class="maj">Voir le communiqué précédent :</b> <a href="#" title="Communiqué précédent">Rapprochement de Change et Proximis <span class="icon-plus"></span></a></div>
					<div class="btn"><b class="maj">Voir le communiqué précédent :</b> <a href="#" title="Communiqué précédent">Rapprochement de Change et Proximis <span class="icon-plus"></span></a></div>-->
					<div class="btn"><a href="#" class="maj" title="Tous les communiqués de presse">Tous les communiqués de presse<span class="icon-plus"></span></a></div>
				</div>
			</div>

			<div class="ombrePresse"></div>
		</div>

		<div class="largeContainer <?php if($opened) echo 'opened'; ?>" id="formDossier">
			<div class="container small-width <?php if($message_status == 'Demande envoyée') echo 'success'; ?>">
				<h2 class="h1 small">Dossier de presse</h2>
				<p class="small">
					<?php if($message_status == 'Demande envoyée'){ echo "<b>Merci !</b><br/>Nous allons vous faire parvenir notre dossier de presse dans les meilleurs délais.<br/><br/>Pour tout autre demande concernant la presse, merci de bien vouloir envoyer un email à l'adresse :<br/><a href='mailto:presse@cross-commerce.com'>presse@cross-commerce.com</a>"; 
						  }else{ echo "Merci d'utliser notre dossier de presse si vous écrivez un article à propos de Change."; 
					} ?>
				</p>
				<a href="#" class="maj bigBtn" id="dossier">Demander un dossier de presse</a>

				<?php if($message_status == 'Erreur'){
					echo '<p class="error">';
					if($erreurNom != '') echo $erreurNom .'<br/>';
					if($erreurMedia != '') echo $erreurMedia .'<br/>';
					if($erreurMail != '') echo $erreurMail .'<br/>';
					if($erreurTel != '') echo $erreurTel .'<br/>'; 
					if($erreurEnvoi != '') echo $erreurEnvoi;
					echo '</p>'; 
				} ?>

				<form method="POST" action="presse.php?open=1" class="form <?php if($opened) echo 'op'; ?>">
					<b class="maj">Merci de bien vouloir compléter le formulaire :</b>
					<fieldset class="smallField">
						<fieldset class="<?php if($erreurNom != '') echo 'error'; ?>">
							<label for="nom">Nom &#38; prénom</label>
							<input type="text" name="nom" id="nom" value="<?php echo $nom; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurMedia != '') echo 'error'; ?>">
							<label for="media">Média</label>
							<input type="text" name="media" id="media" value="<?php echo $media; ?>">
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
					<input class="maj bigBtn" type="submit" name="submitted" value="Envoyer ma demande">
				</form>

				<div class="chemise"></div>
			</div>

			<div class="bandeau">
				<div class="container small-width align-center">
					<p>Pour tout autre demande concernant la presse, merci de bien vouloir nous envoyer un email à <nobr><a href="mailto:presse@cross-commerce.com">presse@cross-commerce.com</a></nobr></p>
				</div>
			</div>
		</div>	

		<div class="bloc-noir-fond">
			<div class="container small-width clearfix">
				<div class="containerRight">
					<h2 class="blanc small">Vous avez besoin du Logo Change ?</h2>
					<a href="#" class="maj bigBtn">Télécharger le kit <span>(15Ko)</span></a>
				</div>
				<div class="presseLogo"></div>
			</div>
		</div>

		<div class="container small-width padding-top-bottom">
			<h2 class="maj center">Dans l'actualité...</h2>
			<ul class="liste-releves">
				<li>
					<a href="#">
						<img src="img/presse/releve1.jpg" alt=""/>
						<span>
							<span class="meta">Le <b class="maj">30/09/14</b> sur <b class="maj">fusacq.com</b></span>
							<span class="h2 small rouge">Deux acteurs phares du e-commerce français se rapprochent</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="img/presse/releve2.jpg" alt=""/>
						<span>
							<span class="meta">Le <b class="maj">23/09/14</b> sur <b class="maj">marketingperformer.fr</b></span>
							<span class="h2 small rouge">Proximis rachète l'éditeur de la plateforme e-commerce Change</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="img/presse/releve3.jpg" alt=""/>
						<span>
							<span class="meta">Le <b class="maj">22/09/14</b> sur <b class="maj">itrnews.com</b></span>
							<span class="h2 small rouge">Proximis et Change se rapprochent</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="img/presse/releve4.jpg" alt=""/>
						<span>
							<span class="meta">Le <b class="maj">22/09/14</b> sur <b class="maj">actic.fr</b></span>
							<span class="h2 small rouge">Deux acteurs phares du Ecommerce français se rapprochent, PROXIMIS et CHANGE</span>
						</span>
					</a>
				</li>
			</ul>
			<ul class="nav-releves">
				<li class="prev"><a href="">‹</a></li>
				<li><a href="">1</a></li>
				<li>...</li>
				<li><a href="">4</a></li>
				<li class="actif">5</li>
				<li><a href="">6</a></li>
				<li>...</li>
				<li><a href="">25</a></li>
				<li class="next"><a href="">›</a></li>
			</ul>
		</div>

		<footer>
			<div id="contact">
				<div class="container medium">
					<p><b>Contactez-nous.</b> Parlons de votre projet&nbsp;!</p>
					<ul class="liens-contact">
						<li>
							<a class="icon-tel fd-bleu" href="contacts?open=2">09 72 26 88 88</a> 
						</li>
						<li>
							<a class="icon-mail fd-rouge" href="contacts?open=1">contact@change-commerce.com</a>
						</li>
					</ul>
				</div>
			</div>
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
