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
        name: `kit`,
        path: `${__dirname}/src/data/kit`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `results`,
        path: `${__dirname}/src/data/results`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `squad`,
        path: `${__dirname}/src/data/squadlist`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `skanestags.news.blog`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        perPage: 10,
        auth: {
          wpcom_app_clientSecret: `Ha7HHas13vM1ft4zPmKXdhUYCAzpxGfncaNIj9eqJ1LA0gBXYbsYYrL8wvioUdRh`,
          wpcom_app_clientId: `65602`,
          wpcom_user: `skanestags`,
          wpcom_pass: `Crusad3rswp`
        }
      },
    },
  ],
}
