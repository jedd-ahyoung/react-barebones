var gulp = require('gulp-help')(require('gulp'));
var vinylpaths = require('vinyl-paths');
var del = require('del');
var path = require('path');
var paths = require('./paths');

gulp.task('clean', 'Clear the deployment directory.', function () {
	gulp.src(path.join(paths.dist, '*'))
		.pipe(vinylpaths(del));
});
