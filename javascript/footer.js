// footer //

$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    var footer = document.getElementById('footer');
    var isMouseOrTouchActive = false;
    var resetTimeout;

    // Function to lower the footer by 80px
    function lowerFooter() {
        footer.style.marginBottom = '-80px';
    }

    // Function to reset the footer to its original position
    function resetFooter() {
        footer.style.marginBottom = '0px';
    }

    // Function to reset the footer after a 2-second timeout
    function resetFooterWithTimeout() {
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(function() {
            isMouseOrTouchActive = false;
            resetFooter();
        }, 2000); // 2-second timeout
    }

    // Event listener for mouse or touch activity on the canvas
    canvas.addEventListener('mousemove, mouseenter', function(event) {
        if (!isMouseOrTouchActive) {
            isMouseOrTouchActive = true;
            resetFooterWithTimeout();
            lowerFooter();
        }
    });

    canvas.addEventListener('touchstart', function(event) {
        if (!isMouseOrTouchActive) {
            isMouseOrTouchActive = true;
            resetFooterWithTimeout();
            lowerFooter();
        }
    });
});
