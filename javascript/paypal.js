// paypal //

$(document).ready (function () {

    $('.paypal').hover (function (e) {

        // disable defaults prevention for href handling

        // e.preventDefault ();

        $('.paypal-popup').toggleClass ('paypal-popup-show');

    });

});


