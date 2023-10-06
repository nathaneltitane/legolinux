// controls //

$( document ).ready (function () {

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

    $('.controls').click (function ( event ) {

        $( ids ).toggleClass ( classes );

        helper.toggleClass ('helper-show');

    } );

    // keyboard

	$( document ).keyup ( function ( event ) {

		if ( event.key === "#" ) {

            $( ids ).toggleClass ( classes );

            helper.toggleClass ('helper-show');

		}

	} );

    $('#canvas, #footer').click (function ( event ) {

         $( ids ).removeClass ( classes );

        helper.removeClass ('helper-show');

    } );

} );
