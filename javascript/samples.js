// samples //

function toggleVisibility ( ) {

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

    ids = ids.join( ', ' );

    classes = classes.join( ' ' );

    if ( samples.hasClass ( 'samples-show' ) ) {

        $( ids ).removeClass ( classes );

        samples.removeClass ( 'samples-show' );

        samples.addClass ( 'samples-hide' );


    } else {

        $( ids ).addClass ( classes );

        samples.removeClass ( 'samples-hide' );

        samples.addClass ( 'samples-show' );

    }
}

$( document ).ready ( function ( ) {

    $( '.paypal' ).hover ( function ( event ) {

        toggleVisibility ( );

    });

    $( '#canvas, #footer' ).hover ( function ( event ) {

        var samples = $( '.samples' );

        if ( samples.hasClass ( 'samples-show' ) ) {

            toggleVisibility ( );

        }

    });

    $( document ).keyup ( function ( event ) {

        if ( event.key === '#' ) {

            toggleVisibility ( );

        }

    });

});
