import React from 'react'
import { ItemData, SiteData, Theme } from '../../../../utils/models'
import { getHeightBasedOnCardSize, handleItemClick } from '../../../../utils/util'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const BasicItem: React.FC<Props> = ({ item, theme, handleOpenModal, siteData }) => {
  const { primary, customShadow, text, subtext, altBackground } = theme
  const imageHeight = getHeightBasedOnCardSize(siteData.listingCardSize)

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className={`w-full rounded-t-lg h-${imageHeight} object-cover`}
          src={item.image}
          alt={`Image of ${item.title}`}
        />
      )
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (!!item.subtitle) {
      return <p className={`${subtext} font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  const renderButton = () => {
    const buttonLabel = !!item.description ? siteData.listingDescriptionButtonLabel : siteData.listingUrlButtonLabel
    if (!!item.description || !!item.actionUrl) {
      return (
        <button
          onClick={(e) => handleItemClick(e, item, handleOpenModal)}
          className={`py-2 px-4 rounded w-full bg-${primary} text-white mt-4 ${
            !!item.description && `hover:${customShadow} cursor-pointer`
          }`}
        >
          {buttonLabel}
        </button>
      )
    }
    return <></>
  }

  return (
    <div className={`rounded-lg shadow-lg text-center ${altBackground} mb-4`}>
      {renderImage()}
      <div className="px-6 py-4">
        <div className={`font-bold ${text} text-xl truncate`}>{item.title}</div>
        {renderSubtitle()}
        {renderButton()}
      </div>
    </div>
  )
}

export default BasicItem
