// footer //

$ ( document ) .ready ( function ( ) {

	var canvas = document.getElementById ( 'canvas' ) ;

	var footer = document.getElementById ( 'footer' ) ;

	var resetTimeout ;

	function hide ( ) {

		footer.style.marginBottom = '-80px' ;

	}

	function show ( ) {

		footer.style.marginBottom = '0px' ;

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

		// only hide on mouse button press or touch press and only when interacting with canvas //

		if ( ! isCanvasTarget ( event ) ) {

			return ;

		}

		if ( event.pointerType === 'mouse' ) {

			if ( event.button !== 0 ) {

				return ;

			}

			hide ( ) ;

			return ;

		}

		if ( event.pointerType === 'touch' ) {

			hide ( ) ;

			return ;

		}

	}, { passive: true } ) ;

	document.addEventListener ( 'pointerup', function ( event ) {

		// show after interaction ends //

		showWithTimeout ( ) ;

	}, { passive: true } ) ;

	document.addEventListener ( 'pointercancel', function ( event ) {

		// show if touch is cancelled //

		showWithTimeout ( ) ;

	}, { passive: true } ) ;

} ) ;


// scroll footer items

document.addEventListener('DOMContentLoaded', function ( ) {

	const footer = document.querySelector ( '.footer' )

	if ( !footer ) {

		return

	}

	footer.addEventListener( 'wheel', function ( event ) {

		if ( event.deltaY === 0 ) {

			return
		}

		event.preventDefault ( )

		footer.scrollLeft += event.deltaY

	}, { passive: false } )

})
