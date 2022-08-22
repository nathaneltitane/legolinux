// more //

$(document).ready(function() {

	if ($('.container.hidden').length >= 1) {

		$('#top').hide();

		var count = 0;

		$('#more').on('click', function(e) {

			e.preventDefault();

			count += 1;

			var container = $('.container.hidden').slice(0, 1);

			container.slideDown();

			container.removeClass("hidden");

			$('html,body').animate({

					scrollTop: $('#footer-top').offset().top

				},

				'slow');

			if (count == 2) {

				$('#top').show();

			}

			if ($('.container.hidden').length == 0) {

				$('#more').hide();

			}

		});

	} else {

		// remove element when last .container is unhidden

		$('#more').remove();

	}

});
