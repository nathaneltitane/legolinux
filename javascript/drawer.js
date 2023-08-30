// drawer //

$(document).ready(function() {

	$('.drawer-button').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer-button-label').toggleClass('drawer-button-label-color');

		$('#drawer').toggleClass('drawer-open');

	});

	// prevent canvas interaction conflict

	$('#background').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});

	$('#canvas').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});


	$('.modal').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});
});
