const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('gulp-browserify');
const browserSync = require('browser-sync').create();

gulp.task("default", ["styles"], function() {
  gulp.watch("sass/**/*.scss", ["styles"]);
  browserSync.init({
    server: "./"
  });
});

gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});
