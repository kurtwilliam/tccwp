$(document).ready(function(){

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

}) 

