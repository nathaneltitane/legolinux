// background //

( function ( ) {

	var count = 190;

	function pad ( str, max ) {

		str = str.toString ( );

		return str.length < max ? pad ( "0" + str, max ) : str;

	}

	var number = pad ( Math.floor ( Math.random ( ) * count ), 3 );

	var flat = "/images/flat/flat-" + number + ".png";
	var overlay = "/images/overlay/overlay-" + number + ".png";

	var flat_image = new Image ( );
	var overlay_image = new Image ( );

	flat_image.src = flat;
	overlay_image.src = overlay;

	flat_image.onload = function ( ) {

		$( '#background' ).css (

			'background-image',

			'url("' + flat + '")'
		);

	};

	overlay_image.onload = function ( ) {

		$( '#background-overlay' ).css (

			'background-image',

			'url("' + overlay + '")'
		);

	};

} ) ( );
