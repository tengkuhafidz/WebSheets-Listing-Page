import React from 'react'
import SingleItem from './single-item'
import { ItemData, Theme } from '../../models'

interface Props {
  items: ItemData[]
  numOfColumns: number
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const ItemsList: React.FC<Props> = ({ items, numOfColumns, theme, handleOpenModal }) => {
  const renderItems = () => {
    return items.map((item) => <SingleItem item={item} key={item.id} theme={theme} handleOpenModal={handleOpenModal} />)
  }
  return <div className={`grid md:grid-cols-${numOfColumns} gap-4 mt-4`}>{renderItems()}</div>
}

export default ItemsList
