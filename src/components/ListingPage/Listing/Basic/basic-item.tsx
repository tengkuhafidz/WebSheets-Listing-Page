import React from 'react'
import { ItemData, Theme, SiteData } from '../../../../utils/models'
import { gtagEventClick } from '../../../../utils/gtag'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const BasicItem: React.FC<Props> = ({ item, theme, handleOpenModal, siteData }) => {
  const { primary, customShadow } = theme

  const renderImage = () => {
    if (!!item.image) {
      return <img className="w-full rounded-t-lg h-48 object-cover" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (!!item.subtitle) {
      return <p className={`text-gray-600 font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  const handleButtonClick = (e, item: ItemData) => {
    if (!!item.description) {
      gtagEventClick('open_item_modal', item.title)
      handleOpenModal(e, item)
    } else if (!!item.actionUrl && window !== undefined) {
      gtagEventClick('click_item_action', item.actionUrl)
      window.open(item.actionUrl, '_blank')
    }
  }

  const renderButton = () => {
    const buttonLabel = !!item.description ? siteData.listingDescriptionButtonLabel : siteData.listingUrlButtonLabel
    if (!!item.description || !!item.actionUrl) {
      return (
        <button
          onClick={(e) => handleButtonClick(e, item)}
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
    <div className={`rounded-lg shadow-lg text-center bg-white mb-8`}>
      {renderImage()}
      <div className="px-6 py-4">
        <div className={`font-bold text-gray-800 text-xl truncate`}>{item.title}</div>
        {renderSubtitle()}
        {renderButton()}
      </div>
    </div>
  )
}

export default BasicItem
