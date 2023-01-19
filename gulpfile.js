import gulp from 'gulp';

import { img } from './gulp/tasks/image.js';
import { scripts } from './gulp/tasks/scripts.js'
import { clean } from './gulp/tasks/clean.js'
import { styles } from './gulp/tasks/styles.js';
import { copy } from './gulp/tasks/copy.js';
import { server } from './gulp/tasks/lifeserver.js';

global.app = {
    gulp
}

const taskList = [copy, scripts, styles, img];
const allWatchers = [cssWatcher, jsWatcher, htmlWatcher, imgWatcher];

function imgWatcher() {
    gulp.watch('app/images/*.*', img);
}

function cssWatcher() {
    gulp.watch('app/scss/*.*', styles);
}

function jsWatcher() {
    gulp.watch('app/scripts/**/*.*', scripts);
}

function htmlWatcher() {
    gulp.watch('app/**/*.html', copy);
}

function wtch() {
    gulp.watch('app/**/*.*', gulp.series(...taskList));
}


gulp.task('default',
    gulp.series(
        () => clean('dist'),
        ...taskList,
        gulp.parallel(...allWatchers, server)
    )
)