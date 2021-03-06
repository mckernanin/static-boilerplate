var gulp       = require('gulp');
var root       = process.cwd();
var config     = require( root + '/gulpConfig.json');
var plugins    = require('gulp-load-plugins')(config.loadOpts);
module.exports = function() {
	return gulp.src( config.images.files )
		.pipe( plugins.plumber() )
		.pipe( plugins.rimraf({ force: true }))
		.pipe( plugins.imagemin([
				plugins.imagemin.gifsicle(),
				plugins.jpegRecompress({
					loops:4,
					min: 50,
					max: 95,
					quality:'high'
				}),
				plugins.imagemin.optipng()
			]))
		.pipe( plugins.plumber.stop() )
		.pipe( gulp.dest( config.images.dest ) );
}
