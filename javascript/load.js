// load //

function get_page_data(href) {

	$.get(href, parse_data);

}

function parse_data(data) {

	$('#load').empty();

	$('#load').append(data);

}
$(document).ready(function() {

	$('[data-link]').click(function(e) {

		$('#navigation').addClass('hidden');

		e.preventDefault();

		var link = $(this).data('link');

		get_page_data(link);

		$('#load').addClass('load-open');

		$('#anchors.hidden').show();

		$('html,body').animate({

				scrollTop: $('#footer').offset().top

			},

		'slow');

	});

});
