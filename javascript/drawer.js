// drawer //

$( document ).ready ( function ( ) {

	$( '.drawer-button' ).click ( function ( event ) {

		// disable defaults prevention for href handling

		// event.preventDefault ( );

		$( '#drawer-button-label' ).toggleClass ( 'drawer-button-label-color' );

		$( '#drawer' ).addClass ( 'drawer-open' );

	} );

	// prevent canvas interaction conflict

	$( '.section' ).click ( function ( event ) {

		// disable defaults prevention for href handling

		// event.preventDefault ( );

		$( '#drawer-button-label' ).toggleClass ( 'drawer-button-label-color' );

		$( '#drawer' ).removeClass ( 'drawer-open' );

	} );

	$( document ).keyup ( function ( event ) {

		if ( event.key === "Escape" ) {

			if ( $( '.drawer-open' ).length ) {

				$( '#drawer-button-label' ).toggleClass ( 'drawer-button-label-color' );

				$( '#drawer' ).removeClass ( 'drawer-open' );

			}

		}

	} );

	// mobile device hover emulation

	$( document ).ready ( function ( ) {

		$( '.container' ).on ( 'touchstart touchend', function ( event ) {

			// event.preventDefault ( );

			$( '.label' ).toggleClass ( 'hover-expand' );

		} );

	} );

} );
