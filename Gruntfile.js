module.exports = function(grunt) {
    'use strict';

    var path = require('path'),
        _ =require('underscore');

    var settings = grunt.file.readJSON('settings.json'),
        c6Settings = (function(settings) {
            function loadGlobalConfig(relPath) {
                var configPath = path.join(process.env.HOME, relPath),
                    configExists = grunt.file.exists(configPath);

                return configExists ? grunt.file.readJSON(configPath) : {};
            }

            _.extend(this, settings);

            this.openBrowser = process.env.GRUNT_BROWSER;

            this.aws = loadGlobalConfig(settings.awsJSON);

            return this;
        }.call({}, settings));

    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks/options'),
        config: {
            settings: c6Settings
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('test:unit', 'run unit tests', [
        'jshint:all',
        'karma:unit'
    ]);

    grunt.registerTask('test:unit:debug', 'run unit tests whenever files change', [
        'karma:debug',
        'watch:unit'
    ]);

    /*********************************************************************************************
     *
     * BUILD TASKS
     *
     *********************************************************************************************/

    grunt.registerTask('build', 'build app into distDir', [
        'test:unit',
        'copy:collateral',
        'htmlmin:collateral',
        'cssmin:collateral',
        'uglify:collateral',
        'inline:collateral',
        'jsify:splash'
    ]);

    /*********************************************************************************************
     *
     * UPLOAD TASKS
     *
     *********************************************************************************************/

    grunt.registerTask('publish', 'upload the collateral assets and app to s3', function(target) {
        grunt.task.run('build');
        grunt.task.run('s3:' + target);
    });
};
