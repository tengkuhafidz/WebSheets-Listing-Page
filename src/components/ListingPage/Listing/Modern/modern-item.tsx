import React from 'react'
import { ItemData, Theme } from '../../../../utils/models'
import { handleItemClick } from '../../../../utils/util'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const ModernItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const { customShadow } = theme
  const image = !!item.image ? item.image : ''

  const renderSubtitle = () => {
    if (!!item.subtitle) {
      return <p className={`text-white font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  return (
    <div
      className={`max-w-sm bg-cover bg-center rounded-lg shadow-lg mb-4 text-center py-8 font-bold bg-gray-600 ${
        (!!item.description || !!item.actionUrl) && `hover:${customShadow} cursor-pointer`
      }`}
      style={{ backgroundImage: `url(${image})`, textShadow: `1px 1px #333333` }}
      onClick={(e) => handleItemClick(e, item, handleOpenModal)}
    >
      <div className="px-6 py-4">
        <div className={`font-bold text-white text-xl truncate`}>{item.title}</div>
        {renderSubtitle()}
      </div>
    </div>
  )
}

export default ModernItem
