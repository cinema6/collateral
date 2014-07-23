(function() {
    'use strict';

    var excludes = require('../../excludes');

    module.exports = {
        unit: {
            files: [
                '**/*.js'
            ].concat(excludes),
            tasks: ['karma:debug:run', 'jshint']
        }
    };
})();
