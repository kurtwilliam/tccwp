(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	$('.areaR').click(function () {
		$(this).find('iframe').addClass('clicked');
	}).mouseleave(function () {
		$(this).find('iframe').removeClass('clicked');
	});

	// Open and close free quote modal

	// Open on click of free quote button
	$('.fQuote').on('click', function (e) {
		e.preventDefault();
		$('.quoteO').removeClass('hidden');
		$('.quote').removeClass('hidden');
	});

	// Close on click of cross close button
	$('.close').on('click', function () {
		$('.quoteO').addClass('hidden');
		$('.quote').addClass('hidden');
	});

	// Close on click of overlay
	$('.quoteO').on('click', function () {
		$('.quoteO').addClass('hidden');
		$('.quote').addClass('hidden');
	});

	// Hamburger menu open and close

	// On click of hamburger, show list items
	$(".hamburger").click(function () {
		if ($("#hamItems").hasClass('hidden')) {
			$('#hamItems').removeClass('hidden');
			$('#hamburgerItems').removeClass('hidden');
		} else {
			$('#hamItems').addClass('hidden');
			$('#hamburgerItems').addClass('hidden');
		}
	});

	// On click of hamburger button or outside of hamburger close list
	$("#hamItems").click(function () {
		$("#hamItems").addClass('hidden');
		$('#hamburgerItems').addClass('hidden');
	});

	// SMOOTH SCROLL

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]').not('[href="#0"]').click(function (event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top - 130
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						// Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFNUIsR0FBRSxRQUFGLEVBQ0UsS0FERixDQUNRLFlBQVU7QUFDZixJQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsUUFBYixFQUF1QixRQUF2QixDQUFnQyxTQUFoQztBQUEyQyxFQUY5QyxFQUdFLFVBSEYsQ0FHYSxZQUFVO0FBQ3BCLElBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxRQUFiLEVBQXVCLFdBQXZCLENBQW1DLFNBQW5DO0FBQThDLEVBSmpEOztBQU1BOztBQUVBO0FBQ0EsR0FBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixVQUFTLENBQVQsRUFBVztBQUNuQyxJQUFFLGNBQUY7QUFDQSxJQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLFFBQXpCO0FBQ0EsSUFBRSxRQUFGLEVBQVksV0FBWixDQUF3QixRQUF4QjtBQUNBLEVBSkQ7O0FBTUE7QUFDQSxHQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFVO0FBQ2pDLElBQUUsU0FBRixFQUFhLFFBQWIsQ0FBc0IsUUFBdEI7QUFDQSxJQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFFBQXJCO0FBQ0EsRUFIRDs7QUFLQTtBQUNBLEdBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVTtBQUNsQyxJQUFFLFNBQUYsRUFBYSxRQUFiLENBQXNCLFFBQXRCO0FBQ0EsSUFBRSxRQUFGLEVBQVksUUFBWixDQUFxQixRQUFyQjtBQUNBLEVBSEQ7O0FBS0E7O0FBRUE7QUFDQSxHQUFHLFlBQUgsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVztBQUNsQyxNQUFJLEVBQUcsV0FBSCxFQUFpQixRQUFqQixDQUEwQixRQUExQixDQUFKLEVBQXlDO0FBQ3hDLEtBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQSxLQUFFLGlCQUFGLEVBQXFCLFdBQXJCLENBQWlDLFFBQWpDO0FBQ0EsR0FIRCxNQUdPO0FBQ04sS0FBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixRQUF4QjtBQUNBLEtBQUUsaUJBQUYsRUFBcUIsUUFBckIsQ0FBOEIsUUFBOUI7QUFDQTtBQUNELEVBUkQ7O0FBVUE7QUFDQSxHQUFHLFdBQUgsRUFBaUIsS0FBakIsQ0FBdUIsWUFBVztBQUNqQyxJQUFHLFdBQUgsRUFBaUIsUUFBakIsQ0FBMEIsUUFBMUI7QUFDQSxJQUFFLGlCQUFGLEVBQXFCLFFBQXJCLENBQThCLFFBQTlCO0FBQ0EsRUFIRDs7QUFLQTs7QUFFQTtBQUNBLEdBQUUsY0FBRjtBQUNBO0FBREEsRUFFQyxHQUZELENBRUssWUFGTCxFQUdDLEdBSEQsQ0FHSyxhQUhMLEVBSUMsS0FKRCxDQUlPLFVBQVMsS0FBVCxFQUFnQjtBQUN0QjtBQUNBLE1BQ0EsU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEtBQXdDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBN0IsQ0FBeEMsSUFFQSxTQUFTLFFBQVQsSUFBcUIsS0FBSyxRQUgxQixFQUlFO0FBQ0Q7QUFDQSxPQUFJLFNBQVMsRUFBRSxLQUFLLElBQVAsQ0FBYjtBQUNBLFlBQVMsT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEdBQXlCLEVBQUUsV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBZ0MsR0FBbEMsQ0FBbEM7QUFDQTtBQUNBLE9BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2xCO0FBQ0EsVUFBTSxjQUFOO0FBQ0EsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3hCLGdCQUFXLE9BQU8sTUFBUCxHQUFnQixHQUFoQixHQUFzQjtBQURULEtBQXhCLEVBRUcsSUFGSCxFQUVTLFlBQVc7QUFDbkI7QUFDQTtBQUNBLFNBQUksVUFBVSxFQUFFLE1BQUYsQ0FBZDtBQUNBLGFBQVEsS0FBUjtBQUNBLFNBQUksUUFBUSxFQUFSLENBQVcsUUFBWCxDQUFKLEVBQTBCO0FBQUU7QUFDNUIsYUFBTyxLQUFQO0FBQ0MsTUFGRCxNQUVPO0FBQ1AsY0FBUSxJQUFSLENBQWEsVUFBYixFQUF3QixJQUF4QixFQURPLENBQ3dCO0FBQy9CLGNBQVEsS0FBUixHQUZPLENBRVU7QUFDaEI7QUFDRCxLQWJEO0FBY0E7QUFDRDtBQUNELEVBbENEO0FBb0NDLENBdkZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiQoJy5hcmVhUicpXG5cdC5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0JCh0aGlzKS5maW5kKCdpZnJhbWUnKS5hZGRDbGFzcygnY2xpY2tlZCcpfSlcblx0Lm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcblx0XHRcdCQodGhpcykuZmluZCgnaWZyYW1lJykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKX0pO1xuXG4vLyBPcGVuIGFuZCBjbG9zZSBmcmVlIHF1b3RlIG1vZGFsXG5cbi8vIE9wZW4gb24gY2xpY2sgb2YgZnJlZSBxdW90ZSBidXR0b25cbiQoJy5mUXVvdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQkKCcucXVvdGVPJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXHQkKCcucXVvdGUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG59KVxuXG4vLyBDbG9zZSBvbiBjbGljayBvZiBjcm9zcyBjbG9zZSBidXR0b25cbiQoJy5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdCQoJy5xdW90ZU8nKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdCQoJy5xdW90ZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbn0pXG5cbi8vIENsb3NlIG9uIGNsaWNrIG9mIG92ZXJsYXlcbiQoJy5xdW90ZU8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHQkKCcucXVvdGVPJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHQkKCcucXVvdGUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG59KVxuXG4vLyBIYW1idXJnZXIgbWVudSBvcGVuIGFuZCBjbG9zZVxuXG4vLyBPbiBjbGljayBvZiBoYW1idXJnZXIsIHNob3cgbGlzdCBpdGVtc1xuJCggXCIuaGFtYnVyZ2VyXCIgKS5jbGljayhmdW5jdGlvbigpIHtcblx0aWYgKCQoIFwiI2hhbUl0ZW1zXCIgKS5oYXNDbGFzcygnaGlkZGVuJykpIHtcblx0XHQkKCcjaGFtSXRlbXMnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cdFx0JCgnI2hhbWJ1cmdlckl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJyNoYW1JdGVtcycpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0XHQkKCcjaGFtYnVyZ2VySXRlbXMnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdH1cbn0pXG5cbi8vIE9uIGNsaWNrIG9mIGhhbWJ1cmdlciBidXR0b24gb3Igb3V0c2lkZSBvZiBoYW1idXJnZXIgY2xvc2UgbGlzdFxuJCggXCIjaGFtSXRlbXNcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQkKCBcIiNoYW1JdGVtc1wiICkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHQkKCcjaGFtYnVyZ2VySXRlbXMnKS5hZGRDbGFzcygnaGlkZGVuJylcbn0pO1xuXG4vLyBTTU9PVEggU0NST0xMXG5cbi8vIFNlbGVjdCBhbGwgbGlua3Mgd2l0aCBoYXNoZXNcbiQoJ2FbaHJlZio9XCIjXCJdJylcbi8vIFJlbW92ZSBsaW5rcyB0aGF0IGRvbid0IGFjdHVhbGx5IGxpbmsgdG8gYW55dGhpbmdcbi5ub3QoJ1tocmVmPVwiI1wiXScpXG4ubm90KCdbaHJlZj1cIiMwXCJdJylcbi5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHQvLyBPbi1wYWdlIGxpbmtzXG5cdGlmIChcblx0bG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgXG5cdCYmIFxuXHRsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lXG5cdCkge1xuXHRcdC8vIEZpZ3VyZSBvdXQgZWxlbWVudCB0byBzY3JvbGwgdG9cblx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuXHRcdHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcblx0XHQvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cblx0XHRpZiAodGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0Ly8gT25seSBwcmV2ZW50IGRlZmF1bHQgaWYgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGdvbm5hIGhhcHBlblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEzMFxuXHRcdFx0fSwgMTAwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIENhbGxiYWNrIGFmdGVyIGFuaW1hdGlvblxuXHRcdFx0XHQvLyBNdXN0IGNoYW5nZSBmb2N1cyFcblx0XHRcdFx0dmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XG5cdFx0XHRcdCR0YXJnZXQuZm9jdXMoKTtcblx0XHRcdFx0aWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcblx0XHRcdFx0JHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSk7XG5cbn0pIFxuXG4iXX0=
