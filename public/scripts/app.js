(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFNUI7O0FBRUE7QUFDQSxJQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFVBQVMsQ0FBVCxFQUFXO0FBQ25DLE1BQUUsY0FBRjtBQUNBLE1BQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsUUFBekI7QUFDQSxNQUFFLFFBQUYsRUFBWSxXQUFaLENBQXdCLFFBQXhCO0FBQ0EsR0FKRDs7QUFNQTtBQUNBLElBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVU7QUFDakMsTUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixRQUF0QjtBQUNBLE1BQUUsUUFBRixFQUFZLFFBQVosQ0FBcUIsUUFBckI7QUFDQSxHQUhEOztBQUtBO0FBQ0EsSUFBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFVO0FBQ2xDLE1BQUUsU0FBRixFQUFhLFFBQWIsQ0FBc0IsUUFBdEI7QUFDQSxNQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFFBQXJCO0FBQ0EsR0FIRDs7QUFLQTs7QUFFQTtBQUNBLElBQUcsWUFBSCxFQUFrQixLQUFsQixDQUF3QixZQUFXO0FBQ2xDLFFBQUksRUFBRyxXQUFILEVBQWlCLFFBQWpCLENBQTBCLFFBQTFCLENBQUosRUFBeUM7QUFDeEMsUUFBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixRQUEzQjtBQUNBLFFBQUUsaUJBQUYsRUFBcUIsV0FBckIsQ0FBaUMsUUFBakM7QUFDQSxLQUhELE1BR087QUFDTixRQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCLFFBQXhCO0FBQ0EsUUFBRSxpQkFBRixFQUFxQixRQUFyQixDQUE4QixRQUE5QjtBQUNBO0FBQ0QsR0FSRDs7QUFVQTtBQUNBLElBQUcsV0FBSCxFQUFpQixLQUFqQixDQUF1QixZQUFXO0FBQ2pDLE1BQUcsV0FBSCxFQUFpQixRQUFqQixDQUEwQixRQUExQjtBQUNBLE1BQUUsaUJBQUYsRUFBcUIsUUFBckIsQ0FBOEIsUUFBOUI7QUFDQSxHQUhEOztBQUtBOztBQUVBO0FBQ0EsSUFBRSxjQUFGO0FBQ0U7QUFERixHQUVHLEdBRkgsQ0FFTyxZQUZQLEVBR0csR0FISCxDQUdPLGFBSFAsRUFJRyxLQUpILENBSVMsVUFBUyxLQUFULEVBQWdCO0FBQ3JCO0FBQ0EsUUFDRSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsS0FBd0MsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixDQUF4QyxJQUVBLFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBSDVCLEVBSUU7QUFDQTtBQUNBLFVBQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EsZUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUFnQyxHQUFsQyxDQUFsQztBQUNBO0FBQ0EsVUFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakI7QUFDQSxjQUFNLGNBQU47QUFDQSxVQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIscUJBQVcsT0FBTyxNQUFQLEdBQWdCLEdBQWhCLEdBQXNCO0FBRFgsU0FBeEIsRUFFRyxJQUZILEVBRVMsWUFBVztBQUNsQjtBQUNBO0FBQ0EsY0FBSSxVQUFVLEVBQUUsTUFBRixDQUFkO0FBQ0Esa0JBQVEsS0FBUjtBQUNBLGNBQUksUUFBUSxFQUFSLENBQVcsUUFBWCxDQUFKLEVBQTBCO0FBQUU7QUFDMUIsbUJBQU8sS0FBUDtBQUNELFdBRkQsTUFFTztBQUNMLG9CQUFRLElBQVIsQ0FBYSxVQUFiLEVBQXdCLElBQXhCLEVBREssQ0FDMEI7QUFDL0Isb0JBQVEsS0FBUixHQUZLLENBRVk7QUFDbEI7QUFDRixTQWJEO0FBY0Q7QUFDRjtBQUNGLEdBbENIO0FBb0NDLENBakZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbi8vIE9wZW4gYW5kIGNsb3NlIGZyZWUgcXVvdGUgbW9kYWxcblxuLy8gT3BlbiBvbiBjbGljayBvZiBmcmVlIHF1b3RlIGJ1dHRvblxuJCgnLmZRdW90ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdCQoJy5xdW90ZU8nKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cdCQoJy5xdW90ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbn0pXG5cbi8vIENsb3NlIG9uIGNsaWNrIG9mIGNyb3NzIGNsb3NlIGJ1dHRvblxuJCgnLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0JCgnLnF1b3RlTycpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0JCgnLnF1b3RlJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xufSlcblxuLy8gQ2xvc2Ugb24gY2xpY2sgb2Ygb3ZlcmxheVxuJCgnLnF1b3RlTycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdCQoJy5xdW90ZU8nKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdCQoJy5xdW90ZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbn0pXG5cbi8vIEhhbWJ1cmdlciBtZW51IG9wZW4gYW5kIGNsb3NlXG5cbi8vIE9uIGNsaWNrIG9mIGhhbWJ1cmdlciwgc2hvdyBsaXN0IGl0ZW1zXG4kKCBcIi5oYW1idXJnZXJcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRpZiAoJCggXCIjaGFtSXRlbXNcIiApLmhhc0NsYXNzKCdoaWRkZW4nKSkge1xuXHRcdCQoJyNoYW1JdGVtcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcblx0XHQkKCcjaGFtYnVyZ2VySXRlbXMnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnI2hhbUl0ZW1zJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHRcdCQoJyNoYW1idXJnZXJJdGVtcycpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0fVxufSlcblxuLy8gT24gY2xpY2sgb2YgaGFtYnVyZ2VyIGJ1dHRvbiBvciBvdXRzaWRlIG9mIGhhbWJ1cmdlciBjbG9zZSBsaXN0XG4kKCBcIiNoYW1JdGVtc1wiICkuY2xpY2soZnVuY3Rpb24oKSB7XG5cdCQoIFwiI2hhbUl0ZW1zXCIgKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdCQoJyNoYW1idXJnZXJJdGVtcycpLmFkZENsYXNzKCdoaWRkZW4nKVxufSk7XG5cbi8vIFNNT09USCBTQ1JPTExcblxuLy8gU2VsZWN0IGFsbCBsaW5rcyB3aXRoIGhhc2hlc1xuJCgnYVtocmVmKj1cIiNcIl0nKVxuICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXG4gIC5ub3QoJ1tocmVmPVwiI1wiXScpXG4gIC5ub3QoJ1tocmVmPVwiIzBcIl0nKVxuICAuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBPbi1wYWdlIGxpbmtzXG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgXG4gICAgICAmJiBcbiAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcbiAgICApIHtcbiAgICAgIC8vIEZpZ3VyZSBvdXQgZWxlbWVudCB0byBzY3JvbGwgdG9cbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IGlmIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBnb25uYSBoYXBwZW5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEzMFxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAvLyBNdXN0IGNoYW5nZSBmb2N1cyFcbiAgICAgICAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcbiAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywnLTEnKTsgLy8gQWRkaW5nIHRhYmluZGV4IGZvciBlbGVtZW50cyBub3QgZm9jdXNhYmxlXG4gICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbn0pIFxuXG4iXX0=
