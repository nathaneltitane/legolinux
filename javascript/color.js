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

	$( '.color' ).click ( function ( event ) {

        $( ids ).toggleClass ( classes );

	} );

    $('#canvas, #footer').click (function ( event ) {

        $( ids ).toggleClass ( classes );

    } );

    $( function () {

        // color selector //

        var color_palette = document.getElementById ('color-palette');

        color_palette.addEventListener ('change', function (e) {

            var color = color_palette.value;

            $( ids ).removeClass ( classes );

            $("#canvas").css ("background-color", color);

        },

        false

        );
    });

} );

function color_selector () {

	$("#color-palette").click ();

}
