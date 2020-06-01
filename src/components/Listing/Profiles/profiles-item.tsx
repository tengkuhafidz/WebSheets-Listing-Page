import React from 'react'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const ProfileItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return (
        <img
          className="w-full rounded-t-lg object-cover"
          style={{ height: 300 }}
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
      return <p className={`text-gray-800 mt-4`}>{item.description}</p>
    }
    return <></>
  }

  return (
    <div
      className={`max-w-sm rounded-lg shadow-lg bg-white mb-8 ${
        hasProperty(item.actionUrl) && `hover:${customShadow} cursor-pointer`
      }`}
      onClick={(e) => handleOpenModal(e, item)}
    >
      {renderImage()}
      <div className="px-6 py-6">
        {renderTitle()}
        {renderSubtitle()}
        {renderDescription()}
      </div>
    </div>
  )
}

export default ProfileItem
