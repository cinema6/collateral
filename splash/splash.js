module.exports = function(c6, settings, splash) {
    'use strict';

    var loader = splash.querySelectorAll('.c6js-loader')[0],
        starts = Array.prototype.slice.call(splash.querySelectorAll('.c6js-start')),
        isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

    starts.forEach(function(start) {
        start.addEventListener('click', function() {
            if (loader) {
                loader.style.display = '';
            }
            c6.loadExperience(settings);
        }, false);
    });

    if(isTouch === false) {
        var c6startButton = splash.querySelector('.c6js-start');
        c6startButton.className = c6startButton.className + ' c6mr-hasHover';
    }

    return {
        didHide: loader ? function() {
            loader.style.display = 'none';
        } : function() {}
    };
};
