import { Splide } from "@splidejs/splide";
import '@splidejs/splide/css';

document.addEventListener( 'DOMContentLoaded', function() {
	const splide = new Splide( '.splide' );
	splide.mount();

	const main = new Splide( '#main-carousel', {
		type      : 'fade',
		rewind    : true,
		pagination: false,
		arrows    : false,
	} ).mount();
	const thumbnails = new Splide( '#thumbnail-carousel', {
		fixedWidth: 150,
		gap       : 10,
		rewind    : true,
		pagination: false,
		isNavigation: true,
		updateOnMove: true,
	} ).mount();
	main.sync( thumbnails );
	main.mount();
	thumbnails.mount();
} );
