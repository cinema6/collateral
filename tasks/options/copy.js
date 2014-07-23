(function() {
    'use strict';

    var excludes = require('../../excludes');

    module.exports = {
        collateral: {
            files: [
                {
                    expand: true,
                    src: [
                        '**',
                        '!**/*.html',
                        '!**/*.js',
                        '!**/*.css'
                    ].concat(excludes),
                    dest: '<%= settings.distDir %>'
                }
            ]
        }
    };
}());
