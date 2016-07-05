const path = require('path')
const gutil = require('gulp-util')
const assign = require('lodash.assign')

const config = {
  source: path.resolve(__dirname, '../src'),
  target: path.resolve(__dirname, '../app'),
  minify: false,
  debug: true,
  url: 'https://skomm.kolibri.is',

  env: {
    prod: {
      minify: true,
      debug: false,
      url: 'https://skomm.kolibri.is',
    },
  },
}

// Extend with environment specific config
const env = gutil.env.env || (gutil.env.prod ? 'prod' : 'dev')
assign(config, config.env[env])

module.exports = config
