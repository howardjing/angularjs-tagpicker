module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['karma:unit', 'watch']);
  grunt.registerTask('build', ['clean', 'concat:dist', 'html2js:dist']);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['src/**/*.js'],
      tasks: ['jshint', 'karma:unit:run']
    },
    jshint: {
      files: [
        'package.json', 'karma.conf.js', 'bower.json', 'Gruntfile.js', 
        'src/**/*.js', 'test/**/*.js'
      ]
    },
    clean: ['dist/'],
    concat: {
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/tagpicker.js'
      }
    },
    html2js: {
      dist: {
        options: {
          base: '.'
        },
        src: ['templates/**/*.html'],
        dest: 'dist/tagpicker-templates.html.js',
        module: 'tagpicker.templates'
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js',
      },
      unit: {
        background: true
      }
    }
  });

};