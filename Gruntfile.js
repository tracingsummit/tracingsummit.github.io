module.exports = function(grunt) {
    grunt.initConfig({
        dirs: {
            site: 'site',
            dev: 'dev',
            prod: 'prod'
        },

        cssmin: {
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.site %>/assets/css',
                        src: [
                            '*.css',
                            '!*.min.css'
                        ],
                        dest: '<%= dirs.prod %>/assets/css'
                    }
                ]
            }
        },

        jekyll: {
            options: {
                src: '<%= dirs.site %>'
            },
            dev: {
                options: {
                    dest: '<%= dirs.dev %>'
                }
            },
            prod: {
                options: {
                    dest: '<%= dirs.prod %>',
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: grunt.option('port') || 9000,
                    livereload: 35729,
                    base: '<%= dirs.dev %>'
                }
            },
            prod: {
                options: {
                    port: grunt.option('port') || 10000,
                    base: '<%= dirs.prod %>'
                }
            }
        },

        watch: {
            options: {
                spawn: false
            },
            dev: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= dirs.site %>/**/*.{html,yml,md,js,scss,css,jpg,png}'
                ],
                tasks: [
                    'jekyll:dev'
                ]
            },
            prod: {
                options: {
                    livereload: false
                },
                files: [
                    '<%= dirs.site %>/**/*.{html,yml,md,js,scss,css,jpg,png}'
                ],
                tasks: [
                    'jekyll:prod',
                    'cssmin:prod'
                ]
            }
        },

        rsync: {
            options: {
                args: ['-a --progress'],
                exclude: ['.git*', 'node_modules'],
                recursive: true
            },
            prod: {
                options: {
                    src: '<%= dirs.prod %>/',
                    host: 'deploy@www.tracingsummit.org',
                    dest: '/var/www/html/www.tracingsummit.org/',
                    delete: false // important: do NOT delete files on remote server
                }
            },
            pre: {
                options: {
                    src: '<%= dirs.dev %>/',
                    host: 'deploy@pre.tracingsummit.org',
                    dest: '/var/www/html/pre.tracingsummit.org/',
                    delete: false
                }
            },
        },
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', 'build');
    grunt.registerTask('build', 'build:dev');
    grunt.registerTask('build:dev', [
        'jekyll:dev'
    ]);
    grunt.registerTask('build:prod', [
        'jekyll:prod',
        'cssmin:prod',
    ]);
    grunt.registerTask('serve', 'serve:dev');
    grunt.registerTask('serve:dev', [
        'build:dev',
        'connect:dev',
        'watch:dev'
    ]);
    grunt.registerTask('serve:prod', [
        'build:prod',
        'connect:prod',
        'watch:prod',
    ]);
    grunt.registerTask('deploy', [
        'build:prod',
        'rsync:prod'
    ]);
    grunt.registerTask('deploy:pre', [
        'build:dev',
        'rsync:pre'
    ]);
};
