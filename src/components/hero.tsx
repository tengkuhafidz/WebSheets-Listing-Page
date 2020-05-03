import React from 'react'

interface Props {
  siteData: {
    ctaButtonLabel: string
    heroDescription: string
    heroTitle: string
    listLabel: string
    siteLogo: string
    siteName: string
  }
}

const Hero: React.FC<Props> = ({ siteData }) => (
  <div className="container mx-auto">
    <h1 className="text-4xl">{siteData.heroTitle}</h1>
    <p className="font-light max-w-2xl">{siteData.heroDescription}</p>
    <div className="my-8">
      <a className="bg-indigo-800 text-sm text-white py-3 px-6 rounded-lg" href="#main">
        {siteData.ctaButtonLabel}
      </a>
    </div>
  </div>
)

export default Hero
