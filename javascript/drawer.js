// drawer //

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

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

    $( '.navigation' ).click ( function ( event ) {

        $( ids ).toggleClass ( classes );

        drawer.removeClass('drawer-hide');

        setTimeout ( function ( ) {

            drawer.addClass ( 'drawer-show' );

        }, 500 );

    } );

    $( '.section' ).click ( function ( event ) {

        if ( drawer.hasClass ( 'drawer-show' ) ) {

            $( ids ).removeClass ( classes );

            drawer.removeClass ( 'drawer-show' );

            drawer.addClass ( 'drawer-hide' );
        }

    } );

} );
