import React from 'react'
import { SiteData, Theme } from '../../../utils/models'
import ShareButton from '../share-button'

interface Props {
  siteData: SiteData
  theme: Theme
  isCenter: boolean
}

const MinimalBody: React.FC<Props> = ({ siteData, theme, isCenter }) => {
  const { primary, text, subtext } = theme
  const { heroTitle, heroDescription, heroButtonLabel, heroButtonUrl } = siteData

  return (
    <div className={`container mx-auto px-4 py-8 ${isCenter && 'text-center'}`}>
      <h1 className={`text-4xl ${text}`}>{heroTitle}</h1>
      <p className={`font-thin text-xl ${subtext}`}>{heroDescription}</p>
      <div className="my-12">
        <a
          className={`bg-${primary} text-gray-100 py-3 px-6 rounded-lg`}
          href={heroButtonUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {heroButtonLabel}
          <i className="fas fa-share ml-2"></i>
        </a>
        <ShareButton siteData={siteData} theme={theme} outlineColor={primary} />
      </div>
    </div>
  )
}

export default MinimalBody
