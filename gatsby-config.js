require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'GatsbyTSTW',
    titleTemplate: '%s | GatsbyTSTW',
    description: 'Starter boilerplate for Gatsby with Typescript and TailwindCSS',
    author: 'Fidz.Dev',
    url: 'https://fidz.dev', // No trailing slash allowed!
    image: '/app-banner.png', // Path to your image you placed in the 'static' folder
    twitterUsername: 'sohafidz',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyTSTW`,
        short_name: `GatsbyTSTW`,
        start_url: `/`,
        background_color: `#F7FAFC`,
        theme_color: `#2B6CB0`,
        display: `standalone`,
        icon: `static/app-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: process.env.GATSBY_SHEET_ID,
        apiKey: process.env.GATSBY_GOOGLE_CREDENTIALS,
      },
    },
  ],
}
