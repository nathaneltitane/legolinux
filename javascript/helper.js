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

    $( '.controls' ).click ( function ( event ) {

        $( ids ).addClass ( classes );

        helper.removeClass ( 'helper-hide' );

        setTimeout ( function ( ) {

            helper.addClass ( 'helper-show' );

        }, 250 );

    } );

    $( '#canvas, #footer' ).click ( function ( event ) {

        if ( helper.hasClass ( 'helper-show' ) ) {

            helper.removeClass ( 'helper-show' );

            helper.addClass ( 'helper-hide' );

            setTimeout ( function ( ) {

                $( ids ).removeClass ( classes );

            }, 500 );

        }

    } );

} );
