import React from 'react'
import { Theme, ItemData, SiteData } from '../../../../utils/models'
import ListingItems from '../listing-items'

interface Props {
  items: ItemData[]
  categories: string[]
  theme: Theme
  siteData: SiteData
  handleSearch: (e) => void
}

const SectionView: React.FC<Props> = ({ items, categories, theme, siteData, handleSearch }) => {
  const renderSingleSection = (itemsInCategory: ItemData[], category: string) => {
    if (!!itemsInCategory && itemsInCategory.length > 0) {
      return (
        <div className="container mx-auto mt-16 mb-16 px-4">
          <h3 className={`mb-8  text-2xl pb-1 px-4 inline-block rounded-lg bg-${theme.primary} text-white`}>
            {category}
          </h3>
          <ListingItems theme={theme} items={itemsInCategory} siteData={siteData} />
        </div>
      )
    }

    return <></>
  }

  const renderSections = () => {
    if (!!categories && categories.length > 1) {
      return categories.map((category) => {
        const itemsInCategory: ItemData[] = items.filter((item) => item.categories.includes(category))
        return renderSingleSection(itemsInCategory, category)
      })
    }
  }

  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <input
        className={`focus:outline-none focus:shadow-lg border border-gray-300 shadow rounded-lg py-2 px-4 block mt-8 w-full md:w-1/2 mx-auto`}
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      {renderSections()}
    </div>
  )
}

export default SectionView
