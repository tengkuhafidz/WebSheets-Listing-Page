import React from 'react'
import Navbar from './navbar'
import Minimal from './Minimal'
import { SiteData, Theme, HeroType } from '../../utils/models'

interface Props {
  siteData: SiteData
  theme: Theme
  isDarkMode: boolean
  handleDarkModeClick: () => void
}

const Hero: React.FC<Props> = ({ siteData, theme, isDarkMode, handleDarkModeClick }) => {
  const { heroType } = siteData

  switch (heroType) {
    case HeroType.MINIMAL:
      return (
        <Minimal siteData={siteData} theme={theme} isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      )
    case HeroType.MINIMAL_CENTER:
      return (
        <Minimal
          siteData={siteData}
          theme={theme}
          isDarkMode={isDarkMode}
          handleDarkModeClick={handleDarkModeClick}
          isCenter
        />
      )
    default:
      return (
        <Minimal siteData={siteData} theme={theme} isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      )
  }
}

export default Hero
