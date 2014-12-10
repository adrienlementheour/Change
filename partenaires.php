 <?php

 if(isset($_GET['open']) && $_GET['open']=="1"){
 	$opened = ($_GET['open']=="1");
 }else{
 	$opened = false;
 }

 $message_status = '';
 $erreurTech = '';
 $erreurNom = '';
 $erreurPrenom = '';
 $erreurSociete = '';
 $erreurMail = '';
 $erreurTel = '';
 $erreurEnvoi = '';

 if(isset($_POST['partner'])){ $partner = strip_tags($_POST['partner']); }else{ $partner = '';}
 if(isset($_POST['tech'])){ $tech = strip_tags($_POST['tech']); }else{ $tech = 'default';}
 if(isset($_POST['nom'])){ $nom = strip_tags($_POST['nom']); }else{ $nom = '';}
 if(isset($_POST['prenom'])){ $prenom = strip_tags($_POST['prenom']); }else{ $prenom = '';}
 if(isset($_POST['societe'])){ $societe = strip_tags($_POST['societe']); }else{ $societe = '';}
 if(isset($_POST['mail'])){ $mail = strip_tags($_POST['mail']); }else{ $mail = ''; }
 if(isset($_POST['tel'])){ $tel = strip_tags($_POST['tel']); }else{ $tel = ''; }

 // MAIL DE DESTINATION //////////////////////////////////////
 $mailto = 'shwarp@live.fr';

 if(isset($_POST['submitted'])) {
 	if ($partner == 'technologique'){
 		if($tech == 'default'){
 			$erreurTech = "Le <span>Choix d'une technologie</span> est obligatoire";
 			$message_status = "Erreur"; 
 		}
 	}
 	if(empty($nom)) {
 		$erreurNom = 'Le champ <span>Nom</span> est obligatoire';
 		$message_status = "Erreur"; 
 	}
 	if(empty($prenom)) {
 		$erreurPrenom = 'Le champ <span>Prénom</span> est obligatoire';
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
 	if($erreurTech == '' && $erreurNom == '' && $erreurPrenom == '' && $erreurSociete == '' && $erreurMail == '' && $erreurTel == ''){ 
 		$subject = "Nouvelle demande de partenariat provenant de change-commerce.com";
 		$headers =  'Partenariat souhaité: '. $partner .' '. $tech  . "\r\n" .
 					'De: '. $nom .' '. $prenom  . "\r\n" .
 					'Société: '. $societe . "\r\n" .
 					'Fonction: '. $fonction . "\r\n" .
 					'Site internet: '. $site . "\r\n" .
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
	  	<title>Partenaires - Change</title>
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

	<body class="partner">
		<header>
			<div>
				<div class="container">
					<nav class="bottom-header">
						<a href="./" id="logo" title="Retour à l'accueil" class="ir">Change - Cross Commerce</a>
						<ul id="menu-main">
							<li><a href="solution-cross-commerce" title="Solution"><span>Solution</span></a></li>
							<li><a href="fonctionnalites" title="Fonctionnalit&eacute;s"><span>Fonctionnalit&eacute;s</span></a></li>
							<li><a href="references" title="R&eacute;f&eacute;rences"><span>R&eacute;f&eacute;rences</span></a></li>
							<li class="active"><a href="programme-integrateurs" title="Partenaires"><span>Partenaires</span></a></li>
							<li class="lien-temp"><a href="qui-sommes-nous" title="Entreprise"><span>Entreprise</span></a></li>
							<li><a href="contacts" class="lien-contact" title="Contact"><span>Contact</span></a></li>
						</ul>
						<div class="hamburger">
							<a href="http://www.change-commerce.com" class="symbole-burger" title="Déployer le menu">Menu <span class="symbole-burger"><span class="icon-burger1 b1"></span><span class="icon-burger2"></span><span class="icon-burger1 b3"></span></span></a>
						</div>
					</nav>
				</div>
				<ul class="subMenu" id="subMenu">
					<li><a href="#solution" title="Partenaires solution">Partenaires solution</a></li>
					<li><a href="#technologiques" title="Partenaires technologiques">Partenaires technologiques</a></li>
					<li><a href="#ensemble" title="Travailler ensemble">Travailler ensemble</a></li>
					<li><a href="#partenaire" title="Devenir partenaire">Devenir partenaire</a></li>
					<li class="bulleMenu"></li>
				</ul>
			</div>
		</header>

		<div class='partner-header'>
			<div class="container align-center first blanc">
				<div class="rect">
					<p class="p1">Se consacrer exclusivement à son métier</p>	
					<h1 class="maj blanc">Travailler ensemble</h1>	
					<div class="bigSvg"></div>
					<div class="smallSvg"></div>
					<p class="p2">Être ouvert à celui des autres</p>
				</div>
			</div>

			<div class="hand"></div>

			<div class='bandeau fdbleu'>
				<p>La place que nous accordons à nos partenaires <b class="maj">est primordiale.</b></p>
				<p>La relation que nous entretenons avec eux <b class="maj">est la clé du succès.</b></p>
			</div>
		</div>

		<div class="partnerSolution" id="solution">
			<div class="container blanc">
				<div class="logoPartner"></div>
				<h2 class="rouge maj">Partenaires solution</h2>
				<p class="big-p">Des experts du commerce digital sont à votre service pour intégrer notre solution.</p>
				<p><b class="maj">Sélectionnés pour leur capacité à proposer un accompagnement stratégique de qualité,</b> à construire une expérience client innovante et activer des projets cross-commerce, ils ont décidé de représenter notre solution auprès de leurs clients. </p>
				<a href="#partenaire" id="partnerSol" class="bigBtn maj">Devenir partenaire solution</a>
			</div>
		</div>

		<div class="partnerTechno" id="technologiques">
			<div class="container">
				<div>
					<div class="logoPartner"></div>
					<h2 class="bleu maj">Partenaires technologiques</h2>
					<p class="big-p">Des solutions tierces apportant une valeur complémentaire à l'ensemble du projet e-commerce.</p>
					<p><b class="maj">Du Marketing Digital, à l'Expérience client, en passant par la Logistique,</b> tous nos partenaires spécialisés dans ces domaines participent à la réussite des projets de nos clients en associant leurs innovations et leurs savoir-faire technologiques. Notre système d’API connectée leur permet un interfaçage simple et rapide.</p>
					<a href="#partenaire" id="partnerTech" class="bigBtn maj">Devenir partenaire technologique</a>
				</div>
			</div>
		</div>

		<div class="content travailler" id="ensemble">
			<div class="container clearfix">
				<h2 class="bleu h1 extraSmall border"><span class="trav">Travailler</span> ensemble</h2>
				<b class="maj">Se consacrer exclusivement à son métier, et être ouvert à celui des autres. </b>
				<p>Ce principe que nous partageons tous les jours avec nos clients, nous en avons fait une <b>valeur clé</b> de notre <b>développement technologique.</b></p>
				<p>C’est ainsi que depuis de nombreuses années, pour répondre au plus près aux attentes du marché, nous avons décidé de nous <b>spécialiser exclusivement</b> dans le domaine de l’édition de <b>solutions de commerce digital</b>, et de consacrer l’intégralité de nos ressources à cette <b>fin unique.</b></p>
				<p>Fidèle à ce principe de spécialisation, nous sommes <b>ouverts</b> à l’ensemble des partenaires dont la <b>complémentarité technique</b> permet de créer toujours plus de <b>valeur</b> aux <b>projets de nos clients</b> ; qu’ils s’agissent de <b>partenaires d’intégration</b> de notre solution, ou de <b>partenaires de solutions tierces.</b></p>
			</div>
			<div class="fd"></div>
		</div>

		<div class="content objectif">
			<div class="container clearfix blanc">
				<h3 class="bleu h1 extraSmall border obj"><span>Un objectif</span> commun</h3>
				<p>Participant à la réussite des projets e-commerce de nos clients, la <b>qualité de service</b> de nos partenaires fait partie des principaux <b>critères de collaboration</b> que nous observons. </p>
				<p>Elle est toujours le <b>fruit de nombreux échanges</b> entre les équipes dédiées à l’élaboration de l’offre marketing et les équipes techniques.</p>
			</div>
		</div>

		<div class="content contrat">
			<div class="container clearfix">
				<h3 class="bleu h1 extraSmall border">Un contrat <span class="qual">de qualité</span></h3>
				<p>Nous accordons une place de <b>premier ordre</b> à tous nos partenaires et privilégions la <b>qualité de la relation</b> que nous entretenons avec eux.</p>
				<p>Être toujours <b>présents</b>, les <b>soutenir</b> au quotidien, dès la mise en place du projet, pendant le cycle d’exploitation, et pour assurer son renouvellement. </p>
				<b class="quote">Le dialogue, l’ouverture et l’intelligence technologique font partie des valeurs que nous partageons avec eux.</b>
			</div>
			<div class="fd"></div>
		</div>

		<div class="largeContainer <?php if($opened) echo 'opened'; ?>" id="partenaire">
			<div class="container small-width <?php if($message_status == 'Demande envoyée') echo 'success'; ?>">
				<h2 class="h1">Devenir partenaire</h2>
				<b class="maj">
					<?php if($message_status == 'Demande envoyée'){ echo "Merci !"; 
						  }else{ echo "Merci de bien vouloir compléter le formulaire suivant :"; 
					} ?>
				</b>

				<?php if($message_status == 'Erreur'){
					echo '<p class="error">';
					if($erreurTech != '') echo $erreurTech .'<br/>';
					if($erreurNom != '') echo $erreurNom .'<br/>';
					if($erreurPrenom != '') echo $erreurPrenom .'<br/>';
					if($erreurSociete != '') echo $erreurSociete .'<br/>';
					if($erreurMail != '') echo $erreurMail .'<br/>';
					if($erreurTel != '') echo $erreurTel .'<br/>'; 
					if($erreurEnvoi != '') echo $erreurEnvoi;
					echo '</p>'; 
				} ?>

				<form method="POST" action="?open=1" class="<?php if($opened) echo 'op'; ?>">
					<fieldset class="smallField">
						<fieldset class="fieldBlock">
							<label>Je souhaite devenir partenaire :</label>
							<fieldset class="fieldRadio">
								<input type="radio" name="partner" id="partnerSolution" value="solution" <?php if($partner != 'technologique') echo 'checked'; ?>> 
								<label for="partnerSolution">Solution</label> 
							</fieldset>
							<fieldset class="fieldBlock <?php if($erreurPartnerTech != '') echo 'error'; ?>">
								<input type="radio" name="partner" id="partnerTechnologique" value="technologique" <?php if($partner == 'technologique') echo 'checked'; ?>> 
								<label for="partnerTechnologique">Technologique :</label> 
								<select name="tech">
									<option value="default">—Choisir une technologie</option>
									<option value="1" <?php if($tech == '1') echo 'selected="selected"'; ?>>Techno1</option>
									<option value="2" <?php if($tech == '2') echo 'selected="selected"'; ?>>Techno2</option>
								</select>
							</fieldset>
						</fieldset>
						<fieldset class="<?php if($erreurNom != '') echo 'error'; ?>">
							<label for="nom">Nom</label>
							<input type="text" name="nom" id="nom" value="<?php echo $nom; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurPrenom != '') echo 'error'; ?>">
							<label for="prenom">Prénom</label>
							<input type="text" name="prenom" id="prenom" value="<?php echo $prenom; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurSociete != '') echo 'error'; ?>">
							<label for="societe">Société</label>
							<input type="text" name="societe" id="societe" value="<?php echo $societe; ?>">
						</fieldset>
						<fieldset>
							<label class="facultatif" for="fonction">Fonction <span>(facultatif)</span></label>
							<input type="text" name="fonction" id="fonction" value="<?php echo $fonction; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurMail != '') echo 'error'; ?>">
							<label for="mail">Email <span>(pour vous répondre)</span></label>
							<input type="email" name="mail" id="mail" value="<?php echo $mail; ?>">
						</fieldset>
						<fieldset class="<?php if($erreurTel != '') echo 'error'; ?>">
							<label for="tel">Téléphone</label>
							<input type="tel" name="tel" id="tel" value="<?php echo $tel; ?>">
						</fieldset>
						<fieldset>
							<label class="facultatif" for="site">Site Internet <span>(facultatif)</span></label>
							<input type="text" name="site" id="site" value="<?php echo $site; ?>">
						</fieldset>
					</fieldset>
					<fieldset class="fieldBlock">
						<label class="facultatif" for="message">Commentaires <span>(facultatif)</span></label>
						<textarea name="message" id="message"><?php echo $message; ?></textarea>
					</fieldset>
					<input class="maj bigBtn" type="submit" name="submitted" value="Envoyer">
				</form>
			</div>
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
		<script src="js/libs/greensock/plugins/DrawSVGPlugin.min.js" type="text/javascript" charset="utf-8"></script>
		
		<script src="js/min/script-min.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
