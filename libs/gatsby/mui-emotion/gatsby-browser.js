/* eslint-disable import/prefer-default-export */
const CacheProvider = require("@emotion/react").CacheProvider
const { getEmotionCache } = require("@watheia/utils")

const cache = getEmotionCache()

exports.wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>
}
