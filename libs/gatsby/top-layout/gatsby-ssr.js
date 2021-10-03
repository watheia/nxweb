const TopLayout = require("./src/TopLayout")

exports.wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
