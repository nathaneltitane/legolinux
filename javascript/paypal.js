// paypal //

$(document).ready (function () {

    $('.paypal').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefault ();

        $('.paypal-popup').toggleClass ('paypal-show');

    });

    $('#canvas').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefaul t();

        $('.paypal-popup').removeClass ('paypal-show');

    });

    $('#footer').click (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefaul t();

        $('.paypal-popup').removeClass ('paypal-show');

    });

});


