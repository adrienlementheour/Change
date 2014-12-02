 <?php

 if(isset($_GET['open']) && $_GET['open']=="1"){
 	$opened = ($_GET['open']=="1");
 }else{
 	$opened = false;
 }

 $message_status = '';
 $erreurNom = '';
 $erreurPrenom = '';
 $erreurSociete = '';
 $erreurMail = '';
 $erreurTel = '';
 $erreurEnvoi = '';

 if(isset($_POST['nom'])){ $nom = strip_tags($_POST['nom']); }else{ $nom = '';}
 if(isset($_POST['prenom'])){ $prenom = strip_tags($_POST['prenom']); }else{ $prenom = '';}
 if(isset($_POST['societe'])){ $societe = strip_tags($_POST['societe']); }else{ $societe = ''; }
 if(isset($_POST['fonction'])){ $fonction = strip_tags($_POST['fonction']); }else{ $fonction = '';}
 if(isset($_POST['mail'])){ $mail = strip_tags($_POST['mail']); }else{ $mail = ''; }
 if(isset($_POST['tel'])){ $tel = strip_tags($_POST['tel']); }else{ $tel = ''; }

 // MAIL DE DESTINATION //////////////////////////////////////
 $mailto = 'faustine.marechalle@proximis.com';

 if(isset($_POST['submitted'])) {
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
 	if($erreurNom == '' && $erreurSociete == '' && $erreurMail == '' && $erreurTel == ''){ 
 		$subject = "Nouvelle demande d'inscription au Club provenant de change-commerce.com";
 		$headers = 'De: '. $nom .' '. $prenom . "\r\n" .
 					'Société: '. $societe . "\r\n" .
 					'Fonction: '. $fonction . "\r\n" .
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
	  	<title>Le Club Cross-Commerce - Change</title>
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

	<body class="club">
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
		
		<div class="bloc-header-club">
			<div class="container first content">
				<div class="club-header">
					<h1>Le Club Cross-Commerce</h1>
					<p><b>Le marché du e-commerce est en pleine mutation. </b>Plus que jamais, les acteurs du Retail ont besoin de se rencontrer 
					pour échanger sur les sujets relatifs au e-commerce et au cross-canal. </p>
					<div class="macaron"></div>
				</div>
				
				<div class="containerLeft">
					<p>Dans ce cadre, nous vous proposons de rejoindre le Club<br/> Cross-Commerce cross-canal afin de <b>favoriser le partage d’expériences.</b></p>
					<p>Le Club Cross-Commerce est <b>ouvert à toute personne souhaitant échanger sur ces sujets.</b></p>
					<p>Que vous soyez clients, partenaires, prestataires, acteurs<br/> du marché, ou amis : rejoignez-nous dès maintenant ! </p>
					<a href="#inscription" id="btnClub" class="maj bigBtn">Je m'inscris</a>
				</div>
			</div>

			<div class="fdClubHeader"></div>
		</div>

		<div class="bloc-noir-fond">
			<div class="container medium">
				<h2 class="h1 extraSmall">En rejoignant le Club Cross-Commerce, vous pourrez :</h2>
				<ul class="liste-pictos liste-first">
					<li class="icon-bulles">Discuter et échanger vos expériences entre acteurs du e-commerce.</li>
					<li class="icon-tasse">Participer à des petits-déjeuners cross-canaux organisés par le Club. interviews…).</li>
				</ul><ul class="liste-pictos">
					<li class="icon-calendrier">Être invité aux grands événements du e-commerce et du cross-canal.</li>
					<li class="icon-participer">Participer à la meilleure promotion de vos actions marketing en lien avec le cross-canal (relations presse, communiqués de presse, interviews…).</li>
				</ul>
			</div>
			<div class="bandeau fdbleu">
				<p>Êtes-vous disponible pour vous joindre à nous lors des prochains événements du Club ? <a href="" title="Agenda">Accéder à l'agenda</a></p>
			</div>
		</div>

		<div class="largeContainer <?php if($opened) echo 'opened'; if($message_status == 'Demande envoyée') echo ' envoye'; if($message_status == 'Erreur') echo ' nonenvoye'; ?>" id="inscription">
			<div class="container small <?php if($message_status == 'Demande envoyée') echo 'success'; ?>">
				<h2 class="h1">Inscription</h2>
				<p class="maj"><?php if($message_status == 'Demande envoyée'){ echo "Votre demande d'inscription a bien été envoyée!"; }else{ echo "Pour vous inscrire, merci de remplir le formulaire ci-dessous :"; }?></p>

				<?php if($message_status == 'Erreur'){
					echo '<p class="error">';
					if($erreurNom != '') echo $erreurNom .'<br/>';
					if($erreurPrenom != '') echo $erreurPrenom .'<br/>';
					if($erreurSociete != '') echo $erreurSociete .'<br/>';
					if($erreurMail != '') echo $erreurMail .'<br/>';
					if($erreurTel != '') echo $erreurTel .'<br/>'; 
					if($erreurEnvoi != '') echo $erreurEnvoi;
					echo '</p>'; 
				} ?>

				<form method="POST" action="?open=1">
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
						<label for="fonction" class="facultatif">Fonction <span>(facultatif)</span></label>
						<input type="text" name="fonction" id="fonction" value="<?php echo $fonction; ?>">
					</fieldset>
					<fieldset class="<?php if($erreurMail != '') echo 'error'; ?>">
						<label for="mail">Email <span>(pour vous répondre)</span></label>
						<input type="email" name="mail" id="mail" value="<?php echo $mail; ?>">
					</fieldset>
					<fieldset class="<?php if($erreurTel != '') echo 'error'; ?>">
						<label for="tel">Téléphone</label>
						<input type="tel" name="tel" id="tel" value="<?php echo $tel; ?>">
					</fieldset><br/><br/>
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
		
		<script src="js/min/script-min.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
