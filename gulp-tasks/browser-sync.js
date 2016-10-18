var gulp       = require('gulp');
var root       = process.cwd();
var config     = require( root + '/gulpConfig.json');
var plugins    = require('gulp-load-plugins')(config.loadOpts);
module.exports = function() {
	plugins.browserSync.init( config.browserSync.files, {
		server: {
			basedir: './'
		},
		open: config.browserSync.open
	})
}
