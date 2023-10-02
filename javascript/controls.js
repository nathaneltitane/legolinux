// controls //

$(document).ready (function () {

    $('.controls').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefault ();

        $('.controls-popup').toggleClass ('controls-show');

    });

    $('#canvas').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefaul t();

        $('.controls-popup').removeClass ('controls-show');

    });

    $('#footer').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefaul t();

        $('.controls-popup').removeClass ('controls-show');

    });

});


