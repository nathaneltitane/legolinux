// selections //

$ ( document ) .ready ( function ( ) {

	var canvas = document.getElementById ( 'canvas' ) ;

	var selections = document.getElementById ( 'selections' ) ;

	var isMouseOrTouchActive = false;

	var resetTimeout;

	function hide ( ) {

		selections.style.marginTop = '-500px';

	}

	function show ( ) {

		selections.style.marginTop = '0px';

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
