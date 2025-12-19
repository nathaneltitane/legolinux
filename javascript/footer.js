// footer //

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	console.log ( '[footer] domcontentloaded' ) ;

	var wrapper = document.getElementById ( 'footer' ) ;

	if ( ! wrapper ) {

		console.log ( '[footer] abort: #footer wrapper missing' ) ;

		return ;

	}

	var timeout_reset ;

	var initialized = false ;

	function hide ( footer ) {

		console.log ( '[footer] hide' ) ;

		wrapper.style.bottom = '-80px' ;

		if ( footer ) {

			footer.style.bottom = '-80px' ;

		}

	}

	function show ( footer ) {

		console.log ( '[footer] show' ) ;

		wrapper.style.bottom = '0px' ;

		if ( footer ) {

			footer.style.bottom = '0px' ;

		}

	}

	function delay_show ( footer ) {

		console.log ( '[footer] delay_show scheduled' ) ;

		clearTimeout ( timeout_reset ) ;

		timeout_reset = setTimeout ( function ( ) {

			console.log ( '[footer] delay_show execute' ) ;

			show ( footer ) ;

		}, 1500 ) ;

	}

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

		console.log ( '[footer] slots_load check start' ) ;

		for ( var i = 0 ; i < slot_identifiers_list.length ; i ++ ) {

			var id = slot_identifiers_list [ i ] ;

			var slot_identifier = document.getElementById ( id ) ;

			if ( ! slot_identifier ) {

				console.log ( '[footer] slot missing:', id ) ;

				return false ;

			}

			if ( slot_identifier.innerHTML.trim ( ) === '' ) {

				console.log ( '[footer] slot empty:', id ) ;

				return false ;

			}

			console.log ( '[footer] slot ok:', id ) ;

		}

		console.log ( '[footer] all slots loaded' ) ;

		return true ;

	}

	function canvas_load ( callback ) {

		var canvas = document.getElementById ( 'canvas' ) ;

		console.log ( '[footer] canvas element:', canvas ) ;

		if ( ! canvas ) {

			console.log ( '[footer] no canvas, skipping canvas_load' ) ;

			callback ( ) ;

			return ;

		}

		console.log ( '[footer] waiting for canvas size' ) ;

		function check ( ) {

			if ( canvas.clientWidth > 0 && canvas.clientHeight > 0 ) {

				console.log ( '[footer] canvas ready:', canvas.clientWidth, canvas.clientHeight ) ;

				requestAnimationFrame ( function ( ) {

					callback ( ) ;

				} ) ;

				return ;

			}

			requestAnimationFrame ( check ) ;

		}

		check ( ) ;

	}

	function footer_scroll ( footer ) {

		var max_scroll = footer.scrollWidth - footer.clientWidth ;

		console.log ( '[footer] footer_scroll:', footer.scrollLeft, '/', max_scroll ) ;

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

	function bind_events ( footer ) {

		console.log ( '[footer] bind_events' ) ;

		var canvas = document.getElementById ( 'canvas' ) ;

		function target ( event ) {

			var result = canvas && ( event.target === canvas || canvas.contains ( event.target ) ) ;

			console.log ( '[footer] target check:', result ) ;

			return result ;

		}

		document.addEventListener ( 'pointerdown', function ( event ) {

			console.log ( '[footer] pointerdown' ) ;

			if ( ! canvas ) {

				console.log ( '[footer] pointerdown ignored (no canvas)' ) ;

				return ;

			}

			if ( ! target ( event ) ) {

				console.log ( '[footer] pointerdown ignored (not canvas)' ) ;

				return ;

			}

			if ( event.pointerType === 'mouse' && event.button !== 0 ) {

				console.log ( '[footer] pointerdown ignored (not left mouse)' ) ;

				return ;

			}

			hide ( footer ) ;

		}, { passive: true } ) ;

		document.addEventListener ( 'pointerup', function ( ) {

			console.log ( '[footer] pointerup' ) ;

			if ( ! canvas ) {

				return ;

			}

			delay_show ( footer ) ;

		}, { passive: true } ) ;

		document.addEventListener ( 'pointercancel', function ( ) {

			console.log ( '[footer] pointercancel' ) ;

			if ( ! canvas ) {

				return ;

			}

			delay_show ( footer ) ;

		}, { passive: true } ) ;

		footer.addEventListener ( 'wheel', function ( event ) {

			console.log ( '[footer] wheel:', event.deltaY ) ;

			if ( event.deltaY === 0 ) {

				return ;

			}

			event.preventDefault ( ) ;

			footer.scrollLeft += event.deltaY ;

			footer_scroll ( footer ) ;

		}, { passive: false } ) ;

		footer.addEventListener ( 'scroll', function ( ) {

			console.log ( '[footer] scroll event' ) ;

			footer_scroll ( footer ) ;

		} ) ;

		window.addEventListener ( 'resize', function ( ) {

			console.log ( '[footer] resize' ) ;

			footer_scroll ( footer ) ;

		} ) ;

	}

	function attempt_initialize ( ) {

		if ( initialized ) {

			return ;

		}

		var footer = wrapper.querySelector ( '.footer' ) ;

		if ( ! footer ) {

			console.log ( '[footer] waiting: .footer not present yet' ) ;

			return ;

		}

		console.log ( '[footer] found .footer' ) ;

		initialized = true ;

		hide ( footer ) ;

		bind_events ( footer ) ;

		function footer_loaded ( ) {

			console.log ( '[footer] footer_loaded check' ) ;

			if ( ! slots_load ( ) ) {

				console.log ( '[footer] footer_loaded blocked: slots not ready' ) ;

				return ;

			}

			canvas_load ( function ( ) {

				console.log ( '[footer] footer_loaded success' ) ;

				delay_show ( footer ) ;

				footer_scroll ( footer ) ;

				if ( content_observer ) {

					content_observer.disconnect ( ) ;

				}

			} ) ;

		}

		var content_observer = new MutationObserver ( function ( mutations ) {

			console.log ( '[footer] content mutation observed:', mutations.length ) ;

			footer_loaded ( ) ;

		} ) ;

		content_observer.observe ( wrapper, { childList: true, subtree: true } ) ;

		footer_loaded ( ) ;

		setTimeout ( function ( ) {

			console.log ( '[footer] failsafe reveal' ) ;

			show ( footer ) ;

			footer_scroll ( footer ) ;

		}, 3500 ) ;

	}

	var bootstrap_observer = new MutationObserver ( function ( mutations ) {

		console.log ( '[footer] bootstrap mutation observed:', mutations.length ) ;

		attempt_initialize ( ) ;

	} ) ;

	bootstrap_observer.observe ( wrapper, { childList: true, subtree: true } ) ;

	attempt_initialize ( ) ;

} ) ;
