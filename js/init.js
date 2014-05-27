$(document).ready(function() {
	
	$('.section')
		.waypoint(function(direction) {
			if (direction === 'down') {
				$('.section').removeClass('current');
				$(this).addClass('current');
			}
		}, { offset: '75' })
		.waypoint(function(direction) {
			if (direction === 'up') {
				$('.section').removeClass('current');
				$(this).addClass('current');
			}
		}, { offset: '-75' });
	
	$('#next').click(function () {
		// if next section is not the footer
		if($('.current').next().attr('id') != "footer") {
			$('html, body').animate({
				scrollTop: $('.current').next().offset().top
			}, 500);
		// if next section is the footer
		} else {
			$('html, body').animate({
				 scrollTop: $('#home').offset().top
			}, 500);
		}
		return false;
	});
	
	$('#prev').click(function () {
		// if current section is not the home section
		if($('.current').prev().length > 0) {
			$('html, body').animate({
				 scrollTop: $('.current').prev().offset().top
			}, 500);
		// if current section is the home section
		} else {
			$('html, body').animate({
				 scrollTop: $('#photo-gallery').offset().top
			}, 500);
		}
		return false;
	});
	
	$('#slides').slides({
		preload: true,
		effect: 'fade',
		play: 10000,
		fadeSpeed: 250,
		randomize: true,
		autoHeight: true,
		generateNextPrev: false,
		generatePagination: false
	});
	
	$('#photo-gallery ul').innerfade({
		animationtype: 'fade',
		speed: 1000,
		timeout: 7000,
		containerheight: '600px'
	});
	
});


