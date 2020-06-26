import Fuse from 'fuse.js'
import React, { useState } from 'react'
import { gtagEventClick } from '../../../utils/gtag'
import { ItemData, SiteData, Theme, ListingCategoryType } from '../../../utils/models'
import TabView from './CategoryType/tab-view'
import SectionView from './CategoryType/section-view'

interface Props {
  theme: Theme
  siteData: SiteData
  listingData: ItemData[]
}

const Listing: React.FC<Props> = ({ theme, siteData, listingData }) => {
  const allItems = listingData

  const getDistinctCategories = () => {
    const distinctCategories = []
    allItems.forEach((item) => {
      if (item.categories) {
        item.categories.forEach((category) => {
          !distinctCategories.includes(category) && distinctCategories.push(category)
        })
      }
    })
    return distinctCategories
  }

  const distinctCategories = getDistinctCategories()

  const [searchTerm, setSearchTerm] = useState('')

  const getFuseSearchResult = (items: ItemData[], searchTerm: string): ItemData[] => {
    const options = {
      isCaseSensitive: false,
      findAllMatches: false,
      includeMatches: false,
      includeScore: false,
      useExtendedSearch: false,
      minMatchCharLength: 1,
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      keys: ['title', 'subtitle', 'description', 'categories'],
    }

    const fuse: Fuse<any, Fuse.IFuseOptions<any>> = new Fuse(items, options)
    const fuseSearchResult = fuse.search(searchTerm)
    return fuseSearchResult.map((result) => result.item)
  }

  const filteredItems = searchTerm ? getFuseSearchResult(allItems, searchTerm) : allItems

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    gtagEventClick('search', searchTerm)
    setSearchTerm(searchTerm)
  }

  switch (siteData.listingCategoryType) {
    case ListingCategoryType.TabsView:
      return (
        <TabView
          items={filteredItems}
          categories={distinctCategories}
          theme={theme}
          siteData={siteData}
          handleSearch={handleSearch}
        />
      )
    case ListingCategoryType.SectionsView:
      return (
        <SectionView
          items={filteredItems}
          categories={distinctCategories}
          theme={theme}
          siteData={siteData}
          handleSearch={handleSearch}
        />
      )
    default:
      return (
        <TabView
          items={filteredItems}
          categories={distinctCategories}
          theme={theme}
          siteData={siteData}
          handleSearch={handleSearch}
        />
      )
  }
}

export default Listing
