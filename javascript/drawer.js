// drawer //

$(document).ready(function() {

	$('.drawer-button').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').toggleClass('drawer-open');

	});

});
