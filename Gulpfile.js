var gulp = require('gulp'),
  connect = require('gulp-connect');

  gulp.task('tests', function() {
    connect.server({
        root: '',
        port: 8083
    });
  });

  gulp.task('connect', function() {
    connect.server({
        root: 'app'
    });
  });

  gulp.task('default', ['connect']);
