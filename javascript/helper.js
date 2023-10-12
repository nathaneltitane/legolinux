// helper //

$( document ).ready ( function ( ) {

	var helper = $( '.helper' );

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

        helper.removeClass ( 'helper-hide' );

        setTimeout ( function ( ) {

            helper.addClass ( 'helper-show' );

        }, 250 );

    };

    function hide ( ) {

        helper.removeClass ( 'helper-show' );

        helper.addClass ( 'helper-hide' );

        setTimeout ( function ( ) {

            $( ids ).removeClass ( classes );

        }, 500 );

    };

    function toggle ( ) {

        if ( helper.hasClass ( 'helper-show' ) ) {

            hide ( );

        }

        else {

            show ( );

        }
    };

    $( '.controls' ).click ( function ( event ) {

        show ( ) ;

    } );

    $( '#canvas, #footer' ).click ( function ( event ) {

        if ( helper.hasClass ( 'helper-show' ) ) {

            hide ( );

        }

    } );

    // keyboard

    $( document ).on ( 'keyup', function ( event ) {

        if ( event.key === 'g' ) {

            toggle ( );

        }

    } );

} );
