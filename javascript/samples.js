// paypal //

$( document ).ready ( function ( ) {

    $( '.paypal' ).hover ( function ( e ) {

        // disable defaults prevention for href handling

        // e.preventDefault ( );

		$( '#drawer-button-label' ).toggleClass ( 'drawer-button-label-color' );

        $( '.samples' ).toggleClass ( 'samples-show' );

    } );

} );


