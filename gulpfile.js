
'use strict';

// Load the dependencies
const gulp = require('gulp');
const del = require('del');
const responsive = require('gulp-responsive');

const srcRoot = './src';
const buildRoot = './build';

// set up file paths
const paths = {
    images: {
      src: `${srcRoot}/img_src/*.jpg`,
      dest: `${buildRoot}/img/`,
      fixed: `${srcRoot}/img_src/fixed/*.*`
    }
};

// Options for building responsive images
const imageOptions = {
        '*.jpg': [{
            width: 320,
            rename: { suffix: '-320_sm' }
        },
        {
            width: 560,
            rename: { suffix: '-560_md' }
        },
        {
            width: 800,
            rename: { suffix: '-800_lg' }
        }]

    };

// More responsive image options
const imageQuality = {
        quality: 70,
        progressive: true,
        withMetadata: false
    };

// Task to delete the build directory and start with a blank slate.
gulp.task('clean', () => del([buildRoot]));

// Copy any files that do not require build
gulp.task('copyFiles', () =>
  gulp.src(paths.files.src)
      .pipe(gulp.dest(buildRoot))
  );
  // Delete the image target directory
  const cleanImages = () => del([paths.images.dest]);

  // Copy images that I manually edited.
  // These won't e replaced by the responsiveImages task
  const copyFixedImages = () =>
      gulp.src([paths.images.fixed])
          .pipe(gulp.dest(paths.images.dest));

  // Build the responsive images. gulp-responsive uses 'sharp'
  const responsiveImages = () =>
      gulp.src([paths.images.src])
          .pipe(responsive(imageOptions, imageQuality))
          .pipe(gulp.dest(paths.images.dest, {overwrite: false}));

  // Task to bundle the image tasks
  gulp.task('images', gulp.series(cleanImages, copyFixedImages, responsiveImages));
