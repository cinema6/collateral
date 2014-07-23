module.exports = {
    options: {
        cssmin: true,
        uglify: true
    },
    collateral: {
        src: '<%= settings.distDir %>/**/*.html'
    }
};
