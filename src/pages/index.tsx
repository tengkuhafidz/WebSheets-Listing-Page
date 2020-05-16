import React, { useState } from 'react'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Listing from '../components/Listing'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

const Home = ({ data }) => {
  const siteData = data.allGoogleSiteSheet.nodes[0]
  const { sitePrimaryColor } = siteData

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

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <div className={`${theme.background} min-h-screen`}>
      <SEO />
      <Navbar
        title={siteData.siteName}
        theme={theme}
        isDarkMode={isDarkMode}
        handleDarkModeClick={handleDarkModeClick}
      />
      <Hero siteData={siteData} theme={theme} />
      <Listing siteData={siteData} theme={theme} />
      <Footer siteData={siteData} theme={theme} />
    </div>
  )
}

export default Home

export const siteData = graphql`
  query SiteSheetQuery {
    allGoogleSiteSheet {
      nodes {
        heroButtonLabel
        heroButtonUrl
        heroDescription
        heroTitle
        listingType
        siteLogo
        siteName
        footerLabel
        sitePrimaryColor
        instagramUrl
        twitterUrl
        facebookUrl
      }
    }
  }
`
