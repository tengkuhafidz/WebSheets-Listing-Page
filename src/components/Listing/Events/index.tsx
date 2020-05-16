import React from 'react'
import { ItemData, Theme, SiteData } from '../../../utils/models'
import ItemsList from './items-list'

interface Props {
  theme: Theme
  items: ItemData[]
  siteData: SiteData
}

const Events: React.FC<Props> = ({ theme, items, siteData }) => {
  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <ItemsList items={items} theme={theme} siteData={siteData} />
    </div>
  )
}

export default Events
