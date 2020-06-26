import React from 'react'
import { Theme, ItemData, SiteData, ListingCardType } from '../../../../utils/models'
import ListingItems from '../listing-items'

interface Props {
  items: ItemData[]
  categories: string[]
  theme: Theme
  siteData: SiteData
  handleSearch: (e) => void
}

const SectionView: React.FC<Props> = ({ items, categories, theme, siteData, handleSearch }) => {
  const getCategoryStyle = () => {
    const { primary, secondary, text } = theme

    switch (siteData.listingCardType) {
      case ListingCardType.PILL:
        return `text-white border-l-4 border-r-4 border-${primary} pb-1 px-4  bg-${secondary} rounded-full`
      case ListingCardType.MINIMAL:
        return `${text} border-l-8 border-r-8 border-t-2  border-b-2 border-${primary} pb-1 px-4 rounded-lg`
      default:
        return `text-white border-l-4 border-r-4  border-${primary} pb-1 px-4 bg-${secondary} rounded-lg`
    }
  }
  const renderSingleSection = (itemsInCategory: ItemData[], category: string) => {
    if (!!itemsInCategory && itemsInCategory.length > 0) {
      const categoryStyle = getCategoryStyle()
      return (
        <div className="container mx-auto mt-16 mb-20 px-4">
          <div className={`mb-12 ml-1 inline-block ${categoryStyle}`}>
            <h3 className={`text-2xl`}>{category}</h3>
          </div>
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
