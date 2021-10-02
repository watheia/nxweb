export const withDefaultOptions = (options) => {
  const basePath = options.basePath || `/`
  const contentPath = options.contentPath || `content/posts`
  const assetPath = options.assetPath || `content/assets`
  const excerptLength = options.excerptLength || 140
  const imageMaxWidth = options.imageMaxWidth || 1380
  const filter = options.filter || {}
  const limit = options.limit || 1000
  return {
    basePath,
    contentPath,
    assetPath,
    excerptLength,
    imageMaxWidth,
    filter,
    limit
  }
}

export default withDefaultOptions
