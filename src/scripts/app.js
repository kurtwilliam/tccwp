$(document).ready(function(){

$('.areaR')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

// Open and close free quote modal

// Open on click of free quote button
$('.fQuote').on('click', function(e){
	e.preventDefault();
	$('.quoteO').removeClass('hidden');
	$('.quote').removeClass('hidden');
})

// Close on click of cross close button
$('.close').on('click', function(){
	$('.quoteO').addClass('hidden');
	$('.quote').addClass('hidden');
})

// Close on click of overlay
$('.quoteO').on('click', function(){
	$('.quoteO').addClass('hidden');
	$('.quote').addClass('hidden');
})

// Hamburger menu open and close

// On click of hamburger, show list items
$( ".hamburger" ).click(function() {
	if ($( "#hamItems" ).hasClass('hidden')) {
		$('#hamItems').removeClass('hidden');
		$('#hamburgerItems').removeClass('hidden');
	} else {
		$('#hamItems').addClass('hidden');
		$('#hamburgerItems').addClass('hidden');
	}
})

// On click of hamburger button or outside of hamburger close list
$( "#hamItems" ).click(function() {
	$( "#hamItems" ).addClass('hidden');
	$('#hamburgerItems').addClass('hidden')
});

// SMOOTH SCROLL

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
			scrollTop: target.offset().top - 130
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				return false;
				} else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
				};
			});
		}
	}
});

}) 

