import React from 'react'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const SingleItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { altBackground, text, subtext, customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg h-32 object-cover" src={item.image} alt={`Image of ${item.title}`} />
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
      className={`max-w-sm mt-8 rounded-lg shadow-lg ${altBackground} ${
        hasProperty(item.url) && `hover:${customShadow} cursor-pointer`
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

export default SingleItem
