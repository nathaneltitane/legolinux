// selections //

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	console.log ( 'selections [init] : domcontentloaded' ) ;

	var wrapper = document.getElementById ( 'selections' ) ;

	if ( ! wrapper ) {

		console.log ( 'selections [init] : abort, #selections missing' ) ;

		return ;

	}

	var timeout_reset ;

	var initialized = false ;

	function hide ( selections ) {

		console.log ( 'selections [state] : hide' ) ;

		wrapper.style.top = '-160px' ;

		if ( selections ) {

			selections.style.top = '-160px' ;

		}

	}

	function show ( selections ) {

		console.log ( 'selections [state] : show' ) ;

		wrapper.style.top = '0px' ;

		if ( selections ) {

			selections.style.top = '0px' ;

		}

	}

	function delay_show ( selections ) {

		console.log ( 'selections [state] : delay_show scheduled' ) ;

		clearTimeout ( timeout_reset ) ;

		timeout_reset = setTimeout ( function ( ) {

			console.log ( 'selections [state] : delay_show execute' ) ;

			show ( selections ) ;

		}, 1500 ) ;

	}

	function selections_scroll ( selections ) {

		var scroll_maximum = selections.scrollWidth - selections.clientWidth ;

		console.log ( 'selections [scroll] : update ', selections.scrollLeft,' / ',scroll_maximum ) ;

		if ( scroll_maximum <= 0 ) {

			wrapper.classList.remove ( 'scroll-left' ) ;
			wrapper.classList.remove ( 'scroll-right' ) ;

			return ;

		}

		if ( selections.scrollLeft <= 0 ) {

			wrapper.classList.add ( 'scroll-right' ) ;

		} else {

			wrapper.classList.remove ( 'scroll-right' ) ;

		}

		if ( selections.scrollLeft >= scroll_maximum - 1 ) {

			wrapper.classList.add ( 'scroll-left' ) ;

		} else {

			wrapper.classList.remove ( 'scroll-left' ) ;

		}

	}

	function bind_events ( selections ) {

		console.log ( 'selections [event] : bind events' ) ;

		var canvas = document.getElementById ( 'canvas' ) ;

		function target ( event ) {

			return canvas && ( event.target === canvas || canvas.contains ( event.target ) ) ;

		}

		// hide on canvas interaction (viewer pages)

		document.addEventListener ( 'pointerdown', function ( event ) {

			if ( ! canvas ) return ;

			if ( ! target ( event ) ) return ;

			if ( event.pointerType === 'mouse' && event.button !== 0 ) return ;

			hide ( selections ) ;

		}, { passive: true } ) ;

		document.addEventListener ( 'pointerup', function ( ) {

			if ( ! canvas ) return ;

			delay_show ( selections ) ;

		}, { passive: true } ) ;

		document.addEventListener ( 'pointercancel', function ( ) {

			if ( ! canvas ) return ;

			delay_show ( selections ) ;

		}, { passive: true } ) ;

		// horizontal scrolling

		selections.addEventListener ( 'wheel', function ( event ) {

			if ( event.deltaY === 0 ) return ;

			event.preventDefault ( ) ;

			selections.scrollLeft += event.deltaY ;

			selections_scroll ( selections ) ;

		}, { passive: false } ) ;

		selections.addEventListener ( 'scroll', function ( ) {

			selections_scroll ( selections ) ;

		} ) ;

		window.addEventListener ( 'resize', function ( ) {

			selections_scroll ( selections ) ;

		} ) ;

	}

	function initialize ( ) {

		if ( initialized ) return ;

		var selections = wrapper.querySelector ( '.selections' ) ;

		if ( ! selections ) return ;

		initialized = true ;

		bind_events ( selections ) ;

		var canvas = document.getElementById ( 'canvas' ) ;

		if ( canvas ) {

			hide ( selections ) ;

			delay_show ( selections ) ;

		} else {

			show ( selections ) ;

		}

		selections_scroll ( selections ) ;

		// failsafe reveal

		setTimeout ( function ( ) {

			show ( selections ) ;

			selections_scroll ( selections ) ;

		}, 2500 ) ;

	}

	// minimal bootstrap for ajax-loaded selections

	function tick ( ) {

		initialize ( ) ;

		if ( ! initialized ) {

			requestAnimationFrame ( tick ) ;

		}

	}

	tick ( ) ;

} ) ;
