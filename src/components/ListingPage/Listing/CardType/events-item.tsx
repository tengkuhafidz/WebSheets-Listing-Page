import { OutboundLink } from 'gatsby-plugin-google-gtag'
import React from 'react'
import { gtagEventClick } from '../../../../utils/gtag'
import { ItemData, SiteData, Theme } from '../../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  siteData: SiteData
}

const EventsItem: React.FC<Props> = ({ item, theme, siteData }) => {
  const { primary, customShadow, altBackground, text, subtext } = theme

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className={`w-full md:h-full bg-gray-900 rounded-lg object-cover md:col-span-2`}
          src={item.image}
          alt={`Image of ${item.title}`}
        />
      )
    }
    return <></>
  }

  const renderSubtitle = () => {
    const marginBottom = !!item.description ? 'mb-4' : 'mb-16'
    if (!!item.subtitle) {
      return <p className={`${subtext} font-light ${marginBottom}`}>{item.subtitle}</p>
    }
    return <div className={marginBottom}></div>
  }

  const renderDescription = () => {
    if (!!item.description) {
      return <p className={`${text} font-light mb-16`}>{item.description}</p>
    }
    return <></>
  }

  const renderActionButton = () => {
    if (!!item.actionUrl) {
      return (
        <OutboundLink
          className={`py-2 px-8 rounded bg-${primary} text-white text-center md:absolute md:bottom-0 ${
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

  const contentColSpan = !!item.image ? `md:col-span-3` : `md:col-span-5`

  return (
    <div className={`rounded-lg shadow-lg ${altBackground} p-8 grid md:grid-cols-5 gap-3`}>
      {renderImage()}
      <div className={`md:px-6 ${contentColSpan} md:relative`}>
        <div className={`font-bold ${text} text-xl`}>{item.title}</div>
        {renderSubtitle()}
        {renderDescription()}
        {renderActionButton()}
      </div>
    </div>
  )
}

export default EventsItem
