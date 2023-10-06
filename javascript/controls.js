// controls //

$( document ).ready (function () {

    $('.controls').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#drawer-button-label').toggleClass ('drawer-button-label-color');

        $('.helper').toggleClass ('helper-show');

    } );

	$( document ).keyup ( function ( event ) {

		if ( event.key === "#" ) {

            $('#drawer-button-label').toggleClass ('drawer-button-label-color');

            $('.helper').toggleClass ('helper-show');

		}

	} );

    $('#canvas').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('.helper').removeClass ('helper-show');

    } );

    $('#footer').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('.helper').removeClass ('helper-show');

    } );

} );
