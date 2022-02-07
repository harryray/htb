const global_speed_mod = 500;

(function ($, root, undefined) {
	
	$(function () {

		$(document).ready(function(){
		
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

/*
******************************************************************************************************************************************************
******************************************************************************************************************************************************
*/

			function writeToContainer(container, speed, entry) {
				setTimeout(function(){
					container.innerText = entry;
				}, speed)
			}

			function prepWriteToContainer(s, c, strings_i, visibleTextContainer){

				let string = s.innerText;
				let strlen = string.length;
				let strlen_i = 0;

				const s_interval = setInterval(function(){
				
					let str_to_write = string.substr(0, strlen_i);

					writeToContainer(visibleTextContainer, global_speed_mod, str_to_write);

					strlen_i++;
					
					if(strlen_i > strlen) {
						clearInterval(s_interval);
					}

				}, global_speed_mod / (strlen));
			}

			// Get speech bubbles, hide all text within them.
			// Type out each string character by character, pressing "enter" skips to end of string and then to next string
			function handleSpeechBubble(e_i, e) {
				/* 
				e = targeted element, should be speech-bubble
				s = children of e, should be strings
				*/
				e = $(e)[0];
				const s = e.children;
				const c = s.length;
				const visibleTextContainer = e.children[0];
				let strings_i = 1;

				// get all strings. count all strings. 
				// detect active string by number. 
				// if active string not fully visible, "Enter" or "Down" skips to end.
				// if active string is at end, hide active string, iterate number, run 
				// function again to handle new string.
				prepWriteToContainer(s[strings_i], c, strings_i, visibleTextContainer);
				strings_i++;


				if(strings_i < c) {
					$(document).keyup(function(event) {
	    				if (event.which === 13) {
	    					if(strings_i < c) {
		    					visibleTextContainer.innerText = '';
								prepWriteToContainer(s[strings_i], c, strings_i, visibleTextContainer);
								strings_i++;
							} else if(strings_i = c) {
								if($(e).next('.answer-container')) {
									const answers = $(e).next('.answer-container')[0];
									$(answers).fadeIn(333);
									$(e).addClass('answers-visible');
								} else {

								}
							}
						}
					});
				}
			}

			$('.speech-bubble').each(handleSpeechBubble);

		});
		
	});
	
})(jQuery, this);