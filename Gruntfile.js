module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                esversion: "6",
                globals: {
                    jQuery: true
                }
            },
            build: ['Gruntfile.js', 'src/**/*.js']
        },
        uglify: {
            build: {
                files: {
                    'dist/js/script.min.js': 'src/js/script.js'
                }
            }
        },
        sass: {
            options: {
                style: 'expanded'
            },
            build: {
                files: {
                    'src/css/style.css': 'src/css/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                processImport: false
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'src/css/style.css'
                }
            }
        },
        watch: {
            sass: {
                files: 'src/css/*.scss',
                tasks: ['sass', 'cssmin']
            },
            scripts: {
                files: 'src/js/*.js',
                tasks: ['jshint', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sass']);
};