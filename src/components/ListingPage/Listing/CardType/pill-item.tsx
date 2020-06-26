import React from 'react'
import { ItemData, Theme } from '../../../../utils/models'
import { handleItemClick } from '../../../../utils/util'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const PillItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const { customShadow, altBackground, text, subtext } = theme

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className={`w-full h-full bg-gray-900 rounded-full object-cover col-span-2`}
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
    return <div></div>
  }

  return (
    <div
      className={`rounded-full shadow-lg ${altBackground} p-2 grid grid-cols-5 gap-3 ${
        (!!item.description || !!item.actionUrl) && `hover:${customShadow} cursor-pointer`
      }`}
      onClick={(e) => handleItemClick(e, item, handleOpenModal)}
    >
      {renderImage()}
      <div className={`md:py-4 col-span-3 md:relative ${!item.image && 'ml-8 md:ml-12'}`}>
        <div className={`font-bold ${text} text-xl truncate`}>{item.title}</div>
        {renderSubtitle()}
      </div>
    </div>
  )
}

export default PillItem
