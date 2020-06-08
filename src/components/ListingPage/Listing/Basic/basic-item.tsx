import React from 'react'
import { ItemData, Theme, SiteData } from '../../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const BasicItem: React.FC<Props> = ({ item, theme, handleOpenModal, siteData }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { primary, customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg h-48 object-cover" src={item.image} alt={`Image of ${item.title}`} />
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

  return (
    <div className={`max-w-sm rounded-lg shadow-lg text-center bg-white mb-8`}>
      {renderImage()}
      <div className="px-6 py-4">
        {renderTitle()}
        {renderSubtitle()}
        <button
          onClick={(e) => handleOpenModal(e, item)}
          className={`py-2 px-4 rounded w-full bg-${primary} text-white mt-4 ${
            hasProperty(item.description) && `hover:${customShadow} cursor-pointer`
          }`}
        >
          {siteData.listingDescriptionButtonLabel}
        </button>
      </div>
    </div>
  )
}

export default BasicItem
