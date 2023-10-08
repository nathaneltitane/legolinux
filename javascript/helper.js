// helper //

function toggleVisibility ( ) {

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

    ids = ids.join( ', ' );

    classes = classes.join( ' ' );

    if ( helper.hasClass ( 'helper-show' ) ) {

        $( ids ).removeClass ( classes );

        helper.removeClass ( 'helper-show' );

        helper.addClass ( 'helper-hide' );


    } else {

        $( ids ).addClass ( classes );

        helper.removeClass ( 'helper-hide' );

        helper.addClass ( 'helper-show' );

    }
}

$( document ).ready ( function ( ) {

    $( '.controls' ).click ( function ( event ) {

        toggleVisibility ( );

    });

    $( '#canvas, #footer' ).click ( function ( event ) {

        var helper = $( '.helper' );

        if ( helper.hasClass ( 'helper-show' ) ) {

            toggleVisibility ( );

        }

    });

});
