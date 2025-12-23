// selections //

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	console.log ( 'selections [ init ] : domcontentloaded' ) ;

	var selections_parent = document.getElementById ( 'selections' ) ;
	var selections	= selections_parent.querySelector		( '.selections' ) ;

	if ( ! selections_parent ) {

		console.log ( 'selections [ init ] : abort, #selections missing' ) ;

		return ;

	}

	var timeout_reset ;

	var initialized = false ;

	function hide ( selections ) {

		console.log ( 'selections [ state ] : hide' ) ;

		selections_parent.style.top = '-160px' ;

		if ( selections ) {

			selections.style.top = '-160px' ;

		}

	}

	function show ( selections ) {

		console.log ( 'selections [ state ] : show' ) ;

		selections_parent.style.top = '0px' ;

		if ( selections ) {

			selections.style.top = '0px' ;

		}

	}

	function delay_show ( selections ) {

		console.log ( 'selections [ state ] : delay_show scheduled' ) ;

		clearTimeout ( timeout_reset ) ;

		timeout_reset = setTimeout ( function ( ) {

			console.log ( 'selections [ state ] : delay_show execute' ) ;

			show ( selections ) ;

			requestAnimationFrame ( function ( ) {

				scroll ( selections ) ;

			} ) ;

		}, 1500 ) ;

	}

	function scroll ( selections ) {

		var arrow_left	= document.querySelector ( '#selections-start .selections-start' ) ;
		var arrow_right	= document.querySelector ( '#selections-end .selections-end' ) ;

		// if not laid out yet, do not show arrows //

		if ( ! selections || selections.clientWidth <= 0 ) {

			if ( arrow_left ) arrow_left.classList.remove ( 'selections-right' ) ;
			if ( arrow_right ) arrow_right.classList.remove ( 'selections-left' ) ;

			return ;

		}

		// robust overflow check (flex / subpixel / rounding) //

		var can_scroll = selections.scrollWidth > ( selections.clientWidth + 1 ) ;

		if ( ! can_scroll ) {

			if ( arrow_left ) arrow_left.classList.remove ( 'selections-right' ) ;
			if ( arrow_right ) arrow_right.classList.remove ( 'selections-left' ) ;

			return ;

		}

		var scroll_maximum = selections.scrollWidth - selections.clientWidth ;

		// start

		if ( selections.scrollLeft <= 0 ) {

			if ( arrow_left ) arrow_left.classList.add ( 'selections-right' ) ;
			if ( arrow_right ) arrow_right.classList.remove ( 'selections-left' ) ;

			return ;

		}

		// middle

		// if ( arrow_left ) arrow_left.classList.add ( 'selections-right' ) ;
		// if ( arrow_right ) arrow_right.classList.add ( 'selections-left' ) ;

		// end

		if ( selections.scrollLeft >= scroll_maximum - 1 ) {

			if ( arrow_left ) arrow_left.classList.remove ( 'selections-right' ) ;
			if ( arrow_right ) arrow_right.classList.add ( 'selections-left' ) ;

			return ;

		}

	}

	function bind ( selections ) {

		console.log ( 'selections [ event ] : bind events' ) ;

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

			scroll ( selections ) ;

		}, { passive: false } ) ;

		selections.addEventListener ( 'scroll', function ( ) {

			scroll ( selections ) ;

		} ) ;

		window.addEventListener ( 'resize', function ( ) {

			scroll ( selections ) ;

		} ) ;

	}

	function initialize ( ) {

		if ( initialized ) return ;

		var selections = selections_parent.querySelector ( '.selections' ) ;

		if ( ! selections ) return ;

		initialized = true ;

		bind ( selections ) ;

		var canvas = document.getElementById ( 'canvas' ) ;

		if ( canvas ) {

			hide ( selections ) ;

			delay_show ( selections ) ;

		} else {

			show ( selections ) ;

		}

		scroll ( selections ) ;

		// failsafe reveal

		setTimeout ( function ( ) {

			show ( selections ) ;

			scroll ( selections ) ;

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
