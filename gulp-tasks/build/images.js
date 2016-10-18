var gulp       = require('gulp');
var root       = process.cwd();
var config     = require( root + '/gulpConfig.json');
var plugins    = require('gulp-load-plugins')(config.loadOpts);
module.exports = function() {
	return gulp.src( root + '/assets/img/**.*' )
		.pipe( gulp.dest( root + '/build/assets/img' ) );
}
