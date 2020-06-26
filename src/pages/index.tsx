import { graphql } from 'gatsby'
import React, { useState } from 'react'
import Footer from '../components/ListingPage/footer'
import Hero from '../components/ListingPage/Hero'
import Listing from '../components/ListingPage/Listing'
import SEO from '../components/ListingPage/seo'
import { transformListingData, transformSiteData } from '../utils/transformers'
import { ItemData, SiteData } from '../utils/models'
import BackToTop from '../components/ListingPage/back-to-top'

const Home = ({ data }) => {
  const listingData: ItemData[] = transformListingData(data.allListingSheetsData.nodes)
  const siteData: SiteData = transformSiteData(data.siteSheetsData)

  const { sitePrimaryColor, heroTitle, heroDescription, darkMode } = siteData as SiteData

  const getMatchedColor = (color) => {
    switch (color) {
      case 'peach':
        return 'red'
      case 'brown':
        return 'yellow'
      default:
        return color
    }
  }

  const getMatchedColorTone = (tone, colorTones) => {
    switch (tone) {
      case 'light':
        return colorTones.light
      case 'dark':
        return colorTones.dark
      default:
        return colorTones.base
    }
  }

  const getColorTones = (color: string): { light: number; base: number; dark: number } => {
    switch (color) {
      case 'teal':
        return { light: 500, base: 600, dark: 700 }
      case 'pink':
        return { light: 300, base: 400, dark: 600 }
      case 'blue':
        return { light: 400, base: 600, dark: 800 }
      case 'green':
        return { light: 400, base: 600, dark: 800 }
      case 'purple':
        return { light: 400, base: 600, dark: 800 }
      case 'peach':
        return { light: 300, base: 400, dark: 500 }
      case 'gray':
        return { light: 500, base: 700, dark: 800 }
      case 'indigo':
        return { light: 400, base: 600, dark: 800 }
      case 'red':
        return { light: 600, base: 700, dark: 800 }
      case 'orange':
        return { light: 400, base: 500, dark: 600 }
      case 'brown':
        return { light: 700, base: 800, dark: 900 }
      default:
        return { light: 400, base: 600, dark: 800 }
    }
  }

  const [selectedTone, selectedColor] = sitePrimaryColor.split('-')
  const matchedColor = getMatchedColor(selectedColor)

  const getPrimaryColor = () => {
    const colorTones = getColorTones(selectedColor)
    const matchedColorTone = getMatchedColorTone(selectedTone, colorTones)
    return `${matchedColor}-${matchedColorTone}`
  }

  const primaryColor = getPrimaryColor()

  const lightTheme = {
    primary: primaryColor,
    secondary: `${matchedColor}-900`,
    text: 'text-gray-800',
    subtext: 'text-gray-600',
    altText: 'text-white',
    altSubtext: 'text-gray-400',
    background: 'bg-gray-100',
    altBackground: 'bg-white',
    customShadow: 'shadow-xl',
  }

  const darkTheme = {
    primary: `${matchedColor}-800`,
    secondary: `${matchedColor}-900`,
    text: 'text-white',
    subtext: 'text-gray-400',
    altText: 'text-gray-800',
    altSubtext: 'text-gray-700',
    background: 'bg-gray-900',
    altBackground: 'bg-gray-600',
    customShadow: 'shadow-white',
  }

  const [isDarkMode, setIsDarkMode] = useState(darkMode)

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  const renderBackToTop = () => {
    if (typeof window !== 'undefined') {
      return <BackToTop />
    }
  }

  return (
    <div className={`${theme.background} min-h-screen`}>
      <SEO title={heroTitle} description={heroDescription} />
      <Hero siteData={siteData} theme={theme} isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      <Listing siteData={siteData} listingData={listingData} theme={theme} />
      <Footer siteData={siteData} theme={theme} />
      {renderBackToTop()}
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
      listingCategoryType
      listingCardType
      listingCardSize
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
        categories
        subtitle
        description
        image
        hide
      }
    }
  }
`
