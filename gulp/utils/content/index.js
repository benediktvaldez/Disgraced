const contentful = require('contentful')
const transform = require('./transform')

module.exports = () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PROD_TOKEN,
  })

  return new Promise((resolve, reject) => {
    client.getEntries()
      .then((entries) => resolve(transform(entries)))
      .catch((err) => reject(err))
  })
}
