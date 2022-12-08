// modules //

$(function() {

	$.get("/modules/head.html", function(data) {

		$("head").append(data);

	});

	$.get("/modules/drawer.html", function(data) {

		$("#drawer").append(data);

	});

	$.get("/modules/footer.html", function(data) {

		$("#footer").append(data);

	});

});
