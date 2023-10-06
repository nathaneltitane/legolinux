// controls //

$( document ).ready (function () {

    $('.controls').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#navigation-button-label').toggleClass ('navigation-label-color');

        $('#paypal-button-label').toggleClass ('paypal-label-color');

        $('#color-button-label').toggleClass ('color-label-color');

        $('#controls-button-label').toggleClass ('controls-label-color');

        $('.helper').toggleClass ('helper-show');

    } );

	$( document ).keyup ( function ( event ) {

		if ( event.key === "#" ) {

            $('#navigation-button-label').toggleClass ('navigation-label-color');

            $('#paypal-button-label').toggleClass ('paypal-label-color');

            $('#color-button-label').toggleClass ('color-label-color');

            $('#controls-button-label').toggleClass ('controls-label-color');

            $('.helper').toggleClass ('helper-show');

		}

	} );

    $('#canvas').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('.helper').removeClass ('helper-show');

        $('#navigation-button-label').removeClass ('navigation-label-color');

        $('#paypal-button-label').removeClass ('paypal-label-color');

        $('#color-button-label').removeClass ('color-label-color');

        $('#controls-button-label').removeClass ('controls-label-color');

    } );

    $('#footer').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('.helper').removeClass ('helper-show');

        $('#navigation-button-label').removeClass ('navigation-label-color');

        $('#paypal-button-label').removeClass ('paypal-label-color');

        $('#color-button-label').removeClass ('color-label-color');

        $('#controls-button-label').removeClass ('controls-label-color');

    } );

} );
