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

    $('.paypal').hover (

        function ( ) {

            $( ids ).addClass ( classes );

            if ( $('.samples-hide').length ) {

                samples.removeClass ( 'samples-hide' );

                samples.addClass ( 'samples-show' );
            }

            else {

                samples.addClass ( 'samples-show' );

            }

        },

        function ( ) {

            // samples navigation hover failsafe

            if ( ! $( '.paypal:hover' ).length && ! $( '.samples:hover' ).length ) {

                $( ids ).removeClass ( classes );

                samples.removeClass ( 'samples-show' );

                samples.addClass ( 'samples-hide' );

            }
        }
    );

} );
