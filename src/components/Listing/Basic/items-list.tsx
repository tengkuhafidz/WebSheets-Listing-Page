import React from 'react'
import SingleItem from './single-item'
import { ItemData, Theme, SiteData } from '../../../utils/models'

interface Props {
  items: ItemData[]
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const ItemsList: React.FC<Props> = ({ items, theme, handleOpenModal, siteData }) => {
  const renderItems = () => {
    return items.map((item) => (
      <SingleItem item={item} key={item.id} theme={theme} handleOpenModal={handleOpenModal} siteData={siteData} />
    ))
  }
  return <div className={`grid md:grid-cols-3 gap-3 mt-4`}>{renderItems()}</div>
}

export default ItemsList
