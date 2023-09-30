// color //

$(function () {

	$(".color").click (function () {

		var color = $(this).attr ("data-value");

		$("#canvas").css ("background-color", color);

	});

	if (Modernizr.inputtypes.color) {

		$(".picker").css ("display", 'inline-block');

		var c = document.getElementById ('color');

		c.addEventListener('change', function (e) {

			var color = c.value;

			$("#canvas").css ("background-color", color);

			$(".picker").css ("background-color", color);

		},

		false );
	}
});

function color_select () {

	$("#color").click ();

}
