// footer //

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	var canvas = document.getElementById ( 'canvas' ) ;

	var wrapper = document.getElementById ( 'footer' ) ;

	var footer = document.querySelector ( '.footer' ) ;

	if ( ! wrapper || ! footer ) {

		return ;

	}


	var timeout_reset ;

	function hide ( ) {

		wrapper.style.bottom = '-80px' ;
		footer.style.bottom = '-80px' ;

	}

	function show ( ) {

		wrapper.style.bottom = '0px' ;
		footer.style.bottom = '0px' ;

	}

	function timed_show ( ) {

		clearTimeout ( timeout_reset ) ;

		timeout_reset = setTimeout ( function ( ) {

			show ( ) ;

		}, 1500 ) ;

	}

	// start hidden //

	hide ( ) ;

	function target ( event ) {

		return canvas && ( event.target === canvas || canvas.contains ( event.target ) ) ;

	}

	document.addEventListener ( 'pointerdown', function ( event ) {

		// only hide on canvas interaction //

		if ( ! target ( event ) ) {

			return ;

		}

		if ( event.pointerType === 'mouse' && event.button !== 0 ) {

			return ;

		}

		hide ( ) ;

	}, { passive: true } ) ;

	document.addEventListener ( 'pointerup', function ( ) {

		timed_show ( ) ;

	}, { passive: true } ) ;

	document.addEventListener ( 'pointercancel', function ( ) {

		timed_show ( ) ;

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

	function slots_load ( ) {

		for ( var i = 0 ; i < slot_identifiers_list.length ; i ++ ) {

			var slot_identifier = document.getElementById ( slot_identifiers_list [ i ] ) ;

			if ( ! slot_identifier || slot_identifier.innerHTML.trim ( ) === '' ) {

				return false ;

			}

		}

		return true ;

	}

	function canvas_load ( callback ) {

		if ( ! canvas ) {

			callback ( ) ;

			return ;

		}

		function check ( ) {

			if ( canvas.clientWidth > 0 && canvas.clientHeight > 0 ) {

				requestAnimationFrame ( function ( ) {

					callback ( ) ;

				} ) ;

				return ;

			}

			requestAnimationFrame ( check ) ;

		}

		check ( ) ;

	}

	function footer_loaded ( ) {

		if ( ! slots_load ( ) ) {

			return ;

		}

		canvas_load ( function ( ) {

			timed_show ( ) ;

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
