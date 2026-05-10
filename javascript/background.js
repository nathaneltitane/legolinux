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

	var image_flat = new Image ( );
	var image_overlay = new Image ( );

	image_flat.src = flat;

	image_overlay.src = overlay;

	image_flat.onload = function ( ) {

		$( '#background' ).css (

			'background-image',

			'url("' + flat + '")'
		);

	};

	image_overlay.onload = function ( ) {

		$( '#background-overlay' ).css (

			'background-image',

			'url("' + overlay + '")'
		);

	};

} ) ( );
