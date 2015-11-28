/*Wrapper Function encapsulates Grunt config*/
module.exports = function(grunt) {
    /*Initialise configuration object*/
    grunt.initConfig({
        /*Read package.json into pkg property*/
        pkg: grunt.file.readJSON('package.json'),
        /*Define config for sass task*/
        sass: {
            dist: {
                files: {
                    'css/style.css' : 'sass/style.scss'
                }
            }
        },
        /*Define config for watch task*/
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    /*Load in required Grunt plugins*/
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*Register task default to execute watch*/
    grunt.registerTask('default',['watch']);
}
