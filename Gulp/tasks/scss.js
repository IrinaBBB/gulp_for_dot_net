import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import autoPreFixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);
export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SASS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.css, {sourcemaps: true})))
        .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
        .pipe(app.plugins.if(app.isBuild,
            autoPreFixer(
                {
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true
                })
        ))
        // Uncomment if you need a non-compressed version of the scss file
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.if(app.isBuild, cleanCss()))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css));
};
