import { graphql } from 'gatsby'
import React, { useState } from 'react'
import Footer from '../components/ListingPage/footer'
import Hero from '../components/ListingPage/Hero'
import Listing from '../components/ListingPage/Listing'
import SEO from '../components/ListingPage/seo'

const Home = ({ data }) => {
  const siteData = data.allGoogleSiteSheet.nodes[0]
  const rawListingData = data.allGoogleListingSheet.nodes

  const formatListingData = () => {
    return rawListingData.map((item) => {
      if (typeof item.tags === 'string') {
        item.tags = item.tags.split(', ')
      }
      return item
    })
  }

  const listingData = formatListingData()

  const { sitePrimaryColor, siteName, siteLogo, heroTitle, heroDescription, darkMode } = siteData

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
  const defaultDarkMode = darkMode === 'TRUE'
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode)

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <div className={`${theme.background} min-h-screen`}>
      <SEO image={siteLogo} title={siteName} description={`${heroTitle} - ${heroDescription}`} />
      <Hero siteData={siteData} theme={theme} isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      <Listing siteData={siteData} listingData={listingData} theme={theme} />
      <Footer siteData={siteData} theme={theme} />
    </div>
  )
}

export default Home

export const siteData = graphql`
  query SiteSheetQuery {
    allGoogleSiteSheet {
      nodes {
        heroType
        heroTitle
        heroDescription
        heroButtonUrl
        heroButtonLabel
        darkMode
        listingType
        listingDescriptionButtonLabel
        listingUrlButtonLabel
        siteLogo
        siteName
        footerLabel
        sitePrimaryColor
        instagramUrl
        twitterUrl
        facebookUrl
      }
    }
    allGoogleListingSheet {
      nodes {
        id
        title
        actionUrl
        tags
        itemId
        subtitle
        description
        image
      }
    }
  }
`
