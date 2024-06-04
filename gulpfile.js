const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
const uglify = require ('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

sass.compiler = require("node-sass")

gulp.task('sass', compilaSass)

function compilaSass() {
    return gulp
        .src('./src/styles/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('../dist/css/'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(compilaSass, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss',gulp.parallel(scss))
    gulp.watch('./src/scripts/*.js',gulp.parallel(scripts))
}