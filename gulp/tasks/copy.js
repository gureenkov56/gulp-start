import browserSync from "browser-sync"

export const copy = () => {
    return app.gulp.src('app/*.html')
        .pipe(app.gulp.dest('dist/'))
        .pipe(browserSync.stream())
}