module.exports = {
  siteMetadata: {
    title: `Watheia Labs Corporate`,
    description: `This is a gatsby application created by Nx.`
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: require.resolve("../gatsby-theme-diy"),
      options: {
        contentPath: `${__dirname}/content/posts`,
        dataPath: `${__dirname}/content/data`
      }
    }
  ]
}
