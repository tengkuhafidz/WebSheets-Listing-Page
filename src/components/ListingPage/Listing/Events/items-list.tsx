import React from 'react'
import { ItemData, SiteData, Theme } from '../../../../utils/models'
import SingleItem from './single-item'

interface Props {
  items: ItemData[]
  theme: Theme
  siteData: SiteData
}

const ItemsList: React.FC<Props> = ({ items, theme, siteData }) => {
  const renderItems = () => {
    return items.map((item) => <SingleItem item={item} key={item.itemId} theme={theme} siteData={siteData} />)
  }
  return <div className={`grid md:grid-cols-1`}>{renderItems()}</div>
}

export default ItemsList
