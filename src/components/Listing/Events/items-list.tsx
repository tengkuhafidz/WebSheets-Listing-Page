import React from 'react'
import SingleItem from './single-item'
import { ItemData, Theme, SiteData } from '../../../utils/models'
import { siteData } from '../../../pages'

interface Props {
  items: ItemData[]
  theme: Theme
  siteData: SiteData
}

const ItemsList: React.FC<Props> = ({ items, theme, siteData }) => {
  const renderItems = () => {
    return items.map((item) => <SingleItem item={item} key={item.id} theme={theme} siteData={siteData} />)
  }
  return <div className={`grid md:grid-cols-1`}>{renderItems()}</div>
}

export default ItemsList
