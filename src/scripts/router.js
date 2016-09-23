const $ = require('jquery')
const global = require('./global')
const keys = require('@kolibridev/components/lib/keys')
const domready = require('@kolibridev/components/lib/domready')
const Router = require('@kolibridev/components/lib/router')
const { each } = require('lodash')

module.exports = (routes) => {
  const router = new Router(routes)
  if (!router.supported) {
    console.warn('No history API support')
    return
  }

  const selector = 'a:not([target])'
  const nopes = ['#', 'http', 'mailto', 'tel']

  const clickHandler = (event) => {
    if (keys.isClickModifier(event)) { return }

    const path = event.currentTarget.getAttribute('href') || event.currentTarget.pathname

    let neverMind = false
    each(nopes, (nope) => {
      if (path.indexOf(nope) === 0) {
        neverMind = true
      }
    })
    if (neverMind) {
      return
    }

    router.navigate(path)

    event.preventDefault()
    // NOTE: browser hack to prevent default behaviour
    // eslint-disable-next-line consistent-return
    return false
  }

  $(document).on('ajax-loaded', (event, data) => {
    global.analytics('send', 'pageview', { page: data.state.path })
  })


  domready(() => {
    $(selector).on('click.router', (event) => clickHandler(event))
  }, () => {
    $(selector).on('click.router', (event) => clickHandler(event))
  })
}
