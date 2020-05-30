import React from 'react'
import { HeroType, SiteData, Theme } from '../../utils/models'
import Minimal from './Minimal'
import Simple from './Simple'

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
    case HeroType.SIMPLE:
      return (
        <Simple siteData={siteData} theme={theme} isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      )
    case HeroType.SIMPLE_CENTER:
      return (
        <Simple
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
