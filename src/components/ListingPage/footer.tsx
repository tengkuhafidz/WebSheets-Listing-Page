import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import { SiteData, Theme } from '../../utils/models'

interface Props {
  siteData: SiteData
  theme: Theme
}

const Footer: React.FC<Props> = ({ siteData, theme }) => {
  const { facebookUrl, twitterUrl, instagramUrl, footerLabel } = siteData
  const { primary, subtext } = theme

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
            className={`mx-2 hover:text-${primary} cursor-pointer`}
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
    <div className={`py-4 font-light ${subtext}`}>
      <div className="container mx-auto text-gray-600 text-center my-2">{renderSocialMediaLinks()}</div>
      <p className="text-center text-gray-600">{footerLabel}</p>
      <p className="text-center text-gray-600">
        Powered by{' '}
        <a href="https://sheetysite.com" target="_blank" rel="noreferrer" className="hover:font-semibold underline">
          SheetySite
        </a>
      </p>
    </div>
  )
}

export default Footer
