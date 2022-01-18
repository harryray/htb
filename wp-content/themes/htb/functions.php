<?php
/*------------------------------------*\
	Functions
\*------------------------------------*/

// HTML5 Blank navigation
function make_nav()
{
	wp_nav_menu(
	array(
		'theme_location'  => 'header-menu',
		'menu'            => '',
		'container'       => 'div',
		'container_class' => 'menu-{menu slug}-container',
		'container_id'    => '',
		'menu_class'      => 'menu',
		'menu_id'         => '',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul>%3$s</ul>',
		'depth'           => 0,
		'walker'          => ''
		)
	);
}


// Register Navigation
function register_html5_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu'), // Main Navigation
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup - Credit: HTML5 Blank Starter Theme
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Add page slug to body class - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

function make_styles()
{
    wp_enqueue_style('styles', get_template_directory_uri() . '/styles.css', array(), '1.0', 'all');
    wp_enqueue_style( 'slider-style', get_stylesheet_directory_uri().'/assets/scss/slick/slick.css');
    wp_enqueue_style( 'slider-theme-style', get_stylesheet_directory_uri().'/assets/scss/slick/slick-theme.css');
}
function make_scripts()
{
    wp_enqueue_script( 'scrollmagic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js');
    //wp_enqueue_script( 'scrollmagicIndicators', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js');
    wp_enqueue_script( 'slick', get_stylesheet_directory_uri().'/assets/js/slick.min.js', array('jquery') );
    wp_enqueue_script( 'site', get_stylesheet_directory_uri().'/assets/js/site.js', array('jquery') );
}

if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Global Options',
        'menu_title'    => 'Global Options',
        'menu_slug'     => 'global-options',
    ));
}

/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/

add_action('wp_enqueue_scripts', 'make_scripts'); // Add Theme Stylesheet
add_action('wp_enqueue_scripts', 'make_styles'); // Add Make Theme Stylesheet
add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu

// Add Filters
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
