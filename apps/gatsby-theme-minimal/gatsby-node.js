/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Debug = require(`debug`)

const debug = new Debug("gatsby-theme-minimal")

const withDefaults = (options) => {
  const basePath = options.basePath || `/`
  const dataPath = options.contentPath || `content/data`
  const contentPath = options.contentPath || `content/posts`
  const assetPath = options.assetPath || `content/assets`
  const excerptLength = options.excerptLength || 140
  const imageMaxWidth = options.imageMaxWidth || 1380
  const filter = options.filter || {}
  const limit = options.limit || 1000
  return {
    assetPath,
    basePath,
    contentPath,
    dataPath,
    excerptLength,
    filter,
    imageMaxWidth,
    limit
  }
}

exports.onPreBootstrap = ({ store }, themeOptions) => {
  console.log("***onPreBootstrap****")
  const { program } = store.getState()
  const { dataPath, contentPath, assetPath } = withDefaults(themeOptions)
  debug("***** Iniutializing *****")
  console.log(
    `(contentPath, assetPath, dataPath) = (${contentPath}, ${assetPath}, ${dataPath})`
  )
}
