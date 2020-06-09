import React from 'react'
import Navbar from './navbar'
import MinimalBody from './/minimal-body'
import { SiteData, Theme } from '../../../../utils/models'

interface Props {
  siteData: SiteData
  theme: Theme
  isDarkMode: boolean
  handleDarkModeClick: () => void
  isCenter?: boolean
}

const Minimal: React.FC<Props> = ({ siteData, theme, isDarkMode, handleDarkModeClick, isCenter = false }) => {
  return (
    <div>
      <Navbar
        title={siteData.siteName}
        logo={siteData.siteLogo}
        theme={theme}
        isDarkMode={isDarkMode}
        handleDarkModeClick={handleDarkModeClick}
      />
      <MinimalBody siteData={siteData} theme={theme} isCenter={isCenter} />
    </div>
  )
}

export default Minimal
