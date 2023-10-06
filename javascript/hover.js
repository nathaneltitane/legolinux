// hover

// provide touch screen browser hover emulation

$(document).ready (function () {

    $('#background').on ('touchstart touchend', function ( event) {

        // event.preventDefault ( );

        $('#background-overlay').toggleClass ('hover-overlay');

    });

    $( '.container' ).on ( 'touchstart touchend', function ( event ) {

        // event.preventDefault ( );

        $( '.label' ).toggleClass ( 'hover-expand' );

    } );

});
