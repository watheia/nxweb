const path = require("path")

module.exports = {
  siteMetadata: {
    title: `gatsby-theme-minimal`,
    description: `This is a gatsby application created by Nx.`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: false,
        ref: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "static", "images")
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-theme-minimal`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.join(__dirname, "static", "images", "icon.png")
      }
    },
    {
      resolve: require.resolve("../../libs/gatsby/mui-emotion"),
      options: {}
    },
    {
      resolve: require.resolve("../../libs/gatsby/top-layout"),
      options: {}
    }
  ]
}
