import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp'
import browserSync from 'browser-sync';


export const img = () => {
    return gulp.src('app/images/**/*.*')
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest('dist/images/'))
        .pipe(browserSync.stream())
}