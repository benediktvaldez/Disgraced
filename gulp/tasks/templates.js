const gulp = require('gulp')
const gutil = require('gulp-util')
const pug = require('gulp-pug')
const config = require('../config')
const errorHandler = require('../utils/error-handler')
const content = require('../utils/content')

gulp.task('templates', (done) => {
  content().then((data) => {
    gulp.src(`${config.source}/templates/**/*.{jade,pug}`)
      .pipe(pug({
        pretty: config.minify,
        basedir: `${config.source}`,
        locals: {
          env: { url: config.url },
          content: data,
          // content will be injected here
        },
      }))
      .on('error', errorHandler)
      .pipe(gulp.dest(config.target))
    done()
  }).catch((err) => {
    gutil.log('Content failed!')
    // eslint-disable-next-line no-console
    console.log(err)
    done()
  })
})
