import webpack from 'webpack-stream';

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'site.min.js'
            }
        }))
        .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.js, {sourcemaps: true})))
        .pipe(app.gulp.dest(app.path.build.js));
};
