// controls //

$(document).ready (function () {

    $('.controls').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefault ();

        // hide paypal popup if visible

        $('.paypal-popup').removeClass ('paypal-show');

        $('.controls-popup').toggleClass ('controls-show');

    });

    $('#canvas').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefaul t();

         // hide paypal popup if visible

        $('.paypal-popup').removeClass ('paypal-show');

        $('.controls-popup').removeClass ('controls-show');

    });

    $('#footer').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefaul t();

         // hide paypal popup if visible

        $('.paypal-popup').removeClass ('paypal-show');

        $('.controls-popup').removeClass ('controls-show');

    });

});


