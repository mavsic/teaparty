module.exports = function(grunt) {

grunt.initConfig({
    sass: {
        build: {
            files: {
                'dist/main.css': 'src/main.scss'
            }
        }
    },
    
    watch: {
        sass: {
            files: 'src/*.scss',
            tasks: [ 'sass' ]
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'sass:build' ]);

};
