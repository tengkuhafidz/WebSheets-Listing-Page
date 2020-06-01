import React from 'react'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const CompactItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { altBackground, text, subtext, customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg h-24 object-cover" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className={`font-bold ${text} text-xl truncate`}>{item.title}</div>
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (hasProperty(item.subtitle)) {
      return <p className={`${subtext} font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  return (
    <div
      className={`max-w-sm rounded-lg shadow-lg mb-8 ${altBackground} ${
        hasProperty(item.actionUrl) && `hover:${customShadow} cursor-pointer`
      }`}
      onClick={(e) => handleOpenModal(e, item)}
    >
      {renderImage()}
      <div className="px-6 py-4">
        {renderTitle()}
        {renderSubtitle()}
      </div>
    </div>
  )
}

export default CompactItem
