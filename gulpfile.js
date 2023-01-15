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

const taskList = [clean, copy, scripts, img, styles]

function wtch() {
    gulp.watch('app/**/*.*', gulp.series(...taskList));
}


gulp.task('default',
    gulp.series(...taskList, gulp.parallel(wtch, server) )
)

