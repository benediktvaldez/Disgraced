const path = require('path')
const glob = require('glob')

// eslint-disable-next-line global-require
glob.sync(path.resolve(__dirname, './tasks/**/*.js')).forEach((task) => require(task))
