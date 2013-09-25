module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    html2js: {
      dist: {
        options: {
          module: null,
          base: '.'
        },
        files: [{
          expand: true,
          src: ['templates/**/*.html'],
          ext: '.html.js'
        }]
      }
    }
  });
};