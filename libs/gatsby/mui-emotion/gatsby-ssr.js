/* eslint-disable import/prefer-default-export */

const { CacheProvider } = require("@emotion/react")
const createEmotionServer = require("@emotion/server/create-instance")
const { renderToString } = require("react-dom/server")
const getEmotionCache = require("./src/getEmotionCache")

exports.replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = getEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  const emotionStyles = extractCriticalToChunks(
    renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>)
  )

  setHeadComponents(
    emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  )

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html)
}
