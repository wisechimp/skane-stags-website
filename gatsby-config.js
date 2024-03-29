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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-103056942-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kit`,
        path: `${__dirname}/src/data/kit/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `results`,
        path: `${__dirname}/src/data/results/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `squad`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/newsstories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icons: [
          {
            src: "/favicons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/favicons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/favicons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/favicons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/favicons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
