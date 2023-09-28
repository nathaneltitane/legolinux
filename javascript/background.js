// background //

$(document).ready(function() {

	var count = 148;

	function pad(str, max) {

		str = str.toString();

		return str.length < max ? pad("0" + str, max) : str;

	}

	// randomize images

	$('#background').css(

		'background-image',

		'url("/images/flat/flat-' + pad(Math.floor(Math.random() * count), 3) + '.png ")'
	);

		$('.overlay').css(

		'background-image',

		'url("/images/overlay/overlay-' + pad(Math.floor(Math.random() * count), 3) + '.png ")'
	);
});
