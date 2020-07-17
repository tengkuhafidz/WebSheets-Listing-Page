import React from 'react'
import { Theme, HeroType } from '../../../utils/models'

interface Props {
  title: string
  logo: string
  theme: Theme
  isDarkMode: boolean
  heroType: HeroType
  handleDarkModeClick: () => void
}

const Navbar: React.FC<Props> = ({ title, logo, theme, isDarkMode, heroType, handleDarkModeClick }) => {
  const darkModeIcon = isDarkMode ? 'fa-sun' : 'fa-moon'

  const textColor =
    heroType === HeroType.MINIMAL || heroType === HeroType.MINIMAL_CENTER ? `text-${theme.primary}` : `text-gray-100`

  const renderImage = () => {
    if (!!logo) {
      return <img src={logo} className="h-8 mr-2 rounded" />
    }
    return <></>
  }

  const renderMinimalBar = () => {
    if (heroType === HeroType.MINIMAL || heroType === HeroType.MINIMAL_CENTER) {
      return <div className={`bg-${theme.primary} h-2`}></div>
    }
    return <></>
  }

  return (
    <div>
      {renderMinimalBar()}
      <nav className={`container mx-auto py-8 flex`}>
        <div className="px-4 flex items-center">
          {renderImage()}
          <span className={`font-bold text-lg cursor-default ${textColor}`}>{title}</span>
        </div>
        <div className="flex-grow"></div>
        <div className={`flex px-4 ${textColor}`}>
          <i className={`fas ${darkModeIcon} text-2xl cursor-pointer`} onClick={() => handleDarkModeClick()}></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
