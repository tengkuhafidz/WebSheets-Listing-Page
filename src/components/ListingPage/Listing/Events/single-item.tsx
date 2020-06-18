import React from 'react'
import { ItemData, Theme, SiteData } from '../../../../utils/models'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { gtagEventClick } from '../../../../utils/gtag'

interface Props {
  item: ItemData
  theme: Theme
  siteData: SiteData
}

const SingleItem: React.FC<Props> = ({ item, theme, siteData }) => {
  const { primary, customShadow } = theme

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className="w-full md:max-h-full bg-gray-900 rounded-lg object-cover md:col-span-2"
          src={item.image}
          alt={`Image of ${item.title}`}
        />
      )
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (!!item.subtitle) {
      return <p className={`text-gray-600 font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  const renderDescription = () => {
    if (!!item.subtitle) {
      return <p className={`text-gray-600 font-light mt-4 mb-8`}>{item.description}</p>
    }
    return <></>
  }

  const renderActionButton = () => {
    if (!!item.actionUrl) {
      return (
        <OutboundLink
          className={`py-2 px-16 rounded bg-${primary} hidden text-white text-center ${
            !!item.actionUrl && `hover:${customShadow} cursor-pointer block md:inline`
          }`}
          href={item.actionUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => gtagEventClick('click_item_action', item.actionUrl)}
        >
          {siteData.listingUrlButtonLabel}
        </OutboundLink>
      )
    }
    return <></>
  }

  return (
    <div className={`rounded-lg shadow-lg bg-white mb-8 p-8 grid md:grid-cols-5 gap-3`}>
      {renderImage()}
      <div className="px-6 md:col-span-3">
        <div className={`font-bold text-gray-800 text-xl truncate`}>{item.title}</div>
        {renderSubtitle()}
        {renderDescription()}
        {renderActionButton()}
      </div>
    </div>
  )
}

export default SingleItem
