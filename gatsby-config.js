module.exports = {
  siteMetadata: {
    title: "Skåne Stags Rugby League",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `squad`,
        path: `${__dirname}/src/data/squadlist`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kit`,
        path: `${__dirname}/src/data/kit`,
      },
    },
  ],
}
