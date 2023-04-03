import gulp from 'gulp';
import {path} from './Gulp/config/path.js';
import {plugins} from './Gulp/config/plugins.js';

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Tasks
import {scss} from "./Gulp/tasks/scss.js";
import {js} from "./Gulp/tasks/js.js";

function watcher() {
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(scss, js);

const dev = gulp.series(mainTasks, watcher);
const build = gulp.series(mainTasks);

export {dev};
export {build};

gulp.task('default', dev);
