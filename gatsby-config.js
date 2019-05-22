require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
          wpcom_app_clientSecret: process.env.WPCOM_APP_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WPCOM_APP_CLIENTID,
          wpcom_user: process.env.WPCOM_USERNAME,
          wpcom_pass: process.env.WPCOM_PASSWORD
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Skane Stags Rugby League",
        short_name: "Skane Stags RL",
        start_url: "/",
        background_color: "#ff1500",
        theme_color: "#333333",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ]
}
