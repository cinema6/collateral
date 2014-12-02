(function() {
    'use strict';

    module.exports = {
        splash: {
            options: {
                transform: function(orig) {
                    return 'module.exports = ' + orig + ';';
                }
            },
            expand: true,
            cwd: '<%= settings.distDir %>',
            src: ['**/*.html','!survey/**'],
            dest: '<%= settings.distDir %>',
            ext: '.js',
            extDot: 'last'
        }
    };
}());
