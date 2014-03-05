var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('docs', function () {
  console.log("[JSDuck] Creating documentation");
  return gulp.src('')
    .pipe(shell([
        'jsduck src/js/ --title "Creating Documentation" --guides src/guides.json --output docs'
    ]));
});

gulp.task('default', ['docs']);
