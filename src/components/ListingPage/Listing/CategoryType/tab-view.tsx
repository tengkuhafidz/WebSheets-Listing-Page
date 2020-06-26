import React, { useState } from 'react'
import { ItemData, Theme, SiteData } from '../../../../utils/models'
import ListingItems from '../listing-items'
import { gtagEventClick } from '../../../../utils/gtag'

interface Props {
  categories: string[]
  items: ItemData[]
  theme: Theme
  siteData: SiteData
  handleSearch: (e) => void
}

const TabView: React.FC<Props> = ({ items, categories, theme, siteData, handleSearch }) => {
  const { text, altBackground, secondary } = theme
  const ALL = 'All'
  const tabs = [ALL, ...categories]
  const [currentTab, setCurrentTab] = useState(tabs[0])

  const itemsInTab = currentTab !== ALL ? items.filter((item) => item.categories.includes(currentTab)) : items

  const handleTabClick = (tab: string) => {
    gtagEventClick('click_filter_tab', tab)
    setCurrentTab(tab)
  }

  const handleInputSearch = (e) => {
    setCurrentTab(tabs[0])
    handleSearch(e)
  }

  const renderTabs = () => {
    if (!!categories && categories.length > 1) {
      return tabs.map((category) => (
        <li className="mr-3" key={category}>
          <a
            className={`inline-block rounded py-1 px-3 cursor-pointer ${
              category === currentTab ? `border border-${secondary} ${altBackground} ${text}` : `${text}`
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </a>
        </li>
      ))
    }
  }

  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <ul className="mt-4 flex flex-wrap justify-center">{renderTabs()}</ul>
      <input
        className={`focus:outline-none focus:shadow-lg border border-gray-300 shadow rounded-lg py-2 px-4 block mt-8 w-full md:w-1/2 mx-auto`}
        type="text"
        placeholder="Search"
        onChange={(e) => handleInputSearch(e)}
      />
      <div className="container mx-auto mt-16 mb-32 px-4">
        <ListingItems theme={theme} items={itemsInTab} siteData={siteData} />
      </div>
    </div>
  )
}

export default TabView
