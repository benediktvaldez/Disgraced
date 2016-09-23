
const frontRoute = require('./front')

module.exports = {
  [frontRoute.path]: frontRoute,
  [`${frontRoute.path}index.html`]: frontRoute,
}
