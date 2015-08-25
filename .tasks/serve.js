var gulp = require('gulp-help')(require('gulp'));
var browserSync = require('browser-sync');

gulp.task('serve', 'Start a development server and browser.', function (done) {
	browserSync({
		open: false,
		port: 9000,
		server: {
			baseDir: ['.'],
			middleware: function (req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});
