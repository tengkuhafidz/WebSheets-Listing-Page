import React from 'react'
import ModernItem from './Modern/modern-item'
import { ItemData, Theme, ListingType, SiteData } from '../../../utils/models'
import ProfileItem from './Profiles/profiles-item'
import BasicItem from './Basic/basic-item'
import CompactItem from './Compact/compact-item'

interface Props {
  items: ItemData[]
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const Items: React.FC<Props> = ({ items, theme, handleOpenModal, siteData }) => {
  const renderBasicItems = () => {
    return items.map((item) => (
      <BasicItem item={item} key={item.itemId} theme={theme} handleOpenModal={handleOpenModal} siteData={siteData} />
    ))
  }

  const renderCompactItems = () => {
    return items.map((item) => (
      <CompactItem item={item} key={item.itemId} theme={theme} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderProfileItems = () => {
    return items.map((item) => (
      <ProfileItem item={item} key={item.itemId} theme={theme} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderModernItems = () => {
    return items.map((item) => (
      <ModernItem item={item} key={item.itemId} theme={theme} handleOpenModal={handleOpenModal} />
    ))
  }

  const { listingType } = siteData

  switch (listingType) {
    case ListingType.BASIC_3:
      return <div className={`grid md:grid-cols-${3} gap-8`}>{renderBasicItems()}</div>
    case ListingType.BASIC_4:
      return <div className={`grid md:grid-cols-${4} gap-8`}>{renderBasicItems()}</div>
    case ListingType.COMPACT_4:
      return <div className={`grid md:grid-cols-${4} gap-4`}>{renderCompactItems()}</div>
    case ListingType.COMPACT_5:
      return <div className={`grid md:grid-cols-${5} gap-4`}>{renderCompactItems()}</div>
    case ListingType.COMPACT_6:
      return <div className={`grid md:grid-cols-${6} gap-4`}>{renderCompactItems()}</div>
    case ListingType.PROFILES_3:
      return <div className={`grid md:grid-cols-${3} gap-8`}>{renderProfileItems()}</div>
    case ListingType.PROFILES_4:
      return <div className={`grid md:grid-cols-${4} gap-8`}>{renderProfileItems()}</div>
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
