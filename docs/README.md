# Overview

WebSheets Listing Page is an open-sourced Gatsby template that generates listing websites based on Google Sheets data.

## Support & services

**Buy me a coffee:** If you find this project helpful in any way, please do support my coffee intake in making this at https://www.buymeacoffee.com/sohafidz. Any amount is truly appreciated. 

**Let me help you:**If you don't want the hassle of going through the docs and/or code, you can get my services to help at https://services.websheets.co 

# Getting Started 🚀

## Project Requirements 

1. [Node](https://nodejs.org/en/download/)
2. [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli) `npm install -g gatsby-cli`

## Preparing the Project 

### Preparing your Sheets data

1. Make a copy of this [google sheets template](https://docs.google.com/spreadsheets/d/1S-S1dzVsPlbYtYTq_jiXCcVYKf75wFlGxB2fKkdVc7w/copy#gid=1818216905)
2. Change the privacy setting to allow anyone with the link to view
   - Click the **share button** and change the privacy to `Anyone on the Internet with this link can view`
3. Fill in the google sheets with the general site information (on the `site` tab) and details of items you want to list *on the `listing` tab)
   - The tab names (`site`, `listing`) should **NOT** be changed.

### Preparing your Google API key

1. Create a [Google API project](https://console.developers.google.com/projectcreate)
2. Enable [Google Sheets API](https://console.developers.google.com/apis/library/sheets.googleapis.com?project=websheets&folder&organizationId) for that project
   - Click the **ENABLE** button and select the project that you created
3. Create the [Google API key](https://console.developers.google.com/apis/credentials) for that project
   - Click **CREATE CREDENTIALS** button and select **API key**

### Preparing the Repo

1. Clone [this repo](https://github.com/tengkuhafidz/WebSheets)  `git clone https://github.com/tengkuhafidz/websheets.git`
2. Run `npm i` to install dependencies
3. Create `.env.development` file on the project root and add the following environment variables
   - `GATSBY_GOOGLE_CREDENTIALS`="Google-Api-Key-With-Quatations"
   - `GATSBY_SHEET_URL`="Google-Sheets-URL-With-Quotations"
4. Create `.env.production` file on the project root and **copy paste** the environment variables from `.env.development`

## Running the Project 🚀

### Running on Dev Environment

1. Run `npm start`
   - Your site will run at `http://localhost:8000`
   - You graphiql will run at`http://localhost:8000/___graphql`

### Running on Prod Environment

1. Run `npm run build`
2. Run `npm run serve`
   - Your site will run at `http://localhost:9000`

## Troubleshooting

Having an issue? The following are common setup mistakes that might have caused it. Please ensure that the following are set properly.

- Google Sheets privacy settings **MUST** minimally be set to `Anyone on the Internet with this link can view`
- [Google Sheets API](https://console.developers.google.com/apis/library/sheets.googleapis.com) **MUST** be `ENABLED` for the project that you're using the API key of
- The value of environment variables **MUST** be in between double quotations

# Underlying Tech

## Frameworks
- Gatsby
- Typescript
- TailwindCSS
- Sheets API

## Configurations
- SEO and site metadata
- PWA and offline capabilities
- Prettier, eslint, husky

## Structure
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