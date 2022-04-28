// drawer //

$(document).ready(function() {

	$('.drawer-button').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').toggleClass('drawer-open');

	});

	// prevent canvas interaction conflict

	// prevent canvas interaction conflict

	$('#background').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});

	$('#model-canvas').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});

});
