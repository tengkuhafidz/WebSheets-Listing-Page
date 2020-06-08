import React from 'react'
import { SiteData, Theme } from '../../../../utils/models'
import ShareButton from '../share-button'

interface Props {
  siteData: SiteData
  theme: Theme
  isCenter: boolean
}

const SimpleBody: React.FC<Props> = ({ siteData, theme, isCenter }) => {
  const { background, text } = theme
  const { heroTitle, heroDescription, heroButtonLabel, heroButtonUrl } = siteData
  return (
    <div className={`container mx-auto px-4 py-8 ${isCenter && 'text-center'}`}>
      <h1 className={`text-4xl text-gray-100`}>{heroTitle}</h1>
      <p className={`font-thin text-xl text-gray-100`}>{heroDescription}</p>
      <div className="my-12">
        <a
          className={`${background} ${text} py-3 px-6 rounded-lg`}
          href={heroButtonUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {heroButtonLabel}
          <i className="fas fa-share ml-2"></i>
        </a>
        <ShareButton siteData={siteData} theme={theme} outlineColor={'gray-100'} />
      </div>
    </div>
  )
}

export default SimpleBody
