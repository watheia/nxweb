import createCache from "@emotion/cache"

export function getEmotionCache() {
  return createCache({ key: "css" })
}

export default getEmotionCache
