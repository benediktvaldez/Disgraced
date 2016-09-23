const global = require('../global')

const config = {
  path: '/',
  color: 'yellow',
}

module.exports = Object.assign(config, {
  load: () => {
    global.setAttr('color', config.color)
  },
})
