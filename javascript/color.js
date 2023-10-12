// color //

$( document ).ready ( function ( ) {

	var color = $( '#color' );

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

    function show ( ) {

		$( ids ).addClass ( classes );

        color.removeClass ( 'color-hide' );

        setTimeout ( function ( ) {

            color.addClass ( 'color-show' );

        }, 250 );

    };

	function hide ( ) {

        color.removeClass ( 'color-show' );

        color.addClass ( 'color-hide' );

        setTimeout ( function ( ) {

            $( ids ).removeClass ( classes );

        }, 500 );

    };

    function toggle ( ) {

        if ( color.hasClass ( 'color-show' ) ) {

            hide ( );

        }

        else {

            show ( );

        }
    };

	$( '#color' ).hover ( function ( event ) {

        show ( );

    } );

	$( '.color' ).click ( function ( event ) {

		var color = $ ( this ).data ( 'value' );

		$( "#canvas" ).css ( {

			"background": "linear-gradient(to top, #aaaaaa 10%, " + color + ")"

		});

        hide ( );

    } );

	$( '.color' ).each ( function ( ) {

		var color = $( this ).data ( 'value' );

		$( this ).css ( 'background-color', color );

	});

});
