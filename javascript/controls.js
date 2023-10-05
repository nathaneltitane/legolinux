// controls //

$( document ).ready (function () {

    $('.controls').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#drawer-button-label').toggleClass ('drawer-button-label-color');

        $('.controls-popup').toggleClass ('controls-popup-show');

    } );

	$( document ).keyup ( function ( event ) {

		if ( event.key === "?" ) {

        $('#drawer-button-label').toggleClass ('drawer-button-label-color');

        $('.controls-popup').toggleClass ('controls-popup-show');

		}

	} );

    $('#canvas').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#drawer-button-label').toggleClass ('drawer-button-label-color');

        $('.controls-popup').removeClass ('controls-popup-show');

    } );

    $('#footer').click (function ( event ) {

        // disable defaults prevention for href handling

        // event.preventDefault ();

        $('#drawer-button-label').toggleClass ('drawer-button-label-color');

        $('.controls-popup').removeClass ('controls-popup-show');

    } );

} );
