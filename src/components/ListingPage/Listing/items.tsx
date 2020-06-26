import React from 'react'
import { ItemData, Theme, SiteData, ListingCardType, ListingCardSize } from '../../../utils/models'
import ModernItem from './CardType/modern-item'
import ProfileItem from './CardType/profiles-item'
import BasicItem from './CardType/basic-item'
import CompactItem from './CardType/compact-item'
import MinimalItem from './CardType/minimal-item'
import PillItem from './CardType/pill-item'
import EventsItem from './CardType/events-item'

interface Props {
  items: ItemData[]
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
  siteData: SiteData
}

const Items: React.FC<Props> = ({ items, theme, handleOpenModal, siteData }) => {
  const { listingCardType, listingCardSize } = siteData

  const getNumOfColsByCardType = (listingCardType): { small: number; medium: number; large: number } => {
    switch (listingCardType) {
      case ListingCardType.PILL:
        return { small: 4, medium: 3, large: 2 }
      case ListingCardType.PROFILES:
        return { small: 4, medium: 3, large: 2 }
      case ListingCardType.EVENTS:
        return { small: 3, medium: 2, large: 1 }
      default:
        return { small: 5, medium: 4, large: 3 }
    }
  }

  const getNumOfCols = (listingCardSize): number => {
    switch (listingCardSize) {
      case ListingCardSize.SMALL:
        return getNumOfColsByCardType(listingCardType).small
      case ListingCardSize.MEDIUM:
        return getNumOfColsByCardType(listingCardType).medium
      case ListingCardSize.LARGE:
        return getNumOfColsByCardType(listingCardType).large
      default:
        return getNumOfColsByCardType(listingCardType).medium
    }
  }

  const renderBasicItems = () => {
    return items.map((item) => (
      <BasicItem item={item} key={item.itemId} theme={theme} siteData={siteData} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderCompactItems = () => {
    return items.map((item) => (
      <CompactItem item={item} key={item.itemId} theme={theme} siteData={siteData} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderMinimalItems = () => {
    return items.map((item) => (
      <MinimalItem item={item} key={item.itemId} theme={theme} siteData={siteData} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderModernItems = () => {
    return items.map((item) => (
      <ModernItem item={item} key={item.itemId} theme={theme} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderPillItems = () => {
    return items.map((item) => (
      <PillItem item={item} key={item.itemId} theme={theme} handleOpenModal={handleOpenModal} />
    ))
  }

  const renderEventItems = () => {
    return items.map((item) => <EventsItem item={item} key={item.itemId} theme={theme} siteData={siteData} />)
  }

  const renderProfileItems = () => {
    return items.map((item) => <ProfileItem item={item} key={item.itemId} theme={theme} />)
  }

  const renderItems = () => {
    switch (listingCardType) {
      case ListingCardType.BASIC:
        return renderBasicItems()
      case ListingCardType.COMPACT:
        return renderCompactItems()
      case ListingCardType.MINIMAL:
        return renderMinimalItems()
      case ListingCardType.MODERN:
        return renderModernItems()
      case ListingCardType.PILL:
        return renderPillItems()
      case ListingCardType.EVENTS:
        return renderEventItems()
      case ListingCardType.PROFILES:
        return renderProfileItems()
      default:
        return renderBasicItems()
    }
  }

  const numOfCols = getNumOfCols(listingCardSize)

  return <div className={`grid grid-cols-1 md:grid-cols-${numOfCols} gap-8`}>{renderItems()}</div>
}

export default Items
