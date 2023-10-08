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

    $('.navigation').click ( function ( event ) {

        $( ids ).toggleClass ( classes );

        drawer.removeClass ( 'drawer-close' );

        drawer.addClass ( 'drawer-open' );

    } );

    $( '.section' ).click ( function ( event ) {

         $( ids ).removeClass ( classes );

        drawer.removeClass ( 'drawer-open' );

        drawer.addClass ( 'drawer-close' );

    } );

} );
