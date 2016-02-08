module.exports = {
    collateral: {
        files: [
            {
                expand: true,
                cwd: '<%= settings.distDir %>/branding',
                src: '**/*.css',
                dest: '<%= settings.distDir %>/branding/',
                extDot: 'last',
                ext: '.css.domino.js'
            }
        ]
    }
};
