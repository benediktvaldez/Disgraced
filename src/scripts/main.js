// Polyfills
require('es6-promise')
const $ = require('jquery')

// const analytics = require('@kolibridev/components/lib/analytics')
// analytics.init('UA-XXXXXXXX-1')

const domready = require('@kolibridev/components/lib/domready')
const router = require('./router')

// Routes
const routes = require('./routes')
router(routes)

domready(() => {
  setTimeout(() => $('html').removeClass('loading'), 750)
})
