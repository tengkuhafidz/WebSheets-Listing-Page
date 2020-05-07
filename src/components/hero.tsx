import React from 'react'
import { SiteData } from '../models'

interface Props {
  siteData: SiteData
}

const Hero: React.FC<Props> = ({ siteData }) => (
  <div className="container mx-auto px-4">
    <h1 className="text-4xl text-gray-800">{siteData.heroTitle}</h1>
    <p className="font-light text-gray-800 max-w-2xl">{siteData.heroDescription}</p>
    <div className="my-8">
      <a className={`bg-${siteData.brandColor}-800 text-sm text-gray-100 py-3 px-6 rounded-lg`} href="#main">
        {siteData.ctaButtonLabel}
      </a>
      <a
        className={`border border-${siteData.brandColor}-800 text-${siteData.brandColor}-800 text-sm text-gray-100 py-3 px-6 rounded-lg ml-4`}
        href="#main"
      >
        Share page
      </a>
    </div>
  </div>
)

export default Hero
