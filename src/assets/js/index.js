import { Splide } from "@splidejs/splide";
import '@splidejs/splide/css';

document.addEventListener( 'DOMContentLoaded', function() {
	if (!!document.querySelector("#main-carousel")) {
		const main = new Splide( '#main-carousel', {
			type      : 'fade',
			rewind    : true,
			pagination: false,
			arrows    : false,
		} );

		const slides = document.querySelectorAll('#main-carousel .splide__slide')
		const thumbnailSection = document.createElement('section');
		thumbnailSection.id = "thumbnail-carousel";
		thumbnailSection.classList = "splide";
		const splideTrack = document.createElement('div');
		splideTrack.classList = "splide__track";
		const splideList = document.createElement('div');
		splideList.classList = "splide__list";
		slides.forEach((slide) => {
			splideList.appendChild(slide.cloneNode(true));
		});
		splideTrack.appendChild(splideList);
		thumbnailSection.appendChild(splideTrack);
		document.querySelector('#main-carousel').parentElement.appendChild(thumbnailSection);

		if ( document.querySelector('#thumbnail-carousel') ) {
			const thumbnails = new Splide( '#thumbnail-carousel', {
				fixedWidth: 150,
				gap       : 10,
				rewind    : true,
				pagination: false,
				isNavigation: true,
				updateOnMove: true,
			} );
			main.sync( thumbnails );
			main.mount();
			thumbnails.mount();
		}
	}
} );
