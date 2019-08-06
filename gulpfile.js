'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var styleSRC = "styles/styles.scss";
var styleDIST = "build/css"

gulp.task('sass', function () {
    return gulp.src(styleSRC)
        .pipe(plugins.sass({
            errorLogToConsole: true
        }))
        .on("error", console.error.bind(console))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.autoprefixer({}))
        .pipe(plugins.csso())
        .pipe(gulp.dest(styleDIST));
    done();
});