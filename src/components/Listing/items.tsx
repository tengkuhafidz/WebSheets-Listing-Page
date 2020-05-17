import React from 'react'
import ModernItem from './Modern/modern-item'
import { ItemData, Theme, ListingType } from '../../utils/models'

interface Props {
  items: ItemData[]
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  listingType: ListingType
}

const Items: React.FC<Props> = ({ items, theme, handleOpenModal, listingType }) => {
  const renderModernItems = () => {
    return items.map((item) => <ModernItem item={item} key={item.id} theme={theme} handleOpenModal={handleOpenModal} />)
  }

  switch (listingType) {
    case ListingType.MODERN_3:
      return <div className={`grid md:grid-cols-${3} gap-8`}>{renderModernItems()}</div>
    case ListingType.MODERN_4:
      return <div className={`grid md:grid-cols-${4} gap-8`}>{renderModernItems()}</div>
    case ListingType.MODERN_5:
      return <div className={`grid md:grid-cols-${5} gap-8`}>{renderModernItems()}</div>
    default:
      return <div className={`grid md:grid-cols-${4} gap-8`}>{renderModernItems()}</div>
  }
}

export default Items
