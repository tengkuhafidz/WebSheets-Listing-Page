import React from 'react'
import { ItemData, Theme, SiteData } from '../../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  siteData: SiteData
}

const SingleItem: React.FC<Props> = ({ item, theme, siteData }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { primary, customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
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

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className={`font-bold text-gray-800 text-xl truncate`}>{item.title}</div>
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (hasProperty(item.subtitle)) {
      return <p className={`text-gray-600 font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  const renderDescription = () => {
    if (hasProperty(item.subtitle)) {
      return <p className={`text-gray-600 font-light mt-4 mb-8`}>{item.description}</p>
    }
    return <></>
  }

  return (
    <div className={`rounded-lg shadow-lg bg-white mb-8 p-8 grid md:grid-cols-5 gap-3`}>
      {renderImage()}
      <div className="px-6 md:col-span-3">
        {renderTitle()}
        {renderSubtitle()}
        {renderDescription()}
        <a
          className={`py-2 px-16 rounded bg-${primary} hidden text-white text-center ${
            hasProperty(item.actionUrl) && `hover:${customShadow} cursor-pointer block md:inline`
          }`}
          href={item.actionUrl}
          target="_blank"
          rel="noreferrer"
        >
          {siteData.listingUrlButtonLabel}
        </a>
      </div>
    </div>
  )
}

export default SingleItem
