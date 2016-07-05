const _ = require('lodash')
const marked = require('marked')

const makeSrcSet = (url) => {
  let srcSet = ''

  _.each([300, 768, 1024, 1200, 2048], (size) => {
    srcSet += `${url}?w=${size} ${size}w,`
  })

  return srcSet.slice(0, -1)
}

const processImage = (image) => ({
  url: image.fields.file.url,
  srcset: makeSrcSet(image.fields.file.url),
})

module.exports = (entries) => {
  const ret = {}
  entries.items.forEach((entry) => {
    const obj = {
      id: entry.sys.id,
      revision: entry.sys.revision,
    }

    _.each(entry.fields, (value, field) => {
      if (field === 'image') {
        obj.image = processImage(value)
      } else if (entry.sys.contentType.sys.id === 'splashPage' && (field === 'intro' || field === 'footnote')) {
        obj[field] = marked(value)
      } else {
        obj[field] = value
      }
    })

    ret[entry.sys.contentType.sys.id] = ret[entry.sys.contentType.sys.id] || []
    ret[entry.sys.contentType.sys.id].push(obj)
  })
  return ret
}
