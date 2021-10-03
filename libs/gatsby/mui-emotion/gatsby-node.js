/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/* eslint-disable import/prefer-default-export */
exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()
  console.info("[top-layout]", program)
}
