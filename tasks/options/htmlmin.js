(function() {
    'use strict';

    var excludes = require('../../excludes');

    module.exports = {
        options: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        },
        collateral: {
            files: [
                {
                    expand: true,
                    src: [
                        '**/*.html'
                    ].concat(excludes),
                    dest: '<%= settings.distDir %>'
                }
            ]
        }
    };
}());
