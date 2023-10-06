// drawer //

$( document ).ready ( function ( ) {

	$( '.navigation' ).click ( function ( event ) {

		// disable defaults prevention for href handling

		// event.preventDefault ( );

		$( '#navigation-label' ).toggleClass ( 'navigation-label-color' );

		$( '#drawer' ).addClass ( 'drawer-open' );

	} );

	// prevent canvas interaction conflict

	$( '.section' ).click ( function ( event ) {

		// disable defaults prevention for href handling

		// event.preventDefault ( );

		$( '#navigation-label' ).toggleClass ( 'navigation-label-color' );

		$( '#drawer' ).removeClass ( 'drawer-open' );

	} );

	$( document ).keyup ( function ( event ) {

		if ( event.key === "Escape" ) {

			if ( $( '.drawer-open' ).length ) {

				$( '#navigation-label' ).toggleClass ( 'navigation-label-color' );

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
