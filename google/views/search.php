<?php

$desc = "Google.com - The revolutionary tool to search thru the internet with 1 singe click.";

?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<title>How hard can it be?</title>
	<meta name="description" content="<?= $desc ?>">

	<meta property="og:image" content="assets/img/tech.jpg">
	<meta property="og:title" content="How hard can it be?">
	<meta property="og:description" content="<?= $desc ?>">
	<meta property="og:type" content="">

	<meta name="theme-color" content="#BF00FF">

	<meta name="twitter:description" content="<?= $desc ?>">
	<meta name="twitter:image" content="assets/img/tech.jpg">
	<meta name="twitter:title" content="Help someone google.">
	<meta name="twitter:card" content="summary">
	<link rel="icon" type="image/jpeg" sizes="400x400" href="assets/img/icon.png">
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/4.5.0/cosmo/bootstrap.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&amp;display=swap">
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	
	<link rel="stylesheet" href="assets/css/styles.min.css">
	<link href="assets/css/animate.min.css" rel="stylesheet"/>
</head>

<body>
	<nav class="navbar navbar-dark navbar-expand fixed-top bg-dark">
		<div class="container-fluid"><a class="navbar-brand text-monospace" href="<?= url('') ?>"><img src="assets/img/icon.png" style="width: 32px;height: 32px;margin-right: 8px;">Insult.tech</a></div>
	</nav>
	
	<section>
		<div id="jumbo">
			<center class="center">
				<img src="assets/img/Logo.png" width="272"></img>

				<div class="search">
					<div class="icon input-group-text">
						<i class="fa fa-search"></i>
					</div>
						
					<input readonly="readonly" id="search-bar" type="text">
				</div>

				<div class="buttonWrapper">
					<div class="buttons">
						<button id="search-button" type="button" class="button">Google Search</button>
						<button type="button" class="button">I'm Feeling Lucky</button>
					</div>
				</div>
			</center>
		</div>
	</section>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
	<script src="assets/js/lib/bootstrap-notify.min.js"></script>
	<script src="assets/js/search.min.js"></script>

	<img id='mouse' src='assets/img/mouse_arrow.png' style='position:absolute;' />
	
	<script>
		let url = escapeHtml("<?= $url ?>".replace('/', '').split('/')[0]);

		function escapeHtml(text) {
			return text
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;");
			}
	</script>
</body>

</html>