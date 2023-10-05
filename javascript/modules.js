// modules //

$(function() {

	$.get("/modules/head.html", function (data) {

		$("head").append (data);

	});

	$.get("/modules/drawer.html", function (data) {

		$("#drawer").append (data);

	});

	$.get("/modules/navigation.html", function (data) {

		$("#drawer-button").append (data);

	});

	$.get("/modules/footer.html", function (data) {

		$("#footer").append (data);

	});

	$.get("/modules/contact.html", function (data) {

		$("#contact").append (data);

	});

	$.get("/modules/color.html", function (data) {

		$("#color").append (data);

	});

	$.get("/modules/controls.html", function (data) {

		$("#controls").append (data);

	});

});
