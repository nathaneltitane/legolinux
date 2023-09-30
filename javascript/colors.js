// colors //

$(function () {

	// color selector //

	var selection = document.getElementById ('color-selector');

	selection.addEventListener ('change', function (e) {

		var color = selection.value;

		$("body").css ("background-color", color);

	},

	false

	);
});

function color_selector () {

	$("#color-selector").click ();

}
