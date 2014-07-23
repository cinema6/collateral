(function() {
    'use strict';

    var excludes = require('../../excludes');

    module.exports = {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [
            '**/*.js'
        ].concat(excludes)
    };
})();
