// paypal //

$( document ).ready ( function ( ) {

    $( '.paypal' ).hover ( function ( e ) {

        // disable defaults prevention for href handling

        // e.preventDefault ( );

        $('#navigation-button-label').toggleClass ('navigation-label-color');

        $('#paypal-button-label').toggleClass ('paypal-label-color');

        $('#color-button-label').toggleClass ('color-label-color');

        $('#controls-button-label').toggleClass ('controls-label-color');

        $( '.samples' ).toggleClass ( 'samples-show' );

    } );

} );


