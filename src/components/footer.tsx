import React from 'react'
import { SiteData } from '../models'
import '@fortawesome/fontawesome-free/css/all.css'

interface Props {
  siteData: SiteData
}

const Footer: React.FC<Props> = ({ siteData }) => {
  const { facebookUrl, twitterUrl, instagramUrl, footerLabel, brandColor } = siteData

  const renderSocialMediaLinks = () => {
    const socialMedias = [
      {
        faClass: 'fa-facebook',
        url: facebookUrl,
      },
      {
        faClass: 'fa-twitter',
        url: twitterUrl,
      },
      {
        faClass: 'fa-instagram',
        url: instagramUrl,
      },
    ]

    return socialMedias.map((socialMedia) => {
      if (socialMedia.url) {
        return (
          <a
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-2 hover:text-${brandColor}-800 cursor-pointer`}
            key={socialMedia.faClass}
          >
            <i className={`fab ${socialMedia.faClass} text-2xl`}></i>
          </a>
        )
      }
      return <></>
    })
  }
  return (
    <div className="py-4 font-light">
      <div className="container mx-auto text-gray-600 text-center my-2">{renderSocialMediaLinks()}</div>
      <p className="text-center text-gray-600">{footerLabel}</p>
      <p className="text-center text-gray-600">Powered by SheetySite</p>
    </div>
  )
}

export default Footer
