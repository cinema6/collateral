(function() {
    'use strict';

    module.exports = {
        options: {
            configFile: 'test/karma.conf.js'
        },
        unit: {
            options: {
                reporters: ['progress'],
            }
        },
        debug: {
            options: {
                singleRun: false,
                background: true
            }
        }
    };
})();
