require('dotenv').config()

/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'WebSheets',
    titleTemplate: '%s | WebSheets',
    description: 'Create listing websites with Google Sheets data',
    author: 'sohafidz',
    url: 'https://websheets.co', // No trailing slash allowed!
    image: '/app-banner.png', // Path to your image you placed in the 'static' folder
    twitterUsername: 'sohafidz',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
        apiKey: process.env.GATSBY_GOOGLE_CREDENTIALS,
        spreadsheetUrl: process.env.GATSBY_SHEET_URL,
        tabName: 'site',
        cellRange: 'A1:B23',
        majorDimension: 'COLUMNS',
      },
    },
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
        apiKey: process.env.GATSBY_GOOGLE_CREDENTIALS,
        spreadsheetUrl: process.env.GATSBY_SHEET_URL,
        tabName: 'listing',
        cellRange: 'A1:H1000',
        majorDimension: 'ROWS',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_GA_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WebSheets`,
        short_name: `WebSheets`,
        start_url: `/`,
        background_color: `#049663`,
        theme_color: `#049663`,
        display: `standalone`,
        icon: `static/app-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
