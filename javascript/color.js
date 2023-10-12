// color //

$( document ).ready ( function ( ) {

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

    $('.color').click (function ( event ) {

        $( ids ).addClass ( classes );

    } );

    // color selector //

    $( function () {

        var color_palette = document.getElementById ( 'color-palette' );

        color_palette.addEventListener ( 'change', function ( event ) {

            var color = color_palette.value;

            if ( !color || !color.trim ( ) ) {

                $( ids ).removeClass ( classes );

                return;
            }

            $( "#canvas" ).css ({

                "background": "linear-gradient(to top, #aaaaaa 10%, " + color + ")"

            });

            setTimeout ( function ( ) {

                $( ids ).removeClass ( classes );

            }, 250 );

        },

        false

        );

    });

    $( '#canvas, #footer' ).click ( function ( event ) {

        setTimeout ( function ( ) {

            $( ids ).removeClass ( classes );

        }, 250 );

    } );

    // keyboard

    $( document ).on ( 'keyup', function ( event ) {

        if ( event.key === 'q' ) {

            setTimeout ( function ( ) {

                $( "#color-palette" ).click ( );

            }, 250 );

        }

    } );

} );

function color_selector ( ) {

    setTimeout ( function ( ) {

        $( "#color-palette" ).click ( );

    }, 250 );
}
