// bottom //

$(document).ready(function() {

	$('.bottom').click(function(event) {

		event.preventDefault();

		$('html, body').animate({

			scrollTop: $(document).height()

		}, 'slow');

		return false;

	});

});
