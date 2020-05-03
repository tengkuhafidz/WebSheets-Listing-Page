import React from 'react'
import SingleItem from './single-item'
import { ItemData } from '../../models'

interface Props {
  items: ItemData[]
  numOfColumns: number
}

const ItemsList: React.FC<Props> = ({ items, numOfColumns }) => {
  const renderItems = () => {
    return items.map((item) => <SingleItem item={item} key={item.id} />)
  }
  return <div className={`grid grid-cols-${numOfColumns} gap-4`}>{renderItems()}</div>
}

export default ItemsList
