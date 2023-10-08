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

    $('.paypal').hover  (function ( event ) {

        $( ids ).addClass ( classes );

        samples.removeClass ( 'samples-hide' );

        samples.addClass ( 'samples-show' );

    } );

    $( '#canvas, #footer' ).click ( function ( event ) {

         $( ids ).removeClass ( classes );

        samples.removeClass ( 'samples-show' );

        samples.addClass ( 'samples-hide' );

    } );

} );
