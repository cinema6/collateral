(function() {
    'use strict';

    var excludes = require('../../excludes');

    module.exports = {
        collateral: {
            src: [
                '**/*.js'
            ].concat(excludes),
            expand: true,
            dest: '<%= settings.distDir %>'
        }
    };
}());
