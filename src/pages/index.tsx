import { graphql } from 'gatsby'
import React, { useState } from 'react'
import Footer from '../components/ListingPage/footer'
import Hero from '../components/ListingPage/Hero'
import Listing from '../components/ListingPage/Listing'
import SEO from '../components/ListingPage/seo'
import { transformListingData, transformSiteData } from '../transformers'
import { ItemData, SiteData } from '../utils/models'

const Home = ({ data }) => {
  const listingData: ItemData[] = transformListingData(data.allListingSheetsData.nodes)
  const siteData: SiteData = transformSiteData(data.siteSheetsData)

  const { siteName, sitePrimaryColor, heroTitle, heroDescription, darkMode } = siteData

  const lightTheme = {
    primary: `${sitePrimaryColor}-600`,
    secondary: `${sitePrimaryColor}-800`,
    text: 'text-gray-800',
    subtext: 'text-gray-600',
    altText: 'text-white',
    altSubtext: 'text-gray-400',
    background: 'bg-gray-100',
    altBackground: 'bg-gray-400',
    customShadow: 'shadow-xl',
  }

  const darkTheme = {
    primary: `${sitePrimaryColor}-600`,
    secondary: `${sitePrimaryColor}-800`,
    text: 'text-white',
    subtext: 'text-gray-400',
    altText: 'text-gray-800',
    altSubtext: 'text-gray-600',
    background: 'bg-gray-900',
    altBackground: 'bg-gray-600',
    customShadow: 'shadow-white',
  }

  const [isDarkMode, setIsDarkMode] = useState(darkMode)

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <div className={`${theme.background} min-h-screen`}>
      <SEO title={siteName} description={`${heroTitle} - ${heroDescription}`} />
      <Hero siteData={siteData} theme={theme} isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      <Listing siteData={siteData} listingData={listingData} theme={theme} />
      <Footer siteData={siteData} theme={theme} />
    </div>
  )
}

export default Home

export const siteData = graphql`
  query SiteSheetQuery {
    siteSheetsData {
      siteName
      siteLogo
      sitePrimaryColor
      darkMode
      heroType
      heroTitle
      heroDescription
      heroButtonLabel
      heroButtonUrl
      socialShareButton
      listingType
      listingDescriptionButtonLabel
      listingUrlButtonLabel
      footerLabel
      facebookUrl
      instagramUrl
      twitterUrl
    }
    allListingSheetsData {
      nodes {
        title
        actionUrl
        tags
        subtitle
        description
        image
      }
    }
  }
`
