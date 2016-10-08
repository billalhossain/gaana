// $(document).ready(function() {
// 'use strict';

// /******************** OWL CAROOUSEL ********************/
// 	$("#screenshots-sec").owlCarousel({
// 		autoPlay: true,
// 		items : 5,
// 	    itemsDesktop : [1200,4],
// 	    itemsDesktopSmall : [991,3],
// 	    itemsTablet: [767,2],
// 	    itemsMobile :  [425,1]
// 	});
	


// 	$("#client-sec").owlCarousel({
// 		autoPlay: true,
// 		items : 1,
// 		itemsDesktop :false,
// 		itemsDesktopSmall : false,
// 		itemsTablet: false,
// 		itemsMobile : false
// 	});


// /********************PRODUCT VIDEO ********************/
// 	var video = $('#iphone-review'),
// 		playbtn = $(".product-video .fa");
	
// 	video.on('click', function() { playpause(); } );
// 	playbtn.on('click', function() { playpause(); } );

// 	var playpause = function() {
// 		if(video[0].paused || video[0].ended) {
// 			video[0].play();
// 			$(playbtn).hide()
// 		}
// 		else {
// 			video[0].pause();
// 			$(playbtn).show()
// 		}
// 	};
	
// /********************SCROLLING BEHAVE ********************/
// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0){
// 			$('body').addClass('sticky')
// 		}else{
// 			$('body').removeClass('sticky')
// 		}
// 	});


// 	$(document).on("scroll",scrollpos);
// 	$('.navbar-nav a').on('click', function (e) {
//         e.preventDefault();
            
//         if( $('navbar-nav a').hasClass('active')){

//             $('navbar-nav a').removeClass('active')
//             $(this).addClass('active')
//         }{
//              $(this).addClass('active')
//         };

      
//         var target = this.hash;

//         $('html, body').stop().animate({
//             'scrollTop': $(target).offset().top - 80
//         }, 500, 'swing');
//     });

//     function scrollpos(event) {
//         var scrollpos = $(document).scrollTop();
//         $('.navbar-nav a').each(function() {
//             var currLink = $(this),
//                 refElement = $(currLink.attr('href'));


//             if( refElement.position().top <= scrollpos && refElement.position().top +  refElement.outerHeight() > scrollpos ){
//                  currLink.addClass('active')
//             }else{
//                  currLink.removeClass('active')
//             }
//         })
//     }

// });
