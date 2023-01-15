import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import browserSync from 'browser-sync';


const scss = gulpSass(dartSass);

export const styles = () => {
    return app.gulp.src(['app/scss/*.scss', '!app/scss/modules/'])
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ }))
        .pipe(app.gulp.dest('dist/css/')) // Выгрузим результат в папку "app/css/"
        .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

