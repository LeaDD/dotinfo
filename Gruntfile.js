module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    //Use the following line to import a .yml file which will name all of
    //our directories we might want to reference in the Gruntfile.js. Helps with
    //maintenance.

    grunt.initConfig({
        //Lint Javascript
        jshint: {
            all: [
            'Gruntfile.js',
            'src/**/*.js'
            ]
        },
        //Minify Javascript
        uglify: {
            dist: {
                //placeholder
            }
        },
        //Minify HTML
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        //Minify CSS
        cssmin: {
            target: {
                files: {
                    'dist/css/style.css': 'src/css/style.css'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: 'img/*',
                dest: 'dist/'
            }
        }
    });

    grunt.registerTask('default',
        ['jshint',
        'uglify',
        'htmlmin',
        'cssmin',
        'copy'
        ]);
};