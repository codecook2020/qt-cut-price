const postcss = require('rollup-plugin-postcss');
//import sass from 'node-sass'

// const scss = require('rollup-plugin-scss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('node-sass');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        preprocessor: (content, id) =>
          new Promise((resolve, reject) => {
            const result = sass.renderSync({ file: id });
            resolve({ code: result.css.toString() });
          }),
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        extensions: ['.sass', '.scss', '.css'],
      })
    );
    // config.plugins.push(
    //   scss() //
    // );
    return config;
  },
};

// sass({
//   // Processor will be called with two arguments:
//   // - style: the compiled css
//   // - id: import id
//   processor: css => postcss([autoprefixer])
//     .process(css)
//     .then(result => result.css)
// })
