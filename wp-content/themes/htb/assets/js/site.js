(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';

		//smoothscroll
		// Select all links with hashes
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
		      // Figure out element to scroll to
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      // Does a scroll target exist?
		      if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		          scrollTop: (target.offset().top + 1)
		        }, 1000);
		      }
		    }
		  });

		var controller = new ScrollMagic.Controller();
		$('.block').each(function(){

				var container = $(this);

				new ScrollMagic.Scene({triggerElement: $(this).find('.scroll-trigger')[0]})
					.on("enter", function(event) {
						container.addClass('animations-on');
						
						// Gifs
						setTimeout(function(){
							var canv = $(container).find('canvas');
							canv.each(function(e){
								var btn = $(this).parents('button');
								btn.addClass('active');
								this.click();
								btn.attr('disabled', 'disabled');
							});
						},500);
						// /Gifs
					})
					.addTo(controller);
		});

		// Get speech bubbles, hide all text within them.
		// Type out each string character by character, pressing "enter" skips to end of string and then to next string
		
	});
	
})(jQuery, this);