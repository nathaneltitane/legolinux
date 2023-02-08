// color //

$(document).ready(function() {

	$(".color").click(function() {

		var color = $(this).attr("data-value");

		$("#canvas").css("background", color);

	});

});
