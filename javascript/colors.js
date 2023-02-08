// colors //

$(function() {
	// predefined color tiles //

	$(".color").click(function(){

		var color = $(this).attr("data-value");

		$("body").css("background-color", color);

	});

	// color selector //

	var selection = document.getElementById('color-selector');

	selection.addEventListener('change', function(e) {

		var color = selection.value;

		$("body").css("background-color", color);

		$(".selector").css("background-color", color);

		$(".selector").css("border-color", "#aaaaaaff");

	},

	false

	);
});

function color_selector() {

	$("#color-selector").click();

}
