var gulp       = require('gulp');
var root       = process.cwd();
var config     = require( root + '/gulpConfig.json');
var plugins    = require('gulp-load-plugins')(config.loadOpts);
module.exports = function() {
	return gulp.src( root + '/*.html' )
		.pipe( plugins.plumber() )
		.pipe( plugins.inlineSource())
		.pipe( plugins.inlineImageHtml(root))
		.pipe( plugins.plumber.stop() )
		.pipe( gulp.dest( root + '/build/' ) )
		.pipe( plugins.notify({ message: 'Scripts & Styles have been inlined', onLast: true }));
}
