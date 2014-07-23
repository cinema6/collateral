(function() {
    'use strict';

    var excludes = require('../../excludes');

    module.exports = {
        collateral: {
            expand: true,
            src: [
                '**/*.css'
            ].concat(excludes),
            dest: '<%= settings.distDir %>'
        }
    };
}());
