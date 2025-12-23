// modules //

$( function ( ) {

	// prevent redundant footer load on viewer canvas //

	if ( ! $( '.footer' ).length ) {

		$.get ( '/modules/footer.html', function ( data ) {

			$( '#footer' ).append ( data );

		} );

	}

	// index //

	if ( $( '#landing' ).length ) {

		$.get ( '/modules/head.html', function ( data ) {

			$( 'head' ).append ( data );

		} );

		$.get ( '/modules/drawer.html', function ( data ) {

			$( '#drawer' ).append ( data );

		} );

	}

	// standard //

	if ( ! $( '#landing' ).length ) {

		$.get ( '/modules/home.html', function ( data ) {

			$( '#home' ).append ( data );

		} );

	}

	$.get ( '/modules/contact-modal.html', function ( data ) {

		$( '#contact-modal' ).append ( data );

	} );

	$.get ( '/modules/contact.html', function ( data ) {

		$( '#contact' ).append ( data );

	} );

	$.get ( '/modules/shop.html', function ( data ) {

		$( '#shop' ).append ( data );

	} );

	$.get ( '/modules/github.html', function ( data ) {

		$( '#github' ).append ( data );

	} );

	$.get ( '/modules/donations.html', function ( data ) {

		$( '#donations' ).append ( data );

	} );

	$.get ( '/modules/browse.html', function ( data ) {

		$( '#browse' ).append ( data );

	} );

	// canvas controls //

	if ( $( '#canvas' ).length ) {

		$.get ( '/modules/paypal.html', function ( data ) {

			$( '#paypal' ).append ( data );

		} );

		$.get ( '/modules/color.html', function ( data ) {

			$( '#color' ).append ( data );

		} );

		$.get ( '/modules/colors.html', function ( data ) {

			$( '#colors' ).append ( data );

		} );

		$.get ( '/modules/dimensions.html', function ( data ) {

			$( '#dimensions' ).append ( data );

		} );

		$.get ( '/modules/edges.html', function ( data ) {

			$( '#edges' ).append ( data );

		} );

		$.get ( '/modules/minifig.html', function ( data ) {

			$( '#minifig' ).append ( data );

		} );

		$.get ( '/modules/wireframe.html', function ( data ) {

			$( '#wireframe' ).append ( data );

		} );

		$.get ( '/modules/controls.html', function ( data ) {

			$( '#controls' ).append ( data );

		} );

		$.get ( '/modules/plane.html', function ( data ) {

			$( '#plane' ).append ( data );

		} );

		$.get ( '/modules/helper.html', function ( data ) {

			$( '#helper' ).append ( data );

		} );

	}

} );
