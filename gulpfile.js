'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename');

exports.less = function () {
    return gulp.src('styles/*.less')
        .pipe(less())
        .pipe(concatCss("style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
}

exports.watch = function () {
    gulp.watch('src/styles/*.less', gulp.series('less'));
};
