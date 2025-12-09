// footer //

$ ( document ) .ready ( function ( ) {

	var canvas = document.getElementById ( 'canvas' ) ;

	var footer = document.getElementById ( 'footer' ) ;

	var isMouseOrTouchActive = false;

	var resetTimeout;

	function hide ( ) {

		footer.style.marginBottom = '-80px';

	}

	function show ( ) {

		footer.style.marginBottom = '0px';

	}

	function showWithTimeout ( ) {

		clearTimeout ( resetTimeout ) ;

		resetTimeout = setTimeout ( function ( ) {

			isMouseOrTouchActive = false;

			show ( ) ;

		}, 1000 ) ;

	}

	canvas.addEventListener ( 'mousemove', function ( event ) {

		if ( !isMouseOrTouchActive ) {

			isMouseOrTouchActive = true;

			showWithTimeout ( ) ;

			hide ( ) ;

		}

	} ) ;

		canvas.addEventListener ( 'mouseenter', function ( event ) {

		if ( !isMouseOrTouchActive ) {

			isMouseOrTouchActive = true;

			showWithTimeout ( ) ;

			hide ( ) ;

		}

	} ) ;

	canvas.addEventListener ( 'touchstart', function ( event ) {

		if ( !isMouseOrTouchActive ) {

			isMouseOrTouchActive = true;

			showWithTimeout ( ) ;

			hide ( ) ;

		}

	} ) ;

} ) ;

// footer arrows for horizontal scroll

document.addEventListener ( 'DOMContentLoaded', function ( ) {

	const footer = document.querySelector ( '.footer' )

	if ( ! footer ) {

		return

	}

	function update_footer_arrows ( ) {

		const max_scroll = footer.scrollWidth - footer.clientWidth

		// no horizontal scroll possible

		if ( max_scroll <= 0 ) {

			footer.classList.remove ( 'footer-arrow-left' )
			footer.classList.remove ( 'footer-arrow-right' )

			return

		}

		const scroll_left = footer.scrollLeft
		const at_left = scroll_left <= 0
		const at_right = scroll_left >= max_scroll - 1

		// fully at left: show arrow pointing right

		if ( at_left ) {

			footer.classList.add ( 'footer-arrow-right' )
			footer.classList.remove ( 'footer-arrow-left' )

		// fully at right: show arrow pointing left

		} else if ( at_right ) {

			footer.classList.add ( 'footer-arrow-left' )
			footer.classList.remove ( 'footer-arrow-right' )

		// somewhere in the middle: no arrows

		} else {

			footer.classList.remove ( 'footer-arrow-left' )
			footer.classList.remove ( 'footer-arrow-right' )

		}

	}

	footer.addEventListener ( 'scroll', update_footer_arrows )

	window.addEventListener ( 'resize', update_footer_arrows )

	update_footer_arrows ( )

} )
