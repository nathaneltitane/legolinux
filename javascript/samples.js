// samples //

$( document ).ready ( function ( ) {

	var samples = $( '.samples' );

	var ids = [
        '#navigation-button-label',
        '#paypal-button-label',
        '#color-button-label',
        '#controls-button-label'
    ];

    var classes = [
        'navigation-label-color',
        'paypal-label-color',
        'color-label-color',
        'controls-label-color'
    ];

    var ids = ids.join ( ', ' );

    var classes = classes.join ( ' ' );

    function show () {

    $( ids ).addClass ( classes );

        samples.removeClass ( 'samples-hide' );

        setTimeout ( function ( ) {

            samples.addClass ( 'samples-show' );

        }, 250 );

    };

    function hide ( ) {

        samples.removeClass ( 'samples-show' );

        samples.addClass ( 'samples-hide' );

        setTimeout ( function ( ) {

            $( ids ).removeClass ( classes );

        }, 500 );

    };

    function toggle ( ) {

        if ( samples.hasClass ( 'samples-show' ) ) {

            hide ( );

        }

        else {

            show ( );

        }
    };

    $( '.paypal' ).click ( function ( event ) {

        show ( ) ;

    } );

    $( '#canvas, #footer' ).click ( function ( event ) {

        if ( samples.hasClass ( 'samples-show' ) ) {

            hide ( );

        }

    } );

    // keyboard

    $( document ).on ( 'keyup', function ( event ) {

        if ( event.key === 'u' ) {

            toggle ( );

        }

    } );

} );
