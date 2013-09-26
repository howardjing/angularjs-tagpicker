module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['jshint', 'clean', 'html2js']);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    clean: ['dist/'],
    html2js: {
      dist: {
        options: {
          base: '.'
        },
        src: ['templates/**/*.html'],
        dest: 'dist/tagpicker-templates.html.js',
        module: 'tagpicker.templates'
      }
    }
  });

};