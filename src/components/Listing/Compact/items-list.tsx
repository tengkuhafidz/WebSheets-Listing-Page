import React from 'react'
import SingleItem from './single-item'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  items: ItemData[]
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const ItemsList: React.FC<Props> = ({ items, theme, handleOpenModal }) => {
  const renderItems = () => {
    return items.map((item) => <SingleItem item={item} key={item.id} theme={theme} handleOpenModal={handleOpenModal} />)
  }
  return <div className={`grid md:grid-cols-5 gap-3 mt-4`}>{renderItems()}</div>
}

export default ItemsList
