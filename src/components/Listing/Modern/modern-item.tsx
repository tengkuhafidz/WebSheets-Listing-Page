import React from 'react'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const ModernItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { customShadow } = theme
  const image = hasProperty(item.image) ? item.image : ''

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className={`font-bold text-white text-xl truncate`}>{item.title}</div>
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (hasProperty(item.subtitle)) {
      return <p className={`text-white font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  return (
    <div
      className={`max-w-sm bg-cover bg-center rounded-lg shadow-lg mb-8 text-center py-8 font-bold ${
        hasProperty(item.description) && `hover:${customShadow} cursor-pointer`
      }`}
      style={{ backgroundImage: `url(${image})`, textShadow: `1px 1px #333333` }}
      onClick={(e) => handleOpenModal(e, item)}
    >
      <div className="px-6 py-4">
        {renderTitle()}
        {renderSubtitle()}
      </div>
    </div>
  )
}

export default ModernItem
