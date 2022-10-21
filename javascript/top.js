// top //

$(document).ready(function() {

	$('.top').click(function(event) {

		event.preventDefault();

		$('html, body').animate({

			scrollTop: '0'

		},

		'slow'

		);

		return false;

	})

});
