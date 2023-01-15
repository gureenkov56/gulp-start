import gulp from 'gulp';
import ts from 'gulp-typescript';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';



export const scripts = () => {
    return gulp.src(['app/scripts/*', '!app/scripts/modules/'])
    .pipe(ts({
        noImplicitAny: true,
        target: "es5"
    }))
    .pipe(uglify()) // Сжимаем JavaScript
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}
