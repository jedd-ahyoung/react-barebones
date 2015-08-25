var gulp = require('gulp-help')(require('gulp'));
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('./paths');

gulp.task('build', 'Compile ES6 and JSX to vanilla JS for deployment.', ['clean'], function () {
	gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
		.pipe(babel(babelConfig))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.dist));
});
