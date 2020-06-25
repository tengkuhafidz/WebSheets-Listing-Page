import React from 'react'
import { ItemData, ListingCardSize, SiteData, Theme } from '../../../../utils/models'
import { getHeightBasedOnCardSize, handleItemClick } from '../../../../utils/util'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const MinimalItem: React.FC<Props> = ({ item, theme, handleOpenModal, siteData }) => {
  const { primary, customShadow, subtext } = theme
  const { listingCardSize } = siteData
  const imageHeight =
    listingCardSize === ListingCardSize.SMALL
      ? getHeightBasedOnCardSize(listingCardSize) - 8
      : getHeightBasedOnCardSize(listingCardSize) - 16

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className={`w-full rounded-lg h-${imageHeight} object-cover ${
            (!!item.description || !!item.actionUrl) && `hover:${customShadow} cursor-pointer`
          }`}
          src={item.image}
          alt={`Image of ${item.title}`}
          onClick={(e) => handleItemClick(e, item, handleOpenModal)}
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

  return (
    <div className={`rounded-lg`}>
      {renderImage()}
      <div className="px-1 py-2">
        <div>
          <p
            className={`font-bold text-${primary} truncate text-xl ${
              (!!item.description || !!item.actionUrl) && `cursor-pointer`
            }`}
            onClick={(e) => handleItemClick(e, item, handleOpenModal)}
          >
            {item.title}
          </p>
        </div>
        {renderSubtitle()}
      </div>
    </div>
  )
}

export default MinimalItem
