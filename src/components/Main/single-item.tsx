import React from 'react'
import { ItemData } from '../../models'

interface Props {
  item: ItemData
  brandColor: string
  handleOpenModal: (e, item: ItemData) => void
}

const SingleItem: React.FC<Props> = ({ item, brandColor, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className="font-bold text-gray-100 text-xl mb-2">{item.title}</div>
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (hasProperty(item.subtitle)) {
      return <p className="text-gray-400 font-light text-base">{item.subtitle}</p>
    }
    return <></>
  }
  return (
    <div
      className={`max-w-sm mt-8 rounded-lg shadow-lg bg-${brandColor}-800 ${
        hasProperty(item.url) && 'hover:shadow-2xl cursor-pointer'
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
