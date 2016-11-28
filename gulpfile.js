const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();

gulp.task('minify', () => {
    gulp.src('./dist/calendar.js')
    .pipe(closureCompiler({
        js_output_file: 'calendar.min.js',
        compilation_level: 'SIMPLE_OPTIMIZATIONS',
        language_in: 'ECMASCRIPT6_STRICT',
        language_out: 'ECMASCRIPT5_STRICT',
        warning_level: 'QUIET'
    }))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['minify']);

