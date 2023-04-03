import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./wwwroot`; 
const srcFolder = `./Source`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        files: `${buildFolder}/files/`,
        css: `${buildFolder}/css/`
    },
    src: {
        js: `${srcFolder}/js/site.js`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/site.scss`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss:  `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
