// selections //

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	console.log ( 'selections [ init ] : domcontentloaded' ) ;

	var selections_parent = document.getElementById ( 'selections' ) ;
	var selections = null ;

	if ( ! selections_parent ) {

		console.log ( 'selections [ init ] : abort, #selections missing' ) ;

		return ;

	}

	selections = selections_parent.querySelector ( '.selections' ) ;

	if ( ! selections ) {

		console.warn ( 'selections [ init ] : abort, .selections missing' ) ;

		return ;

	}

	function hide ( ) {

		selections_parent.style.top = '-160px' ;

		selections.style.top = '-160px' ;

	}

	function show ( ) {

		selections_parent.style.top = '0px' ;

		selections.style.top = '0px' ;

	}

	function is_open ( ) {

		return selections_parent.style.top === '0px' ;

	}

	function toggle ( ) {

		if ( is_open ( ) ) {

			hide ( ) ;

		} else {

			show ( ) ;

		}

		scroll ( ) ;

	}

	function scroll ( ) {

		var arrow_left	= document.querySelector ( '#selections-start .selections-start' ) ;
		var arrow_right	= document.querySelector ( '#selections-end .selections-end' ) ;

		// do not show arrows if load incomplete

		if ( selections.clientWidth <= 0 ) {

			if ( arrow_left ) arrow_left.classList.remove ( 'selections-right' ) ;
			if ( arrow_right ) arrow_right.classList.remove ( 'selections-left' ) ;

			return ;

		}

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

		// end

		if ( selections.scrollLeft >= scroll_maximum - 1 ) {

			if ( arrow_left ) arrow_left.classList.remove ( 'selections-right' ) ;
			if ( arrow_right ) arrow_right.classList.add ( 'selections-left' ) ;

			return ;

		}

		// middle

		// if ( arrow_left ) arrow_left.classList.add ( 'selections-right' ) ;
		// if ( arrow_right ) arrow_right.classList.add ( 'selections-left' ) ;

	}

	// force hidden on load

	hide ( ) ;

	// tab click (works even when pseudo-element is clicked) //

	selections_parent.addEventListener ( 'click', function ( event ) {

		var clicked_tab = event.target.closest ( '.selections-tab' ) ;
		var clicked_pseudo = event.target === selections_parent ;

		if ( ! clicked_tab && ! clicked_pseudo ) {

			return ;

		}

		toggle ( ) ;

	}, { passive: true } ) ;

	// hide on canvas interaction for viewer pages - no auto-show //

	var canvas = document.getElementById ( 'canvas' ) ;

	function target ( event ) {

		return canvas && ( event.target === canvas || canvas.contains ( event.target ) ) ;

	}

	document.addEventListener ( 'pointerdown', function ( event ) {

		if ( ! canvas ) {

			return ;

		}

		if ( ! target ( event ) ) {

			return ;

		}

		if ( event.pointerType === 'mouse' && event.button !== 0 ) {

			return ;

		}

		hide ( ) ;

	}, { passive: true } ) ;

	// horizontal scrolling

	selections.addEventListener ( 'wheel', function ( event ) {

		if ( event.deltaY === 0 ) {

			return ;

		}

		event.preventDefault ( ) ;

		selections.scrollLeft += event.deltaY ;

		scroll ( ) ;

	}, { passive: false } ) ;

	selections.addEventListener ( 'scroll', function ( ) {

		scroll ( ) ;

	} ) ;

	window.addEventListener ( 'resize', function ( ) {

		scroll ( ) ;

	} ) ;

	scroll ( ) ;

} ) ;
