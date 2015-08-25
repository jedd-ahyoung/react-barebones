var gulp = require('gulp-help')(require('gulp'));
var browserSync = require('browser-sync');
var paths = require('./paths');

gulp.task('watch', 'Run a development server and browser and watch for file changes.', ['serve'], function () {
	gulp.watch(paths.scripts, ['clean', 'build', browserSync.reload]);
});
