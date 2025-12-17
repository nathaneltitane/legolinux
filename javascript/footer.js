// footer //

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	var canvas = document.getElementById ( 'canvas' ) ;

	var wrapper = document.getElementById ( 'footer' ) ;

	var footer = document.querySelector ( '.footer' ) ;

	if ( ! wrapper || ! footer ) {

		return ;

	}

	// initial hidden state until all slots are ready //

	wrapper.classList.remove ( 'footer-ready' ) ;

	// footer hide / show behavior //

	var resetTimeout ;

	function hide ( ) {

		wrapper.style.marginBottom = '-80px' ;

	}

	function show ( ) {

		wrapper.style.marginBottom = '0px' ;

	}

	function showWithTimeout ( ) {

		clearTimeout ( resetTimeout ) ;

		resetTimeout = setTimeout ( function ( ) {

			show ( ) ;

		}, 1000 ) ;

	}

	function isCanvasTarget ( event ) {

		return canvas && ( event.target === canvas || canvas.contains ( event.target ) ) ;

	}

	document.addEventListener ( 'pointerdown', function ( event ) {

		// only hide on canvas interaction //

		if ( ! isCanvasTarget ( event ) ) {

			return ;

		}

		if ( event.pointerType === 'mouse' && event.button !== 0 ) {

			return ;

		}

		hide ( ) ;

	}, { passive: true } ) ;

	document.addEventListener ( 'pointerup', function ( ) {

		showWithTimeout ( ) ;

	}, { passive: true } ) ;

	document.addEventListener ( 'pointercancel', function ( ) {

		showWithTimeout ( ) ;

	}, { passive: true } ) ;

	// footer slot readiness gate //

	var slot_identifiers_list = [
		'paypal',
		'controls',
		'plane',
		'dimensions',
		'minifig',
		'wireframe',
		'edges',
		'color',
		'home',
		'contact',
		'shop',
		'github',
		'donations',
		'browse'
	] ;

	function all_slots_ready ( ) {

		for ( var i = 0 ; i < slot_identifiers_list.length ; i ++ ) {

			var slot_identifier = document.getElementById ( slot_identifiers_list [ i ] ) ;

			if ( ! slot_identifier || slot_identifier.innerHTML.trim ( ) === '' ) {

				return false ;

			}

		}

		return true ;

	}

	function footer_loaded ( ) {

		if ( ! all_slots_ready ( ) ) {

			return ;

		}

		canvas_ready ( function ( ) {

			wrapper.classList.add ( 'footer-visible' ) ;

			footer.classList.add ( 'footer-loaded' ) ;

			footer_scroll ( ) ;

			observer.disconnect ( ) ;

		} ) ;

	}

	var observer = new MutationObserver ( function ( ) {

		footer_loaded ( ) ;

	} ) ;

	observer.observe ( wrapper, { childList: true, subtree: true } ) ;

	footer_loaded ( ) ;

	// horizontal scroll state handling //

	function footer_scroll ( ) {

		var max_scroll = footer.scrollWidth - footer.clientWidth ;

		if ( max_scroll <= 0 ) {

			wrapper.classList.remove ( 'scroll-left' ) ;

			wrapper.classList.remove ( 'scroll-right' ) ;

			return ;

		}

		if ( footer.scrollLeft <= 0 ) {

			wrapper.classList.add ( 'scroll-right' ) ;

		} else {

			wrapper.classList.remove ( 'scroll-right' ) ;

		}

		if ( footer.scrollLeft >= max_scroll - 1 ) {

			wrapper.classList.add ( 'scroll-left' ) ;

		} else {

			wrapper.classList.remove ( 'scroll-left' ) ;

		}

	}

	// map vertical mousewheel to horizontal scroll //

	footer.addEventListener ( 'wheel', function ( event ) {

		if ( event.deltaY === 0 ) {

			return ;

		}

		event.preventDefault ( ) ;

		footer.scrollLeft += event.deltaY ;

		footer_scroll ( ) ;

	}, { passive: false } ) ;

	footer.addEventListener ( 'scroll', function ( ) {

		footer_scroll ( ) ;

	} ) ;

	window.addEventListener ( 'resize', function ( ) {

		footer_scroll ( ) ;

	} ) ;

} ) ;
