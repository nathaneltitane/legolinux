// modules //

$(function() {

	$.get("/modules/head.html", function (data) {

		$("head").append (data);

	});

	$.get("/modules/drawer.html", function (data) {

		$("#drawer").append (data);

	});

	$.get("/modules/footer.html", function (data) {

		$("#footer").append (data);

	});

	$.get("/modules/contact.html", function (data) {

		$("#contact").append (data);

	});

	$.get("/modules/colors.html", function (data) {

		$("#colors").append (data);

	});

	$.get("/modules/controls.html", function (data) {

		$("#controls").append (data);

	});

});
