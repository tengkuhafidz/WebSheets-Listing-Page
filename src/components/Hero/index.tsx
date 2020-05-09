import React from 'react'
import { SiteData, Theme } from '../../models'
import ShareButton from './share-button'

interface Props {
  siteData: SiteData
  theme: Theme
}

const Hero: React.FC<Props> = ({ siteData, theme }) => {
  const { primary, text, subtext } = theme
  return (
    <div className="container mx-auto px-4">
      <h1 className={`text-4xl ${text}`}>{siteData.heroTitle}</h1>
      <p className={`font-thin text-xl ${subtext} max-w-2xl`}>{siteData.heroDescription}</p>
      <div className="my-8">
        <a className={`bg-${primary} text-gray-100 py-3 px-6 rounded-lg`} href="#main">
          {siteData.ctaButtonLabel}
          <i className="fas fa-info-circle ml-2"></i>
        </a>
        <ShareButton siteData={siteData} theme={theme} />
      </div>
    </div>
  )
}

export default Hero
