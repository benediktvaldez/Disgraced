const path = require('path')
const gutil = require('gulp-util')
const assign = require('lodash.assign')
const pkg = require('../package.json')

const config = {
  version: pkg.version,
  source: path.resolve(__dirname, '../src'),
  target: path.resolve(__dirname, '../app'),
  minify: false,
  debug: true,
  url: 'https://skomm.kolibri.is',
}

const envs = {
  prod: {
    minify: true,
    debug: false,
    url: 'https://skomm.kolibri.is',
  },
}

// Extend with environment specific config
const env = gutil.env.env || (gutil.env.prod ? 'prod' : 'dev')
assign(config, envs[env])

config.contentful = {
  markdownContentTypes: ['contentPage', 'person', 'role'],
  markdownFields: ['content', 'bio', 'description'],
}


module.exports = config
