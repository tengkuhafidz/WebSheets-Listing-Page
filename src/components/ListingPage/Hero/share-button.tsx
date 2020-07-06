import React, { useState } from 'react'
import { SiteData, Theme } from '../../../utils/models'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { gtagEventClick } from '../../../utils/gtag'

interface Props {
  siteData: SiteData
  theme: Theme
  outlineColor: string
}

const ShareButton: React.FC<Props> = ({ siteData, theme, outlineColor }) => {
  const { siteName } = siteData
  const { text, altBackground, customShadow, primary } = theme

  const hasWindow = typeof window !== 'undefined'

  const siteUrl = hasWindow ? window.location.href : 'https://websheets.co'

  const [isOpen, setIsOpen] = useState(false)

  const navigatorShare = () => {
    navigator.share({
      title: siteName,
      url: siteUrl,
    })
  }

  const customShare = () => {
    setIsOpen(!isOpen)
  }

  const handleShareButtonClick = () => {
    if (navigator.share) {
      navigatorShare()
    } else {
      customShare()
    }
  }

  const renderSharePlatforms = () => {
    const sharePlatforms = [
      {
        name: 'Facebook',
        faClass: 'fa-facebook',
        url: `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`,
      },
      {
        name: 'Twitter',
        faClass: 'fa-twitter',
        url: `https://twitter.com/share?url=${siteUrl}`,
      },
      {
        name: 'Telegram',
        faClass: 'fa-telegram',
        url: `https://telegram.me/share/url?url=${siteUrl}`,
      },
      {
        name: 'Whatsapp',
        faClass: 'fa-whatsapp',
        url: `https://api.whatsapp.com/send?text=${siteUrl}`,
      },
    ]

    return sharePlatforms.map((platform) => (
      <OutboundLink
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block px-4 py-2 ${text} hover:text-${primary}`}
        key={platform.faClass}
        onClick={() => gtagEventClick('social_share', platform.name)}
      >
        <i className={`fab ${platform.faClass} text-xl mr-2`}></i>
        {platform.name}
      </OutboundLink>
    ))
  }

  return (
    <div className="relative mt-4 md:mt-0 md:inline md:w-screen py-4">
      <a
        className={`border border-${outlineColor} text-${outlineColor} py-3 px-6 rounded-lg cursor-pointer`}
        onClick={() => handleShareButtonClick()}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        Share page
        <i className="fas fa-share-alt ml-2"></i>
      </a>
      <div
        className={`${altBackground} rounded rounded-lg mt-2 ${customShadow} absolute md:left-0 w-40 mx-auto text-left ${
          isOpen ? 'block' : 'hidden'
        }`}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        {renderSharePlatforms()}
      </div>
    </div>
  )
}

export default ShareButton
