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

		// Header appear on scrollup
		// Duplicate the header, give it a class of header--scroll
		$("header").clone().appendTo("body").addClass('header--scroll');

		 // Header nav
		 $('.header__nav-toggle').click(function(){
		 	$('.header__nav-toggle').toggleClass('active');
		 	$('header .nav--mobile').fadeToggle(300);
		 })

		// use that as the clone to appear on scrollUp
		var lastScrollTop = window.pageYOffset || $(window).scrollTop;
		$(window).scroll(function(e) {  
		    var scroll = window.pageYOffset || $(window).scrollTop();
		    if(scroll > 300) {
			    if (scroll > lastScrollTop) {
			    	$('.header--scroll').removeClass('active');
			    } else {
			    	$('.header--scroll').addClass('active');
			    }
			} else {
				$('.header--scroll').removeClass('active');
			}
		    lastScrollTop = scroll <= 0 ? 0 : scroll;
		});

		var controller = new ScrollMagic.Controller();
		$('.block').each(function(){


			// Image Text
			if($(this).attr('data-block-name') === 'image-text') {

				var container = $(this);

				new ScrollMagic.Scene({triggerElement: $(this).find('.scroll-trigger')[0]})
					.on("enter", function(event) {
						container.addClass('animations-on');

						// Gifs
						setTimeout(function(){
							var canv = $(container).find('canvas');
							canv.each(function(){
								var btn = $(this).parents('button');
								btn.addClass('active');
								this.click();
								btn.attr('disabled', 'disabled');
							});
						},500);
						// /Gifs

						var visibleTimer = 0;

						container.find('.image-text__text ul li').each(function(){
							var listItem = $(this);
							visibleTimer = visibleTimer + 333;
							setTimeout(function(){
								listItem.addClass("visible");
							}, visibleTimer);
						})
					})
					.addTo(controller);
			} else {

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
			}
		});
		
		// Sliders

		$('.games-carousel__slider').slick({
			slidesToShow: 3.5,
			autoplay: true,
			infinite: false,
			arrows: true,
			dots: false,
			nextArrow: $('.games-carousel__slider-next'),
			prevArrow: $('.games-carousel__slider-prev'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});

		// Show submenu
		$('li.menu-item-has-children > a').click(function(e){
			e.preventDefault();
			var li = $(this).parent();
			$(li).toggleClass('active');
			$(li).children('ul').slideToggle(600);
		})
		
	});
	
})(jQuery, this);