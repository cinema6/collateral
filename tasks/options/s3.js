(function() {
    'use strict';

    module.exports = {
        options: {
            key:    '<%= settings.aws.accessKeyId %>',
            secret: '<%= settings.aws.secretAccessKey %>',
            access: 'public-read'
        },
        test: {
            options: {
                bucket: '<%= settings.s3.test.bucket %>'
            },
            upload: [
                {
                    src: '<%= settings.distDir %>/**',
                    rel: '<%= settings.distDir %>/',
                    dest: '<%= settings.s3.test.dir %>',
                    options: {
                        CacheControl: 'max-age=60'
                    }
                }
            ]
        },
        production: {
            options: {
                bucket: '<%= settings.s3.production.bucket %>'
            },
            upload: [
                {
                    src: '<%= settings.distDir %>/**',
                    rel: '<%= settings.distDir %>/',
                    dest: '<%= settings.s3.production.dir %>',
                    options: {
                        CacheControl: 'max-age=300'
                    }
                }
            ]
        }
    };
}());
