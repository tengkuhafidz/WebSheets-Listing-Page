import React from 'react'
import { SiteData, Theme } from '../../../../utils/models'
import Navbar from './navbar'
import SimpleBody from './simple-body'

interface Props {
  siteData: SiteData
  theme: Theme
  isDarkMode: boolean
  handleDarkModeClick: () => void
  isCenter?: boolean
}

const Simple: React.FC<Props> = ({ siteData, theme, isDarkMode, handleDarkModeClick, isCenter = false }) => {
  return (
    <div className={`bg-${isDarkMode ? theme.secondary : theme.primary}`}>
      <Navbar
        title={siteData.siteName}
        logo={siteData.siteLogo}
        theme={theme}
        isDarkMode={isDarkMode}
        handleDarkModeClick={handleDarkModeClick}
      />
      <SimpleBody siteData={siteData} theme={theme} isCenter={isCenter} />
    </div>
  )
}

export default Simple
