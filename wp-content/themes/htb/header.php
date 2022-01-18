<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
		
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;500&family=Vujahday+Script&display=swap" rel="stylesheet">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?>>

		<!-- header -->
		<header class="header clear" role="banner">

				<!-- nav -->
				<nav class="nav" role="navigation">

					<?php 
						wp_nav_menu( [ 
							'theme_location' 	=> 'header-menu', 
							'container_class' 	=> '',
							'menu_class'		=> '',
							'items_wrap'      	=> '<ul>%3$s</ul>'
						] ); 
				    ?>
				</nav>
				<!-- /nav -->

		</header>
		<!-- /header -->