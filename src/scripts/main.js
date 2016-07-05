// Polyfills
require('es6-promise')
require('whatwg-fetch')

// const analytics = require('./modules/analytics')
const domready = require('./modules/domready')
const initRouter = require('./init/router')

// Routes
const indexRoute = require('./routes/index')

// analytics('UA-77889324-1')
initRouter({
  '/': indexRoute,
})

domready(() => {
  setTimeout(() => document.querySelector('html').classList.remove('loading'), 500)
})
