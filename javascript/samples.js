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

    $('.paypal, .samples').hover( function ( ) {

        $( ids ).toggleClass ( classes );

        samples.toggleClass ( 'samples-show' );

    });

} );
