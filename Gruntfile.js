module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('default', ['karma:unit', 'watch']);
  grunt.registerTask('build', ['clean', 'concat:dist', 'html2js:dist', 'sass:dist']);
  grunt.registerTask('demo', ['build', 'copy:demo']);

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
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.scss'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    },
    copy: {
      demo: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ["*"],
          filter: 'isFile',
          dest: 'demo'
        }]
      }
    },
    html2js: {
      dist: {
        options: {
          base: '.'
        },
        src: ['templates/**/*.html'],
        dest: 'dist/tagpicker-templates.js',
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