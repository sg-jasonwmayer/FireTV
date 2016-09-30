module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
	    files: [
	    'bower_components/angular/angular.js',
	    'bower_components/angular-mocks/angular-mocks.js',
	    'bower_components/angular-animate/angular-animate.js',
	    'bower_components/angular-cookies/angular-cookies.js',
	    'bower_components/angular-resource/angular-resource.js',
	    'bower_components/angular-route/angular-route.js',
	    'bower_components/angular-sanitize/angular-sanitize.js',
	    'bower_components/angular-touch/angular-touch.js',
	    'bower_components/angular-ui-router/release/angular-ui-router.js'
	]
  });
};
