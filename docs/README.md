# Overview 🧐

WebSheets Listing Page is an open-sourced Gatsby template that generates listing/directory websites based on Google Sheets data.

## Features

- Google Sheets as Content Management System (CMS)
- Fast loading static site
- Offline capable Progressive Web App (PWA)
- SEO Optimised
- Google analytics configured
- Mobile responsive design
- Dark/light mode
- Share-to-socials button
- Multiple layout combinations
- Call to action buttons

## Sponsor Development

If you find this project helpful in any way, you can support my coffee intake in making this at https://www.buymeacoffee.com/sohafidz. ☕️

<style>.bmc-button img{height: 34px !important;width: 35px !important; box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 15px 7px 10px !important;line-height: 35px !important;height:51px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#049663 !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 15px 7px 10px !important;font-size: 22px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/sohafidz"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px;font-size:28px !important;">Buy me a coffee</span></a>

# Getting Started 🚀

## Project Requirements

1. [Node](https://nodejs.org/en/download/)
2. [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli) `npm install -g gatsby-cli`

## Preparing the Project

### Step 1: Preparing your Sheets data

1. Make a copy of this [google sheets template](https://docs.google.com/spreadsheets/d/17c2Fy1D5k2P7BkjmJoFIY_eohHBMM806_lHCYKzRtqM/copy#gid=72026853)
2. Change the privacy setting to allow anyone with the link to view
   - Click the **share button** and change the privacy to `Anyone on the Internet with this link can view`
3. Fill in the google sheets with the general site information (on the `site` tab) and details of items you want to list \*on the `listing` tab)
   - The tab names (`site`, `listing`) should **NOT** be changed.

### Step 2: Preparing your Google API key

1. Create a [Google API project](https://console.developers.google.com/projectcreate)
2. Enable [Google Sheets API](https://console.developers.google.com/apis/library/sheets.googleapis.com?project=websheets&folder&organizationId) for that project
   - Click the **ENABLE** button and select the project that you created
3. Create the [Google API key](https://console.developers.google.com/apis/credentials) for that project
   - Click **CREATE CREDENTIALS** button and select **API key**

### Step 3: Preparing the Repository

1. Run `gatsby new [YOUR_SITE_NAME] tengkuhafidz/WebSheets-Listing-Page`
2. Create `.env` file on the project root and add the following environment variables
   - `GATSBY_GOOGLE_CREDENTIALS`="Google-Api-Key-With-Quatations"
   - `GATSBY_SHEET_URL`="Google-Sheets-URL-With-Quotations"

## Running the Project

### Running on Dev Environment

1. Run `npm start`
   - Your site will run at `http://localhost:8000`
   - You graphiql will run at`http://localhost:8000/___graphql`

### Running on Prod Environment

1. Run `npm run build`
2. Run `npm run serve`
   - Your site will run at `http://localhost:9000`

### Troubleshooting

Having an issue? The following are common setup mistakes that might have caused it. Please ensure that the following are set properly.

- Google Sheets privacy settings **MUST** minimally be set to `Anyone on the Internet with this link can view`
- [Google Sheets API](https://console.developers.google.com/apis/library/sheets.googleapis.com) **MUST** be `ENABLED` for the project that you're using the API key of
- The value of environment variables **MUST** be in between double quotations
- Ensure that you have a `.env` file on your project root with the following params: `GATSBY_GOOGLE_CREDENTIALS`, `GATSBY_SHEET_URL`

# Underlying Tech 🦾

## Main Frameworks & API

- Gatsby
- Typescript
- TailwindCSS
- Google Sheets API

*With prettier, eslint, and husky configured out of the box.*

## Folder Structure

```
   .
   ├── node_modules
   ├── src
   ├── static
   ├── .gitignore
   ├── .eslintrc.js
   ├── .prettierrc.js
   ├── gatsby-browser.js
   ├── gatsby-config.js
   ├── LICENSE
   ├── yarn-lock.json
   ├── package.json
   ├── tailwind.config.js
   ├── postcss.config.js
   └── README.md
```

# About

## Contact

You may contact me via email at [ha@fidz.dev](mailto:ha@fidz.dev).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
