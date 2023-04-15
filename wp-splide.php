<?php
/**
 * Plugin Name:       Wp Splide
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-splide
 *
 * @package           create-block
 */
define( "BUILD_PATH", "/build" );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wp_splide_block_init() {

	register_block_type( __DIR__ . BUILD_PATH . "/blocks/simple"  );
}
add_action( 'init', 'create_block_wp_splide_block_init' );

add_action( 'admin_enqueue_scripts', function () {
	// CSS
	wp_enqueue_style(
		'custom-admin-css',
		__DIR__ . '/build/admin.css'
	);
} );

//ブロックカテゴリーの追加
function add_block_categories( $block_categories, $block_editor_context ) {
    array_push(
		$block_categories,
		array(
			'slug'  => 'wp-splide',
			'title' => 'WP Splide',
			'icon'  => 'null',
		)
	);

	return $block_categories;
}
add_filter( 'block_categories_all', 'add_block_categories', 10, 2 );
