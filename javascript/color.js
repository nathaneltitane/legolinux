// color //

$( document ).ready ( function ( ) {

	$( '.color' ).click ( function ( event ) {

		// disable defaults prevention for href handling

		// event.preventDefault ( );

        $('#navigation-button-label').toggleClass ('navigation-label-color');

        $('#paypal-button-label').toggleClass ('paypal-label-color');

        $('#color-button-label').toggleClass ('color-label-color');

        $('#controls-button-label').toggleClass ('controls-label-color');

	} );

    $('#canvas').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#navigation-button-label').removeClass ('navigation-label-color');

        $('#paypal-button-label').removeClass ('paypal-label-color');

        $('#color-button-label').removeClass ('color-label-color');

        $('#controls-button-label').removeClass ('controls-label-color');

    } );

    $('#footer').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#navigation-button-label').removeClass ('navigation-label-color');

        $('#paypal-button-label').removeClass ('paypal-label-color');

        $('#color-button-label').removeClass ('color-label-color');

        $('#controls-button-label').removeClass ('controls-label-color');

    } );

} );

$( function () {

	// color selector //

	var selection = document.getElementById ('color-palette');

	selection.addEventListener ('change', function (e) {

		var color = selection.value;

		$("#canvas").css ("background-color", color);

		$('#navigation-button-label').removeClass ('navigation-label-color');

        $('#paypal-button-label').removeClass ('paypal-label-color');

        $('#color-button-label').removeClass ('color-label-color');

        $('#controls-button-label').removeClass ('controls-label-color');

	},

	false

	);
});

function color_selector () {

	$("#color-palette").click ();

}
