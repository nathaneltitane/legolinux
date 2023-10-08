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

        $( ids ).toggleClass ( classes );

        helper.removeClass ( 'helper-hide' );

        helper.addClass ( 'helper-show' );

    } );

    $( '#canvas, #footer' ).click ( function ( event ) {

        if ( helper.hasClass ( 'helper-show' ) ) {

            $( ids ).removeClass ( classes );

            helper.removeClass ( 'helper-show' );

            helper.addClass ( 'helper-hide' );
        }

    } );

} );
