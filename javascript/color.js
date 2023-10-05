// color //

$( function () {

	// color selector //

	var selection = document.getElementById ('color-palette');

	selection.addEventListener ('change', function (e) {

		var color = selection.value;

		$("#canvas").css ("background-color", color);

	},

	false

	);
});

function color_selector () {

	$("#color-palette").click ();

}
