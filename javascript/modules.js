// modules //

$(function() {

	$.get("/modules/head.html", function(data) {

		$("head").append(data);

	});

	$.get("/modules/drawer.html", function(data) {

		$("#drawer").append(data);

	});

	$.get("/modules/navigation.html", function(data) {

		$("#navigation").append(data);

	});

	$.get("/modules/anchors.html", function(data) {

		$("#anchor").append(data);

	});

	$.get("/modules/footer.html", function(data) {

		$("#footer").append(data);

	});

});
