// Karma configuration
// Generated on Wed Sep 25 2013 00:19:36 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

  // base path, that will be used to resolve files and exclude
  basePath: '',

  // frameworks to use
  frameworks: ['jasmine'],

  // generate js files from html templates
  preprocessors: {
    'templates/*.html': ['html2js'],
    'src/*.js'  :       ['coverage']
  },

  // list of files / patterns to load in the browser
  files: [
    // jquery
    'bower_components/jquery/jquery.js',

    // angular
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    
    // directive
    'src/*.js',
    
    // template
    'templates/*.html',

    // tests
    'test/*.spec.js'
  ],

  // test results reporter to use
  // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
  reporters: ['progress', 'coverage'],

  // web server port
  port: 9876,

  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: config.LOG_INFO,

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,

  // Start these browsers, currently available:
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera
  // - Safari (only Mac)
  // - PhantomJS
  // - IE (only Windows)
  browsers: ['PhantomJS'],

  // If browser does not capture in given timeout [ms], kill it
  captureTimeout: 60000,

  // Continuous Integration mode
  // if true, it capture browsers, run tests and exit
  singleRun: false
  });
};
