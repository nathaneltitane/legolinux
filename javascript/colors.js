// color //

$( function () {

	// color palette //

	var selection = document.getElementById ( 'color-palette' );

	selection.addEventListener ('change', function ( event ) {

		var color = selection.value;

		$( "#canvas" ).css ( "background-color", color );

	},

	false

	);
} );

function color_palette () {

	$( "#color-palette" ).click ();

}
